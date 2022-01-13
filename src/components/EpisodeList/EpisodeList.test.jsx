import React from 'react'
import { Provider } from 'react-redux'
import { render, screen, cleanup } from '@testing-library/react'
import { EpisodeList } from './EpisodeList'
import { createTestStore } from '../../utils/createTestStore'
import { setEpisodesLoading, setPodcast } from '../../store/podcast/podcastSlice'
import podcast from '../../fixtures/podcast'
import { MemoryRouter } from 'react-router-dom'

afterEach(cleanup)

let store = createTestStore()

beforeEach(() => {
  store = createTestStore()
})

describe('EpisodeList', () => {
  it('renders spinner when fetching', () => {
    store.dispatch(setPodcast(podcast))
    store.dispatch(setEpisodesLoading())

    render(
      <Provider store={store}>
        <MemoryRouter>
          <EpisodeList />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getByTestId('spinner')).toBeInTheDocument()
    expect(screen.queryByText(/load more/i)).not.toBeInTheDocument()
  })

  it('renders load more button when more episodes are available and episodes are not fetching', () => {
    store.dispatch(setPodcast(podcast))

    render(
      <Provider store={store}>
        <MemoryRouter>
          <EpisodeList />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.getByText(/load more/i)).toBeInTheDocument()
  })
})
