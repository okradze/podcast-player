import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import { EllipsisText } from './EllipsisText'

afterEach(cleanup)

it('should render EllipsisText component', () => {
  const text = 'Hello'
  render(<EllipsisText>{text}</EllipsisText>)
  expect(screen.queryByText(text)).toBeInTheDocument()
})
