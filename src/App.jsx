import { useState } from "react"
import Button from "./Button";

export default function App() {
  const [currentValue, setCurrentValue] = useState("")
  const [previousValue, setPreviousValue] = useState("")
  const [operator, setOperator] = useState(null)

  function handleClick(number) {
    if (operator === null) {
      setPreviousValue(preValue => preValue + number);
    } else {
      setCurrentValue(prevNumber => prevNumber + number);
    }
  }

  function handleOperator(newOperator) {
    setOperator(newOperator)
  }

  function handleChangeSign() {
    return currentValue * -1
  }

  function handleClear() {
    setCurrentValue("")
    setPreviousValue("")
    setOperator(null)

  }

  function handleEqual() {
    let result = 0;
    switch (operator) {
      case '+':
        result = Number(previousValue) + Number(currentValue);
        break;
      case '-':
        result = Number(previousValue) - Number(currentValue);
        break;
      case '*':
        result = Number(previousValue) * Number(currentValue);
        break;
      case '/':
        result = Number(previousValue) / Number(currentValue);
        break;
      case '%':
        result = Number(previousValue) % Number(currentValue);
        break;
      default:
        result = Number(currentValue);
        break;
    }
    setCurrentValue(result);
    setOperator(null);
    setPreviousValue("");
  }

  return (
    <main className="h-screen mx-auto container flex flex-col items-center justify-center">
      <div className="grid grid-cols-4 text-center cursor-pointer">
        <div className="bg-[#7b7a89] text-white w-full text-2xl p-4 font-bold flex col-span-4 justify-end">{currentValue || previousValue || "0"}</div>
        <Button handleClick={handleClear} style="text-lg">AC</Button>
        <Button handleClick={() => setCurrentValue(handleChangeSign)}>+/-</Button>
        <Button handleClick={() => handleOperator('%')}>%</Button>
        <Button handleClick={() => handleOperator('/')} style="bg-[#f48637]">÷</Button>
        <Button handleClick={() => handleClick('7')}>7</Button>
        <Button handleClick={() => handleClick('8')}>8</Button>
        <Button handleClick={() => handleClick('9')}>9</Button>
        <Button handleClick={() => handleOperator('*')} style="bg-[#f48637] text-lg">x</Button>
        <Button handleClick={() => handleClick('4')}>4</Button>
        <Button handleClick={() => handleClick('5')}>5</Button>
        <Button handleClick={() => handleClick('6')}>6</Button>
        <Button handleClick={() => handleOperator('-')} style="bg-[#f48637] text-3xl">-</Button>
        <Button handleClick={() => handleClick('1')}>1</Button>
        <Button handleClick={() => handleClick('2')}>2</Button>
        <Button handleClick={() => handleClick('3')}>3</Button>
        <Button handleClick={() => handleOperator('+')} style="bg-[#f48637]">+</Button>
        <Button handleClick={() => handleClick('0')} style="col-span-2" >0</Button>
        <Button handleClick={() => handleClick('.')}>.</Button>
        <Button handleClick={handleEqual} style="bg-[#f48637]">=</Button>
      </div>
    </main >
  )
}

