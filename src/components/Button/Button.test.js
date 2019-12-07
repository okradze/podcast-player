import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Button } from './Button'

afterEach(cleanup)

describe('Button', () => {
    it('renders with text', () => {
        const text = 'Hello'
        const { container } = render(<Button>{text}</Button>)
        expect(container.firstChild).toHaveTextContent(text)
    })
    it('can handle clicks', () => {
        const clickFn = jest.fn()
        const { container } = render(<Button onClick={clickFn}></Button>)
        fireEvent.click(container.firstChild)
        expect(clickFn).toHaveBeenCalled()
    })
})
