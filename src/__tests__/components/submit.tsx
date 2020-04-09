import React from 'react'
import ButtonSubmit from '../../components/submit'
import { shallow } from 'enzyme'
import * as enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({ adapter: new Adapter() })
describe('ButtonSubmit', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ButtonSubmit>TEST</ButtonSubmit>)
    expect(component).toMatchSnapshot()
  })
  /*
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <ButtonSubmit
        handleClick={() => {
          console.log('asdsad')
        }}
      >
        TEST
      </ButtonSubmit>
    )
    expect(component).toMatchSnapshot()

    component.find('input').simulate('click')
    //mockedButton.find('.Button__btn').simulate('click');
    //mockedButton.find('button.Button__btn').simulate('click');
  })
  */
})
