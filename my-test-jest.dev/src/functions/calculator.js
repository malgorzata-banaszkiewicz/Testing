import { useState } from 'react'

const Calculator = () => {
  const [firstOperand, setFirstOperand] = useState(0)
  const [secondOperand, setSecondOperand] = useState(0)
  const [operator, setOperator] = useState('+')

  const calculateResult = () => {
    switch (operator) {
      case '+':
        return +firstOperand + +secondOperand
      case '-':
        return +firstOperand - +secondOperand
      case '*':
        return +firstOperand * +secondOperand
      case '/':
        return +firstOperand / +secondOperand
      default:
        throw new Error('Performing wrong type of calculation')
    }
  }

  return (
    <>
      <input
        value={firstOperand}
        placeholder="Enter first number..."
        type="number"
        onChange={event => setFirstOperand(event.target.value)}
      />
      <input
        value={secondOperand}
        placeholder="Enter second number..."
        type="number"
        onChange={event => setSecondOperand(event.target.value)}
      />
      <button onClick={() => setOperator('+')}>+</button>
      <button data-testid="subtract" onClick={() => setOperator('-')}>
        -
      </button>
      <button onClick={() => setOperator('*')}>*</button>
      <button onClick={() => setOperator('/')}>/</button>
      <div>Result {calculateResult()}</div>
    </>
  )
}

export default Calculator