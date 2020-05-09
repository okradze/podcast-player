import DiscoverTypes from './discoverTypes'
import {
    fetchPodcastLists,
    fetchPodcastListsStart,
    fetchPodcastListsSuccess,
    fetchPodcastListsFailure,
    nextPage,
} from './discoverActions'

describe('fetchPodcastLists', () => {
    test('fetchPodcastLists action', () => {
        const action = fetchPodcastLists()
        expect(action.type).toEqual(DiscoverTypes.FETCH_PODCAST_LISTS)
    })

    test('fetchPodcastListsStart action', () => {
        const action = fetchPodcastListsStart()
        expect(action.type).toEqual(DiscoverTypes.FETCH_PODCAST_LISTS_START)
    })

    test('fetchPodcastListsSuccess action', () => {
        const podcasts = 'data'
        const action = fetchPodcastListsSuccess(podcasts)
        expect(action.type).toEqual(DiscoverTypes.FETCH_PODCAST_LISTS_SUCCESS)
        expect(action.payload).toEqual(podcasts)
    })

    test('fetchPodcastListsFailure action', () => {
        const error = 'error'
        const action = fetchPodcastListsFailure(error)
        expect(action.type).toEqual(DiscoverTypes.FETCH_PODCAST_LISTS_FAILURE)
        expect(action.payload).toEqual(error)
    })
})

test('nextPage action', () => {
    const action = nextPage()
    expect(action.type).toEqual(DiscoverTypes.NEXT_PAGE)
})
