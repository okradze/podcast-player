import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { EpisodeItem } from './EpisodeItem'
import episode from '../../fixtures/episode'

afterEach(cleanup)

const match = { params: { podcastId: 1 } }
const playEpisode = jest.fn()

describe('EpisodeItem', () => {
  test('renders', () => {
    const { getByText } = render(
      <EpisodeItem match={match} episode={episode} playEpisode={playEpisode} />,
    )

    expect(getByText(episode.title)).toBeInTheDocument()
  })
  test('calls playEpisode function', () => {
    const { getByRole } = render(
      <EpisodeItem match={match} episode={episode} playEpisode={playEpisode} />,
    )
    const playButton = getByRole('button')
    fireEvent.click(playButton)
    expect(playEpisode).toHaveBeenCalledTimes(1)
  })
})
