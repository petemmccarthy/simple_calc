import React from 'react'

const CalculatorButton = (props) => (

  <button
    className="calculator-button"
    onClick={props.onClick}>
    {props.value}
  </button>

)

export default CalculatorButton
