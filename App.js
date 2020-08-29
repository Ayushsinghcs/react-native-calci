import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [operandOne, setOperandOne] = React.useState(0);
  const [operandTwo, setOperandTwo] = React.useState(0);
  const [operator, setOperator] = React.useState(null);
  const [isOperator, setOperatorBoolean] = React.useState(false);

  const resetValue = () => {
    setOperatorBoolean(false);
    setOperandOne(0);
    setOperandTwo(0);
    setOperator(null);
  };
  const removeLast = () => {
    if (!isOperator) {
      setOperandOne(parseInt(operandOne / 10));
    } else if (isOperator && operandTwo === 0) {
      setOperator(null);
      setOperatorBoolean(false);
      setOperandTwo(0);
    } else if (isOperator && operandTwo !== 0) {
      setOperandTwo(parseInt(operandTwo / 10));
    }
  };
  const calculateTotal = () => {
    const computedValue =
      operandTwo === 0 && !Number.isInteger(operandOne)
        ? operandOne
        : eval(operandOne + operator + operandTwo);
    setOperatorBoolean(false);
    setOperandTwo(0);
    setOperator(null);
    setOperandOne(computedValue);
  };

  const updateOperator = (operatorName) => {
    setOperatorBoolean(true);
    if (operatorName === "operator-divide") {
      setOperator("/");
    } else if (operatorName === "operator-multiply") {
      setOperator("*");
    } else if (operatorName === "operator-substract") {
      setOperator("-");
    } else if (operatorName === "operator-add") {
      setOperator("+");
    } else if (operatorName === "operator-percent") {
      setOperator("%");
    }
  };

  const updateNumber = (name) => {
    let number = isOperator ? operandTwo : operandOne;
    let isNumber = Number.isInteger(number);
    switch (name) {
      case "number-nine":
        if (isOperator) {
          isNumber
            ? setOperandTwo(number * 10 + 9)
            : setOperandTwo(`${number}9`);
        } else {
          isNumber
            ? setOperandOne(number * 10 + 9)
            : setOperandOne(`${number}9`);
        }
        break;
      case "number-eight":
        if (isOperator) {
          isNumber
            ? setOperandTwo(number * 10 + 8)
            : setOperandTwo(`${number}8`);
        } else {
          isNumber
            ? setOperandOne(number * 10 + 8)
            : setOperandOne(`${number}8`);
        }
        break;
      case "number-seven":
        if (isOperator) {
          isNumber
            ? setOperandTwo(number * 10 + 7)
            : setOperandTwo(`${number}7`);
        } else {
          isNumber
            ? setOperandOne(number * 10 + 7)
            : setOperandOne(`${number}7`);
        }
        break;
      case "number-six":
        if (isOperator) {
          isNumber
            ? setOperandTwo(number * 10 + 6)
            : setOperandTwo(`${number}6`);
        } else {
          isNumber
            ? setOperandOne(number * 10 + 6)
            : setOperandOne(`${number}6`);
        }
        break;
      case "number-five":
        if (isOperator) {
          isNumber
            ? setOperandTwo(number * 10 + 5)
            : setOperandTwo(`${number}5`);
        } else {
          isNumber
            ? setOperandOne(number * 10 + 5)
            : setOperandOne(`${number}5`);
        }
        break;
      case "number-four":
        if (isOperator) {
          isNumber
            ? setOperandTwo(number * 10 + 4)
            : setOperandTwo(`${number}4`);
        } else {
          isNumber
            ? setOperandOne(number * 10 + 4)
            : setOperandOne(`${number}4`);
        }
        break;
      case "number-three":
        if (isOperator) {
          isNumber
            ? setOperandTwo(number * 10 + 3)
            : setOperandTwo(`${number}3`);
        } else {
          isNumber
            ? setOperandOne(number * 10 + 3)
            : setOperandOne(`${number}3`);
        }
        break;
      case "number-two":
        if (isOperator) {
          isNumber
            ? setOperandTwo(number * 10 + 2)
            : setOperandTwo(`${number}2`);
        } else {
          isNumber
            ? setOperandOne(number * 10 + 2)
            : setOperandOne(`${number}2`);
        }
        break;
      case "number-one":
        if (isOperator) {
          isNumber
            ? setOperandTwo(number * 10 + 1)
            : setOperandTwo(`${number}1`);
        } else {
          isNumber
            ? setOperandOne(number * 10 + 1)
            : setOperandOne(`${number}1`);
        }
        break;
      case "number-zero":
        if (isOperator) {
          isNumber ? setOperandTwo(number * 10) : setOperandTwo(`${number}0`);
        } else {
          isNumber ? setOperandOne(number * 10) : setOperandOne(`${number}0`);
        }
        break;
    }
  };
  const updateDot = () => {
    let number = isOperator ? operandTwo : operandOne;
    if (isOperator) {
      Number.isInteger(number)
        ? setOperandTwo(`${number}.`)
        : setOperandTwo(number);
    } else {
      Number.isInteger(number)
        ? setOperandOne(`${number}.`)
        : setOperandOne(number);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.outerElement}>
        <TouchableOpacity style={styles.content}>
          <Text style={styles.contentText}>
            {operandOne}
            {operator}
            {isOperator && operandTwo !== 0 ? operandTwo : null}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity onPress={resetValue} style={styles.numberBox}>
          <Text style={styles.elementBorder}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeLast} style={styles.numberBox}>
          <Text style={styles.elementBorder}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => updateOperator("operator-percent")}
          style={styles.numberBox}
        >
          <Text style={styles.elementBorder}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => updateOperator("operator-divide")}
          style={styles.numberBox}
        >
          <Text style={styles.elementBorder}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-seven")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-eight")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-nine")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => updateOperator("operator-multiply")}
          style={styles.numberBox}
        >
          <Text style={styles.elementBorder}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-four")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-five")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-six")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => updateOperator("operator-substract")}
          style={styles.numberBox}
        >
          <Text style={styles.elementBorder}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-one")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-two")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-three")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => updateOperator("operator-add")}
          style={styles.numberBox}
        >
          <Text style={styles.elementBorder}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={styles.numberBox}>
          <Text style={styles.element}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(e) => updateNumber("number-zero")}
          style={styles.numberBox}
        >
          <Text style={styles.element}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberBox} onPress={updateDot}>
          <Text style={styles.element}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={calculateTotal} style={styles.numberBox}>
          <Text style={styles.elementBorder}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  outerElement: {
    height: "40%",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flex: 1,
    opacity: 0.7,
    shadowOpacity: 0.5,
    alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  box: {
    borderColor: 1,
    borderRadius: 5,
    opacity: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 10,
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
    bottom: 2,
    right: 0,
    position: "absolute",
  },
  contentText: {
    color: "#FFFFFF",
    fontSize: 40,
  },
  numberBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "25%",
  },
});
