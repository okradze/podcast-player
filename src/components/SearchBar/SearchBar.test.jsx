import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { listenNotesApi } from '../../axios'
import { SearchBar } from './SearchBar'
import mockSearch from '../../fixtures/search'

afterEach(cleanup)

describe('SearchBar', () => {
    test('input changes and renders spinner', async () => {
        listenNotesApi.get = jest.fn(() =>
            Promise.resolve({ data: mockSearch }),
        )
        const { getByPlaceholderText, getByTestId, queryByTestId } = render(
            <MemoryRouter>
                <SearchBar />
            </MemoryRouter>,
        )
        const input = getByPlaceholderText(/search/i)

        fireEvent.change(input, {
            target: { value: 'ab' },
        })

        await waitFor(() => {
            getByTestId('spinner')
        })

        expect(input.value).toEqual('ab')
        expect(queryByTestId('spinner')).not.toBeInTheDocument()
        await waitFor(() => expect(listenNotesApi.get).toHaveBeenCalledTimes(1))
    })
})
