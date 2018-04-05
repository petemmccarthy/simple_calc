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
    let adding = this.state.add;
    let subtracting = this.state.subtract;
    let currentNum;
    let numOne = this.state.numOne;
    let numTwo;
    let sumNums;

    if(selectedKey === '+') {
        numOne = parseFloat(this.state.displayNum);
        this.setState({ add: true,
          numOne: numOne,
          displayNum: this.state.displayNum
      });
      return;
    }

    if(selectedKey === '-') {
        numOne = parseFloat(this.state.displayNum);
        this.setState({ subtract: true,
          numOne: numOne,
          displayNum: this.state.displayNum
        });
        return;
    }

    if(selectedKey === 'C' || selectedKey === 'AC') {
        this.setState({ displayNum: '0',
        add: false,
        subtract: false,
        numOne: 0
        });
    } else if (selectedKey === '=') {
      numOne = parseFloat(this.state.numOne);
      numTwo = parseFloat(this.state.displayNum);

      if (adding) {
          sumNums = add(numOne, numTwo)
          this.setState({ displayNum: sumNums,
            add: false,
            numOne: 0
          });
        return;
      }
      if (subtracting) {
          sumNums = subtract(numOne, numTwo)
          this.setState({ displayNum: sumNums,
            add: false,
            numOne: 0
          });
        return;
      }
        this.setState({ displayNum: this.state.displayNum });
    } else {
      currentNum = this.state.displayNum;
      console.log("currentNum = " + currentNum + ", numOne = " + numOne);
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
