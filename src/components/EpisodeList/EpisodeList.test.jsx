import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { EpisodeList } from './EpisodeList'

afterEach(cleanup)

describe('EpisodeList', () => {
    test('renders spinner when fetching', () => {
        const { getByTestId, queryByText, queryByTestId } = render(
            <EpisodeList areEpisodesFetching areMoreEpisodes />,
        )
        expect(getByTestId('spinner')).toBeInTheDocument()
        expect(queryByText(/load more/i)).not.toBeInTheDocument()
        expect(queryByTestId('episodes')).not.toBeInTheDocument()
    })
    test('renders load more button when more episodes are available and episodes are not fetching', () => {
        const { getByText } = render(<EpisodeList areMoreEpisodes />)
        expect(getByText(/load more/i)).toBeInTheDocument()
    })
})
