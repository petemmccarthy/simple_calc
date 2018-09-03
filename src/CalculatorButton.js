import React, { Component } from 'react'
import { calculatorButtons } from './utils/calculationTypes'

class CalculatorButton extends Component {

  handleClick(button) {
    this.props.handleClick(button)
  }

  render() {
    return (
     <div className="calculator-button-row">
        {calculatorButtons.map( (button, i) =>
         <button
            className="calculator-button"
            key={i}
            value={button}
            onClick={() => this.handleClick(button)}
          >{button}</button>
        )}
      </div>
    )
  }

}

export default CalculatorButton
