import React from 'react'
import { shallow } from 'enzyme'
import { EllipsisText } from './EllipsisText'

it('should render EllipsisText component', () => {
    expect(shallow(<EllipsisText>Hello</EllipsisText>)).toMatchSnapshot()
})
