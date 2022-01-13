import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { PodcastItem } from './PodcastItem'
import podcast from '../../fixtures/podcast'

afterEach(cleanup)

describe('PodcastItem', () => {
  it('renders title and publisher', () => {
    render(
      <MemoryRouter>
        <PodcastItem {...podcast} />
      </MemoryRouter>,
    )
    expect(screen.queryByText(podcast.title)).toBeInTheDocument()
    expect(screen.queryByText(podcast.publisher)).toBeInTheDocument()
  })
})
