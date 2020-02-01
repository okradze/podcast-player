import { START_FETCH_PODCASTS, ADD_PODCASTS, NEXT_PAGE } from './podcastsTypes'
import {
    addPodcasts,
    nextPage,
    startFetchPodcasts,
    fetchPodcasts,
} from './podcastsActions'

it('should create startFetchPodcasts action', () => {
    expect(startFetchPodcasts().type).toEqual(START_FETCH_PODCASTS)
})

it('should create addPodcasts action', () => {
    const mockPayload = {}
    const action = addPodcasts(mockPayload)

    expect(action.type).toEqual(ADD_PODCASTS)
    expect(action.payload).toEqual(mockPayload)
})

it('should create nextPage action', () => {
    expect(nextPage().type).toEqual(NEXT_PAGE)
})
