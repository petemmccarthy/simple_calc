import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CalculatorButton extends React.Component {
  render() {
    return (
      <button className="calculator-button">
        {this.props.value}
      </button>
    );
  }
}

class Calculator extends React.Component {
  renderCalculatorButton(i) {
    return (
      <CalculatorButton
      value={i}
    />
    );
  };

  render() {
    return (
      <div className="calculator-container">
        <div className="result">0.123456789</div>
        <div className="calculator-button-row">
          <div>{this.renderCalculatorButton(1)}</div>
          <div>{this.renderCalculatorButton(2)}</div>
          <div>{this.renderCalculatorButton(3)}</div>
          <div>{this.renderCalculatorButton(4)}</div>
        </div>
        <div className="calculator-button-row">
          <div>{this.renderCalculatorButton(5)}</div>
          <div>{this.renderCalculatorButton(6)}</div>
          <div>{this.renderCalculatorButton(7)}</div>
          <div>{this.renderCalculatorButton(8)}</div>
        </div>
        <div className="calculator-button-row">
          <div>{this.renderCalculatorButton(9)}</div>
          <div>{this.renderCalculatorButton(0)}</div>
          <div>{this.renderCalculatorButton("+")}</div>
          <div>{this.renderCalculatorButton("-")}</div>
        </div>
        <div className="calculator-button-row">
          <div>{this.renderCalculatorButton("C")}</div>
          <div>{this.renderCalculatorButton("AC")}</div>
          <div>{this.renderCalculatorButton(".")}</div>
          <div>{this.renderCalculatorButton("=")}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
