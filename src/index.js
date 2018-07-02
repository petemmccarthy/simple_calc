import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Screen from './Screen'
import './index.css'
import { add, subtract } from './utils/calculationTypes'

class CalculatorButton extends Component {
  render() {
    return (
      <button className="calculator-button"  onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super();
    const calculatorButtons = ['1', '2', '3', '4', '5', '6',
      '7', '8', '9', '0', '+', '-', 'C', 'AC', '.', '='];
    this.state = {
        calculatorButtons: calculatorButtons,
        displayNum: '0',
        prevKey: '',
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

    // destructure - but remember that adding = add and subtracting = subtract in state!!
    // const {adding, subtracting, prevKey, numOne } = this.state;

    let selectedKey = this.state.calculatorButtons[i];
    let adding = this.state.add;
    let subtracting = this.state.subtract;
    let currentNum;
    let prevKey = (this.state.prevKey);
    let numOne = this.state.numOne;
    let numTwo;
    let sumNums;

    if(selectedKey === '+') {
      if (subtracting) {
        numOne = parseFloat(this.state.numOne);
        numTwo = parseFloat(this.state.displayNum);
        sumNums = subtract(numOne, numTwo)
        this.setState({
          displayNum: sumNums
        });
        numOne = sumNums;
      } else if (adding) {
        numOne = parseFloat(this.state.numOne);
        numTwo = parseFloat(this.state.displayNum);
        sumNums = add(numOne, numTwo)
        this.setState({
          displayNum: sumNums
        });
        numOne = sumNums;
      } else {
        numOne = parseFloat(this.state.displayNum);
      }
      this.setState({
        prevKey: selectedKey,
        add: true,
        subtract: false,
        numOne: numOne
      });
      return;
    }

    if(selectedKey === '-') {
      if (adding) {
        numOne = parseFloat(this.state.numOne);
        numTwo = parseFloat(this.state.displayNum);
        sumNums = add(numOne, numTwo);
        this.setState({
          displayNum: sumNums
        });
        numOne = sumNums;
      } else if (subtracting) {
        numOne = parseFloat(this.state.numOne);
        numTwo = parseFloat(this.state.displayNum);
        sumNums = subtract(numOne, numTwo)
        this.setState({
          displayNum: sumNums
        });
        numOne = sumNums;
      } else {
        numOne = parseFloat(this.state.displayNum);
      }
      this.setState({
        prevKey: selectedKey,
        add: false,
        subtract: true,
        numOne: numOne
      });
      return;
    }

    if(selectedKey === 'C') {
      this.setState({
        prevKey: selectedKey,
        displayNum: '0'
      });
      return;
    }

    if(selectedKey === 'AC') {
      this.setState({
        prevKey: selectedKey,
        displayNum: '0',
        add: false,
        subtract: false,
        numOne: 0
      });
    } else if (selectedKey === '=') {
      numOne = parseFloat(this.state.numOne);
      numTwo = parseFloat(this.state.displayNum);
      if (adding) {
        sumNums = add(numOne, numTwo)
        this.setState({
          prevKey: selectedKey,
          displayNum: sumNums,
          add: false,
          numOne: sumNums
        });
        return;
      }
      if (subtracting) {
        sumNums = subtract(numOne, numTwo)
        this.setState({
          prevKey: selectedKey,
          displayNum: sumNums,
          subtract: false,
          numOne: sumNums
        });
        return;
      }
      this.setState({
        prevKey: selectedKey,
        displayNum: this.state.displayNum
      });
    } else {

      currentNum = (this.state.displayNum).toString();

      if(prevKey === '+' || prevKey === '-') {
        currentNum = '';
      }
      if (currentNum.charAt(0) === '0') {
        currentNum = currentNum.slice(1);
      }
      if (currentNum.charAt(0) === '.') {
        currentNum = '0' + currentNum;
      }
      if (adding || subtracting) {
        if(prevKey !== '+' || prevKey !== '-') {
          this.setState({
            prevKey: selectedKey,
            displayNum: currentNum + selectedKey
          });
        } else {
          this.setState({
            prevKey: selectedKey,
            displayNum: prevKey + selectedKey
          });
        }
        return;
      }
      this.setState({
        prevKey: selectedKey,
        displayNum: currentNum + selectedKey
      });
    }
  }

  render() {
    return (
      <div className="calculator-container">
        <Screen
          displayNum={this.state.displayNum}
        />
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
