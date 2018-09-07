import React from 'react'
import Screen from './Screen'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Screen component', () => {
  it('should render', () => {
    const screen = shallow(<Screen />)
    expect(screen.find('.screen').length).toEqual(1)
  })

  it('should show the dispayNum prop which is 0 initially', () => {
    const screen = shallow(<Screen displayNum={0}/>)
    const displayNum = screen.find('.screen')
    expect(screen.text().trim()).toEqual('0')
  })
})
