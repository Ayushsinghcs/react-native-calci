import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [value, setValue] = React.useState(0);
  const [operandOne, setOperandOne] = React.useState(0);
  const [operandTwo, setOperandTwo] = React.useState(0);
  const [operator, setOperator] = React.useState(null);
  const [isOperator, setOperatorBoolean] = React.useState(false);

  const updateNumber = (name) => {
    let number = isOperator ? operandTwo : operandOne;
    let computedValue
    switch (name) {
      case "number-nine":
        isOperator
          ?
          setOperandTwo(number * 10 + 9)
          : setOperandOne(number * 10 + 9);
        break;
      case "number-eight":
        isOperator
          ? setOperandTwo(number * 10 + 8)
          : setOperandOne(number * 10 + 8);
        break;
      case "number-seven":
        isOperator
          ? setOperandTwo(number * 10 + 7)
          : setOperandOne(number * 10 + 7);
        break;
      case "number-six":
        isOperator
          ? setOperandTwo(number * 10 + 6)
          : setOperandOne(number * 10 + 6);
        break;
      case "number-five":
        isOperator
          ? setOperandTwo(number * 10 + 5)
          : setOperandOne(number * 10 + 5);
        break;
      case "number-four":
        isOperator
          ? setOperandTwo(number * 10 + 4)
          : setOperandOne(number * 10 + 4);
        break;
      case "number-three":
        isOperator
          ? setOperandTwo(number * 10 + 3)
          : setOperandOne(number * 10 + 3);
        break;
      case "number-two":
        isOperator
          ? setOperandTwo(number * 10 + 2)
          : setOperandOne(number * 10 + 2);
        break;
      case "number-one":
        isOperator
          ? setOperandTwo(number * 10 + 1)
          : setOperandOne(number * 10 + 1);
        break;
      case "number-zero":
        isOperator
          ? setOperandTwo(number * 10)
          : setOperandOne(number * 10);
        break;
    }
  };
  const resetValue = () => {
    setOperatorBoolean(false);
    setOperandOne(0)
    setOperandTwo(0)
    setOperator(null)
    setValue(0)
  }

  const updateOperator = (operatorName) => {

    setOperatorBoolean(true);
    if (operatorName === "operator-divide") {

      setOperator("/");

    } else if (operatorName === "operator-multiply") {
      setOperator("x");

    } else if (operatorName === "operator-substract") {


      setOperator("-");

    } else if (operatorName === "operator-add") {


      setOperator("+");

    }
  };

  // if (operandTwo !== 0 && isOperator) {
  //   let computedValue = operandOne + operator + operandTwo;
  //   setValue(computedValue);
  //   console.log(computedValue)
  // }
  console.log(value)
  console.log(operandTwo + 'op')
  return (
    <View style={styles.container}>
      <View style={styles.outerElement}>
        <TouchableOpacity style={styles.content}>
          <Text style={styles.contentText}>
            {operandOne} {operator}
            {isOperator && operandTwo !== 0 ? operandTwo : null}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <Text style={styles.elementBorder} onPress={resetValue}>
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
          onPress={(e) => updateNumber("number-seven")}
        >
          7
        </Text>
        <Text style={styles.element} onPress={(e) => updateNumber("number-eight")}>8</Text>
        <Text
          style={styles.element}
          onPress={(e) => updateNumber("number-nine")}
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
        <Text style={styles.element} onPress={(e) => updateNumber("number-four")}>4</Text>
        <Text style={styles.element} onPress={(e) => updateNumber("number-five")}>5</Text>
        <Text style={styles.element} onPress={(e) => updateNumber("number-six")}>6</Text>
        <Text style={styles.elementBorder} onPress={() => updateOperator("operator-substract")}>-</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.element} onPress={(e) => updateNumber("number-one")}>1</Text>
        <Text style={styles.element} onPress={(e) => updateNumber("number-two")}>2</Text>
        <Text style={styles.element} onPress={(e) => updateNumber("number-three")}>3</Text>
        <Text style={styles.elementBorder} onPress={() => updateOperator("operator-add")}>+</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.element}></Text>
        <Text style={styles.element} onPress={(e) => updateNumber("number-zero")}>0</Text>
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
