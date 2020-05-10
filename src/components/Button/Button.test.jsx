import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
    const text = 'Hello'

    test('renders default version', () => {
        const { getByText } = render(<Button>{text}</Button>)
        expect(getByText(text)).toMatchSnapshot()
    })
    test('renders inverted version', () => {
        const { getByText } = render(<Button inverted>{text}</Button>)
        expect(getByText(text)).toMatchSnapshot()
    })
})
