import React from 'react'
import { render } from '@testing-library/react'
import { Spinner } from './Spinner'

test('should render Spinner component', () => {
    const { getByTestId } = render(<Spinner />)
    expect(getByTestId('spinner')).toMatchSnapshot()
})
