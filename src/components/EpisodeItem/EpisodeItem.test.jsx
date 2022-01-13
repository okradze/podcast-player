import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import { EpisodeItem } from './EpisodeItem'
import episode from '../../fixtures/episode'
import { createTestStore } from '../../utils/createTestStore'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

let store = createTestStore()

beforeEach(() => {
  store = createTestStore()
})

describe('EpisodeItem', () => {
  it('renders episode', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EpisodeItem episode={episode} />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.queryByText(episode.title)).toBeInTheDocument()
  })
})
