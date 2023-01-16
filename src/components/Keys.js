import React from "react";
import { useState } from "react";
import '../App.css'
import Screen from "./Screen";

const Keys = () => {

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  // declaring operators
  const operators = ['/', '*', '-', '+', '.']

  const updateCalc = (value) => {
    if(
      operators.includes(value) && calc === '' || operators.includes(value) && operators.includes(calc.slice(-1))
    ) {
      return
    }
    setCalc(calc + value)
    if(!operators.includes(value)){
      setResult(eval(calc + value).toString())
    }
    setResult('')
  }

  const evaluate = () => {
    setCalc(eval(calc).toString())
  }

  const deleteDigit = () => {
    if (calc === '') {
      return
    }
    const value = calc.slice(0, -1)
    setCalc(value)
    setCalc('')
  }
  
  return (
    <>
    <Screen result = {result} calc={calc} deleteDigit={deleteDigit}/>
    <div className="keys">
      <span onClick={() => updateCalc('7')}>7</span>
      <span onClick={() => updateCalc('8')}>8</span>
      <span onClick={() => updateCalc('9')}>9</span>
      <span onClick={() => updateCalc('+')} className="operator">+</span>
      <span onClick={() => updateCalc('4')}>4</span>
      <span onClick={() => updateCalc('5')}>5</span>
      <span onClick={() => updateCalc('6')}>6</span>
      <span onClick={() => updateCalc('-')} className="operator">-</span>
      <span onClick={() => updateCalc('1')}>1</span>
      <span onClick={() => updateCalc('2')}>2</span>
      <span onClick={() => updateCalc('3')}>3</span>
      <span onClick={() => updateCalc('/')} className="operator">/</span>
      <span onClick={() => updateCalc('0')}>0</span>
      <span onClick={() => updateCalc('.')}>.</span>
      <span className="eval" onClick={evaluate}>=</span>
      <span onClick={() => updateCalc('*')} className="operator">x</span>
    </div>
    </>

  );
};

export default Keys;
