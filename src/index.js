import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;

class CalculatorButton extends React.Component {
  render() {
    return (
      <button className="calculator-button"  onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Screen extends React.Component {
  render() {
    return (
      <div className="screen">
        {this.props.value}
      </div>
    );
  };
}

class Calculator extends React.Component {
  constructor(props) {
    const calculatorButtons = ['1', '2', '3', '4', '5', '6',
      '7', '8', '9', '0', '+', '-', 'C', 'AC', '.', '='];
    super();
    this.state = {
        calculatorButtons: calculatorButtons,
        displayNum: '0',
        add: false,
        subtract: false,
        numOne: 0
    }
  }

  renderCalculatorButton(i) {
    return (
      <CalculatorButton
        value={this.state.calculatorButtons[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  };

  handleClick(i) {
    this.setState({ displayNum: '0' });

    let selectedKey = this.state.calculatorButtons[i];

    let currentNum;
    let numTwo = this.state.displayNum;

    if(selectedKey === '+') {
      this.state.numOne = parseFloat(this.state.displayNum);
      console.log("numOne=" + this.state.numOne + " numTwo=" + numTwo);
      this.setState({ add: true });
      this.setState({ displayNum: this.state.displayNum });
      return;
    }

    if(selectedKey === '-') {
        this.setState({ subtract: true });
        this.setState({ displayNum: this.state.displayNum });
        return;
    }

    if(selectedKey === 'C' || selectedKey === 'AC') {
        this.setState({ displayNum: '0' });
    } else if (selectedKey === '=') {
      if (this.state.add) {
          console.log("numOne=" + this.state.numOne + " numTwo=" + numTwo);
          let numOne = parseFloat(this.state.numOne);
          numTwo = parseFloat(this.state.displayNum);
          let sumNums = add(numOne, numTwo)
          this.setState({ displayNum: sumNums,
            add: false
          });
        return;
      }
        this.setState({ displayNum: this.state.displayNum });
        return;
    } else {
      currentNum = '0';
      if (currentNum.charAt(0) === '0') {
        currentNum = currentNum.slice(1);
      }
      this.setState({ displayNum: currentNum + selectedKey });
    }

  }

  renderScreen(i) {
    return (
      <Screen
        value={this.state.displayNum}
      />
    );
  }

  render() {
    return (
      <div className="calculator-container">
        <div>{this.renderScreen()}</div>
        <div className="calculator-button-row">
          <div>{this.renderCalculatorButton(0)}</div>
          <div>{this.renderCalculatorButton(1)}</div>
          <div>{this.renderCalculatorButton(2)}</div>
          <div>{this.renderCalculatorButton(3)}</div>
        </div>
        <div className="calculator-button-row">
          <div>{this.renderCalculatorButton(4)}</div>
          <div>{this.renderCalculatorButton(5)}</div>
          <div>{this.renderCalculatorButton(6)}</div>
          <div>{this.renderCalculatorButton(7)}</div>
        </div>
        <div className="calculator-button-row">
          <div>{this.renderCalculatorButton(8)}</div>
          <div>{this.renderCalculatorButton(9)}</div>
          <div>{this.renderCalculatorButton(10)}</div>
          <div>{this.renderCalculatorButton(11)}</div>
        </div>
        <div className="calculator-button-row">
          <div>{this.renderCalculatorButton(12)}</div>
          <div>{this.renderCalculatorButton(13)}</div>
          <div>{this.renderCalculatorButton(14)}</div>
          <div>{this.renderCalculatorButton(15)}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
