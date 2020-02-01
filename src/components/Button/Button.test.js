import React from 'react'
import { shallow } from 'enzyme'
import { Button } from './Button'

describe('Button', () => {
    it('should render default version', () => {
        expect(shallow(<Button>Hello</Button>)).toMatchSnapshot()
    })
    it('should render inverted version', () => {
        expect(shallow(<Button inverted>Hello</Button>)).toMatchSnapshot()
    })
})
