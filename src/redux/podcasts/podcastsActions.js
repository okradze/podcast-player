import { listenNotesApi } from '../../axios'
import { ADD_PODCASTS, NEXT_PAGE, START_FETCH_PODCASTS } from './podcastsTypes'

const addPodcasts = podcasts => ({
    type: ADD_PODCASTS,
    payload: podcasts,
})

export const nextPage = () => ({
    type: NEXT_PAGE,
})

export const startFetchPodcasts = () => ({
    type: START_FETCH_PODCASTS,
})

export const fetchPodcasts = page => {
    return async (dispatch, getState) => {
        const podcasts = getState().podcasts.podcasts.length

        if (page > 1 || !podcasts) {
            dispatch(startFetchPodcasts())

            const { data } = await listenNotesApi.get(
                `/best_podcasts?page=${page}`,
            )

            dispatch(addPodcasts(data))
        }
    }
}
