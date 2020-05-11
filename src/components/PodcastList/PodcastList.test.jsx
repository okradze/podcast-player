import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import { PodcastList } from './PodcastList'
import podcasts from '../../fixtures/podcasts'

afterEach(cleanup)

describe('PodcastList', () => {
    test('renders with default title', () => {
        const { getByText } = render(
            <MemoryRouter>
                <PodcastList podcasts={podcasts} />
            </MemoryRouter>,
        )
        expect(getByText(/popular podcast/i)).toBeInTheDocument()
    })
    test('renders with title', () => {
        const title = 'Podcast List 1'

        const { getByText } = render(
            <MemoryRouter>
                <PodcastList podcasts={podcasts} title={title} />
            </MemoryRouter>,
        )
        expect(getByText(title)).toBeInTheDocument()
    })
})
