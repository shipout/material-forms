import React from 'react'
import { ButtonSubmit } from '../../components/submit'
import { shallow, mount } from 'enzyme'
import * as enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({ adapter: new Adapter() })
describe('ButtonSubmit', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ButtonSubmit>TEST</ButtonSubmit>)
    expect(component).toMatchSnapshot()
  })

  it('should have handleClick property', () => {
    let clicked = false
    const component = shallow(
      <ButtonSubmit
        handleClick={() => {
          clicked = true
        }}
      >
        TEST
      </ButtonSubmit>
    )
    // @ts-ignore
    component.instance().props.handleClick()
    expect(component).toMatchSnapshot()
    expect(clicked).toBe(true)
  })

  it('should have exec handleClick on click', () => {
    let clicked = false
    const component = mount(
      <ButtonSubmit
        handleClick={() => {
          clicked = true
        }}
      >
        TEST
      </ButtonSubmit>
    )
    // @ts-ignore
    component.find('button').simulate('click')
    expect(component).toMatchSnapshot()
    expect(clicked).toBe(true)
  })
})
