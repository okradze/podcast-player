import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import { SearchBarItem } from './SearchBarItem'
import searchResults from '../../fixtures/search'

const mockPodcast = searchResults.podcasts[0]

afterEach(cleanup)

describe('SearchBarItem', () => {
    test('should render', () => {
        const { getByText } = render(
            <MemoryRouter>
                <SearchBarItem {...mockPodcast} />
            </MemoryRouter>,
        )

        const { title_original, publisher_original } = mockPodcast
        getByText(title_original)
        getByText(publisher_original)
    })
})
