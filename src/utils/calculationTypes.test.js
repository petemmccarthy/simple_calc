import React from 'react'
import { add, subtract, calculatorButtons } from './CalculationTypes'
import Enzyme from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

describe('CalculationTypes component', () => {
  describe('add utility function', () => {
    it('should add two numbers', () => {
      expect(add(4, 5)).toEqual(9)
      expect(add(3.44, 45.6)).toEqual(49.04)
    })
  })

  describe('subtract utility function', () => {
    it('should subract two numbers', () => {
      expect(subtract(12, 8)).toEqual(4)
      expect(subtract(17.84, 26.77)).toEqual(-8.93)
    })
  })

  describe('calculatorButtons array', () => {
    it('should look like', () => {
      expect(calculatorButtons).toEqual(['1', '2', '3', '4', '5', '6',
        '7', '8', '9', '0', '+', '-', 'C', 'AC', '.', '='])
    })
  })
})
