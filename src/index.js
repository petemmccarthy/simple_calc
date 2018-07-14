import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Screen from './Screen'
import CalculatorButton from './CalculatorButton'
import './index.css'
import { add, subtract, calculatorButtons } from './utils/calculationTypes'

class Calculator extends Component {

    state = {
        displayNum: '0',
    }

  handleClick(i) {

    let { displayNum, adding, subtracting, prevKey, numOne } = this.state;
    let selectedKey = i;
    let currentNum, numTwo, sumNums;

    if(selectedKey === '+') {
      if (subtracting) {
        numOne = parseFloat(numOne);
        numTwo = parseFloat(displayNum);
        sumNums = subtract(numOne, numTwo)
        this.setState({
          displayNum: sumNums
        });
        numOne = sumNums;
      } else if (adding) {
        numOne = parseFloat(numOne);
        numTwo = parseFloat(displayNum);
        sumNums = add(numOne, numTwo)
        this.setState({
          displayNum: sumNums
        });
        numOne = sumNums;
      } else {
        numOne = parseFloat(displayNum);
      }
      this.setState({
        prevKey: selectedKey,
        adding: true,
        subtracting: false,
        numOne: numOne
      });
      return;
    }

    if(selectedKey === '-') {
      if (adding) {
        numOne = parseFloat(numOne);
        numTwo = parseFloat(displayNum);
        sumNums = add(numOne, numTwo);
        this.setState({
          displayNum: sumNums
        });
        numOne = sumNums;
      } else if (subtracting) {
        numOne = parseFloat(numOne);
        numTwo = parseFloat(displayNum);
        sumNums = subtract(numOne, numTwo)
        this.setState({
          displayNum: sumNums
        });
        numOne = sumNums;
      } else {
        numOne = parseFloat(displayNum);
      }
      this.setState({
        prevKey: selectedKey,
        adding: false,
        subtracting: true,
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
        adding: false,
        subtracting: false,
        numOne: 0
      });
    } else if (selectedKey === '=') {
      numOne = parseFloat(numOne);
      numTwo = parseFloat(displayNum);
      if (adding) {
        sumNums = add(numOne, numTwo)
        this.setState({
          prevKey: selectedKey,
          displayNum: sumNums,
          adding: false,
          numOne: sumNums
        });
        return;
      }
      if (subtracting) {
        sumNums = subtract(numOne, numTwo)
        this.setState({
          prevKey: selectedKey,
          displayNum: sumNums,
          subtracting: false,
          numOne: sumNums
        });
        return;
      }
      this.setState({
        prevKey: selectedKey,
        displayNum: displayNum
      });
    } else {

      currentNum = (displayNum).toString();

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
    const buttons = calculatorButtons.map( (button, index) => {
      return <CalculatorButton
                key={index}
                value={button}
                onClick={() => this.handleClick(button)}
            />
    })

    return (
      <div className="calculator-container">
        <Screen
          displayNum={this.state.displayNum}
        />
        <div className="calculator-button-row">
          <div>{buttons}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
