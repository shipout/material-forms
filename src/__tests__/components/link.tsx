import React from 'react'
import { shallow } from 'enzyme'
import { ButtonLink } from '../../components/button/link'
import * as enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
enzyme.configure({ adapter: new Adapter() })

describe('ButtonLink', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ButtonLink url='url'>text</ButtonLink>)
    expect(component).toMatchSnapshot()
  })
})
