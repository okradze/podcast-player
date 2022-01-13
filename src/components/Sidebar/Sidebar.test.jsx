import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, cleanup } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { playEpisode } from '../../store/playingPodcast/playingPodcastSlice'
import { createTestStore } from '../../utils/createTestStore'
import episode from '../../fixtures/episode'

afterEach(cleanup)

let store = createTestStore()

beforeEach(() => {
  store = createTestStore()
})

describe('Sidebar', () => {
  it('renders sidebar', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>,
    )
    expect(screen.queryByText(/home$/i)).toBeInTheDocument()
    expect(screen.queryByText(/discover$/i)).toBeInTheDocument()
    expect(screen.queryByText(/now playing$/i)).not.toBeInTheDocument()
  })

  it('renders now playing navlink if podcast is playing', () => {
    const payload = {
      podcastId: '123',
      episode,
    }

    store.dispatch(playEpisode(payload))

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </Provider>,
    )

    expect(screen.queryByText(/now playing$/i)).toBeInTheDocument()
  })
})
