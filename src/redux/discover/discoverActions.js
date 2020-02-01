import { listenNotesApi } from '../../axios'
import { START_FETCH_LISTS, ADD_LISTS, NEXT_PAGE } from './discoverTypes'

export const startFetchLists = () => ({
    type: START_FETCH_LISTS,
})

export const addLists = lists => ({
    type: ADD_LISTS,
    payload: lists,
})

export const nextPage = () => ({
    type: NEXT_PAGE,
})

export const fetchPodcastLists = page => {
    return async (dispatch, getState) => {
        const lastFetchedPage = getState().discover.lastFetchedPage

        if (page > lastFetchedPage) {
            dispatch(startFetchLists())

            const { data } = await listenNotesApi.get(
                `curated_podcasts?page=${page}`,
            )

            dispatch(addLists(data))
        }
    }
}
