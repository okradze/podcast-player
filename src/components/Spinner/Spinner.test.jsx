import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Spinner } from './Spinner'

afterEach(cleanup)

test('should render Spinner component', () => {
  const { getByTestId } = render(<Spinner />)
  expect(getByTestId('spinner')).toMatchSnapshot()
})
