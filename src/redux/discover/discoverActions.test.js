import { START_FETCH_LISTS, ADD_LISTS, NEXT_PAGE } from './discoverTypes'
import {
    startFetchLists,
    addLists,
    nextPage,
    fetchPodcastLists,
} from './discoverActions'

it('should create startFetchLists action', () => {
    expect(startFetchLists().type).toEqual(START_FETCH_LISTS)
})

it('should create addLists action', () => {
    const mockPayload = {}
    const action = addLists(mockPayload)

    expect(action.type).toEqual(ADD_LISTS)
    expect(action.payload).toEqual(mockPayload)
})

it('should create nextPage action', () => {
    expect(nextPage().type).toEqual(NEXT_PAGE)
})
