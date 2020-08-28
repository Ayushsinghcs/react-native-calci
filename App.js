import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [value, setValue] = React.useState(operandTwo + operandOne);
  const [operandOne, setOperandOne] = React.useState(0);
  const [operandTwo, setOperandTwo] = React.useState(0);
  const [operator, setOperator] = React.useState(null);
  const [isOperator] = React.useState(false);

  const updateNumber = (name) => {
    let number = isOperator ? operandTwo : operandOne;
    switch (name) {
      case "number-seven":
        isOperator
          ? setOperandTwo(number * 10 + 7)
          : setOperandOne(number * 10 + 7);
        break;
      case "number-nine":
        isOperator
          ? setOperandTwo(number * 10 + 9)
          : setOperandOne(number * 10 + 9);
        break;
    }
  };

  const updateOperator = (operatorName) => {
    let computedValue;
    if (operatorName === "operator-divide") {
      computedValue = operandOne / operandTwo;
      setOperator("/");
      setValue(computedValue);
    } else if (operatorName === "operator-multiply") {
      computedValue = operandOne / operandTwo;
      setOperator("x");
      setValue(computedValue);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.outerElement}>
        <TouchableOpacity style={styles.content}>
          <Text style={styles.contentText}>
            {operandOne} {operator}
            {operandTwo}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Text style={styles.elementBorder} onPress={() => setValue(0)}>
          AC
        </Text>
        <Text style={styles.elementBorder}>C</Text>
        <Text style={styles.elementBorder}>%</Text>
        <Text
          style={styles.elementBorder}
          onPress={() => updateOperator("operator-divide")}
        >
          /
        </Text>
      </View>
      <View style={styles.box}>
        <Text
          style={styles.element}
          onPress={(e) => updateNumber(e, "number-seven")}
        >
          7
        </Text>
        <Text style={styles.element}>8</Text>
        <Text
          style={styles.element}
          onPress={(e) => updateNumber(e, "number-nine")}
        >
          9
        </Text>
        <Text
          style={styles.elementBorder}
          onPress={() => updateOperator("operator-multiply")}
        >
          x
        </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.element}>4</Text>
        <Text style={styles.element}>5</Text>
        <Text style={styles.element}>6</Text>
        <Text style={styles.elementBorder}>-</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.element}>1</Text>
        <Text style={styles.element}>2</Text>
        <Text style={styles.element}>3</Text>
        <Text style={styles.elementBorder}>+</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.element}></Text>
        <Text style={styles.element}>0</Text>
        <Text style={styles.element}>.</Text>
        <Text style={styles.elementBorder}>=</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  outerElement: {
    height: "40%",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flex: 1,
    opacity: 0.7,
    shadowOpacity: 0.5,
  },
  box: {
    borderColor: 1,
    borderRadius: 5,
    opacity: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    height: 50,
  },
  element: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 40,
  },
  elementBorder: {
    color: "#FF8C00",
    textAlign: "center",
    fontSize: 40,
  },
  content: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
  },
  contentText: {
    color: "#FFFFFF",
    fontSize: 40,
  },
});
