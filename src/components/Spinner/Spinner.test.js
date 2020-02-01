import React from 'react'
import { shallow } from 'enzyme'
import { Spinner } from './Spinner'

it('should render Spinner component', () => {
    expect(shallow(<Spinner />)).toMatchSnapshot()
})
