import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  memory: null,
  operation: null,
  currentValue: null,
  isDecimal: false,
  addNumber: (value) => {},
  addOperation: (operation) => {},
  getResult: () => {},
  executeAction: (action) => {},
});

export function CalculatorState({ children }) {
  const [memory, setMemory] = useState(null);
  const [operation, setOperation] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [isReset, setIsReset] = useState(true);
  const [isDecimal, setIsDecimal] = useState(false);

  const handleAddNumber = (value) => {
    if (isReset) {
      if (value === ".") {
        setIsDecimal(true);
      } else {
        const point = isDecimal ? "." : "";
        const newValue = currentValue.toString() + point + value.toString();
        setCurrentValue(parseFloat(newValue));
        setIsDecimal(false);
        setIsReset(false);
      }
    } else {
      if (value === ".") {
        setIsDecimal(true);
      } else {
        const point = isDecimal ? "." : "";
        const newValue = currentValue.toString() + point + value.toString();
        setIsDecimal(false);
        setCurrentValue(parseFloat(newValue));
      }
    }
  };
  const handleAddOperation = (op) => {
    if (currentValue) {
      if (operation) {
        //Resolver
        handleGetResult();
        setOperation(op);
      } else {
        setOperation(op);
        setMemory(currentValue);
        setCurrentValue(0);
        setIsReset(true);
      }
    }
  };
  const handleGetResult = () => {
    let result = 0;
    if (currentValue && operation && memory) {
      switch (operation) {
        case "+":
          result = parseFloat(currentValue) + parseFloat(memory);
          break;
        case "-":
          result = parseFloat(memory) - parseFloat(currentValue);
          break;
        case "*":
          result = parseFloat(currentValue) * parseFloat(memory);
          break;
        case "/":
          result = parseFloat(memory) / parseFloat(currentValue);
          break;
        case "%":
          result = (parseFloat(memory) / 100) * parseFloat(currentValue);
          break;
        default:
          break;
      }
      setCurrentValue(result);
      setOperation(null);
      setMemory(result);
      setIsReset(true);
    }
  };

  function clean() {
    setCurrentValue(0);
    setOperation(null);
    setMemory(0);
    setIsReset(true);
    setIsDecimal(false);
  }
  function deleteNumber() {
    setCurrentValue(parseInt(currentValue / 10));
  }
  function changeSign() {
    setCurrentValue(currentValue * -1);
  }
  function convertToFloat() {
    if (currentValue.toString().indexOf(".") > 0) {
      //el numero ya es flotante
    } else {
      handleAddNumber(".");
    }
  }

  const handleExecuteAction = (action) => {
    switch (action) {
      case "=":
        handleGetResult();
        break;
      case "AC":
        clean();
      case "<=":
        deleteNumber();
        break;
      case "+/-":
        changeSign();
        break;
      case ".":
        convertToFloat();
        break;
      default:
        break;
    }
  };

  const value = {
    memory,
    operation,
    currentValue,
    isDecimal,
    addNumber: handleAddNumber,
    addOperation: handleAddOperation,
    getResult: handleGetResult,
    executeAction: handleExecuteAction,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
