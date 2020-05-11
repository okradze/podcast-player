import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Header } from './Header'

afterEach(cleanup)

it('should render Header component', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
})
