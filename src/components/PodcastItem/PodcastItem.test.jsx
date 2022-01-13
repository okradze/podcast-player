import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import { PodcastItem } from './PodcastItem'
import podcast from '../../fixtures/podcast'

afterEach(cleanup)

describe('PodcastItem', () => {
  test('match snapshot', () => {
    const { getByText } = render(
      <MemoryRouter>
        <PodcastItem {...podcast} />
      </MemoryRouter>,
    )
    getByText(podcast.title)
    getByText(podcast.publisher)
  })
})
