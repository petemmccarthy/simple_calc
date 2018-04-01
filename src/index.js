import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
        adding: false,
        subtracting: false
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
    let currentNum = this.state.displayNum;

    if(selectedKey === '+') {
      this.setState({ adding: true });
      this.setState({ displayNum: this.state.displayNum });
      return;
    }

    if(selectedKey === '-') {
        this.setState({ subtracting: true });
        this.setState({ displayNum: this.state.displayNum });
        return;
    }

    if (this.state.adding) {
      currentNum = parseFloat(currentNum)
      let nextNum = parseFloat(selectedKey)
      let sumNums = add(currentNum, nextNum)
      this.setState({ displayNum: sumNums,
        adding: false
      });
      return;
    }

    if (this.state.subtracting) {
      currentNum = parseFloat(currentNum);
      let nextNum = parseFloat(selectedKey)
      let sumNums = subtract(currentNum, nextNum)
      this.setState({ displayNum: sumNums,
        subtracting: false
      });
      return;
    }

    if(selectedKey === 'C' || selectedKey === 'AC') {
        this.setState({ displayNum: '0' });
    } else if (selectedKey === '=') {
        this.setState({ displayNum: this.state.displayNum });
        return;
    } else {
      if (currentNum.charAt(0) === '0') {
        currentNum = currentNum.slice(1);
      }
        // if (isNaN(newNum)) {
        //   this.setState({ displayNum: this.state.displayNum });
        //   return;
        // }
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

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};
