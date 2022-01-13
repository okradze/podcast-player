import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { Button } from './Button'

afterEach(cleanup)

describe('Button', () => {
  const text = 'Hello'

  test('renders with text', () => {
    render(<Button>{text}</Button>)
    expect(screen.queryByText(text)).toBeInTheDocument()
  })
})
