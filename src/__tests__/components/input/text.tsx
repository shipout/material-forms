import React from 'react'
import { shallow, mount } from 'enzyme'
import { TextInput } from '../../../components/input/text'
import * as enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
enzyme.configure({ adapter: new Adapter() })

describe('TextInput', () => {
  it('should render valid', () => {
    const component = shallow(<TextInput label='label' />)
    expect(component).toMatchSnapshot()
  })

  it('should render not valid', () => {
    const component = shallow(
      <TextInput
        label='label'
        valid={false}
        required={true}
        requiredMsg='requiredMsg'
      />
    )
    expect(component).toMatchSnapshot()
    const instance = component.instance()
    // @ts-ignore
    expect(instance.value()).toBe(undefined)
    // @ts-ignore
    expect(instance.validate()).toBe(false)
  })

  it('should render required msg', () => {
    const component = mount(
      <TextInput
        label='label'
        valid={false}
        required={true}
        requiredMsg='requiredMsg'
      />
    )
    let html = component.html()
    expect(html.indexOf('<label class="error">requiredMsg</label>')).toBe(-1)
    const instance = component.instance()
    // @ts-ignore
    expect(instance.validate()).toBe(false)
    html = component.html()
    expect(html.indexOf('<label class="error">requiredMsg</label>')).toBe(477)
    expect('requiredMsg').toBe('requiredMsg')
  })

  it('should render multiline', () => {
    const component = shallow(
      <TextInput multiline={true} rowsMax='4' label='label' />
    )
    expect(component).toMatchSnapshot()
  })
})
