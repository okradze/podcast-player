import {
    fetchPodcastStart,
    fetchPodcastSuccess,
    fetchPodcastFailure,
    fetchRecommendationsStart,
    fetchRecommendationsSuccess,
    fetchRecommendationsFailure,
    fetchMoreEpisodesStart,
    fetchMoreEpisodesSuccess,
    fetchMoreEpisodesFailure,
} from './podcastActions'
import podcastReducer, { initialState } from './podcastReducer'

describe('podcastReducer', () => {
    test('return initial state', () => {
        const state = podcastReducer(undefined, {})
        expect(state).toEqual(initialState)
    })
    test('fetchPodcastStart', () => {
        const state = podcastReducer(initialState, fetchPodcastStart())
        expect(state.isPodcastFetching).toEqual(true)
    })

    test('fetchPodcastSuccess', () => {
        const podcast = 'data'
        const state = podcastReducer(initialState, fetchPodcastSuccess(podcast))
        expect(state).toEqual({
            ...initialState,
            isPodcastFetching: false,
            podcast,
            error: null,
        })
    })
    test('fetchPodcastFailure', () => {
        const error = 'error'
        const state = podcastReducer(initialState, fetchPodcastFailure(error))
        expect(state.error).toEqual(error)
    })

    test('fetchRecommendationsStart', () => {
        const state = podcastReducer(initialState, fetchRecommendationsStart())
        expect(state.areRecommendationsFetching).toEqual(true)
    })

    test('fetchRecommendationsSuccess', () => {
        const recommendations = 'data'
        const state = podcastReducer(
            initialState,
            fetchRecommendationsSuccess(recommendations),
        )
        expect(state).toEqual({
            ...initialState,
            areRecommendationsFetching: false,
            recommendations,
            error: null,
        })
    })
    test('fetchRecommendationsFailure', () => {
        const error = 'error'
        const state = podcastReducer(
            initialState,
            fetchRecommendationsFailure(error),
        )
        expect(state.error).toEqual(error)
    })

    test('fetchMoreEpisodesStart', () => {
        const state = podcastReducer(initialState, fetchMoreEpisodesStart())
        expect(state.areEpisodesFetching).toEqual(true)
    })

    test('fetchMoreEpisodesSuccess', () => {
        const firstFetchedPodcast = {
            episodes: [1, 2, 3],
        }
        const secondFetchedPodcast = {
            episodes: [4, 5, 6],
        }
        const state = podcastReducer(
            { ...initialState, podcast: firstFetchedPodcast },
            fetchMoreEpisodesSuccess(secondFetchedPodcast),
        )
        expect(state).toEqual({
            ...initialState,
            areEpisodesFetching: false,
            podcast: {
                ...secondFetchedPodcast,
                episodes: [
                    ...firstFetchedPodcast.episodes,
                    ...secondFetchedPodcast.episodes,
                ],
            },
            error: null,
        })
    })
    test('fetchMoreEpisodesFailure', () => {
        const error = 'error'
        const state = podcastReducer(
            initialState,
            fetchMoreEpisodesFailure(error),
        )
        expect(state.error).toEqual(error)
    })
})
