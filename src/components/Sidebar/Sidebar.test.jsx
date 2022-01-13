import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import { Sidebar } from './Sidebar'

afterEach(cleanup)

describe('Sidebar', () => {
  test('render component', () => {
    const { getByText, getAllByText } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    )
    getAllByText(/home$/i) // get navlink and not home.svg
    getByText(/discover/i)
    getByText(/now playing/i)
  })
})
