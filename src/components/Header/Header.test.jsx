import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './Header'

it('should render Header component', () => {
    const { asFragment } = render(<Header />)
    expect(asFragment()).toMatchSnapshot()
})
