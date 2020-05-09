import PodcastTypes from './podcastTypes'
import {
    fetchPodcast,
    fetchPodcastStart,
    fetchPodcastSuccess,
    fetchPodcastFailure,
    fetchRecommendations,
    fetchRecommendationsStart,
    fetchRecommendationsSuccess,
    fetchRecommendationsFailure,
    fetchMoreEpisodes,
    fetchMoreEpisodesStart,
    fetchMoreEpisodesSuccess,
    fetchMoreEpisodesFailure,
} from './podcastActions'

describe('fetchPodcast', () => {
    test('fetchPodcast action', () => {
        const podcastId = '123'
        const action = fetchPodcast(podcastId)

        expect(action.type).toEqual(PodcastTypes.FETCH_PODCAST)
        expect(action.payload).toEqual(podcastId)
    })
    test('fetchPodcastStart action', () => {
        const action = fetchPodcastStart()
        expect(action.type).toEqual(PodcastTypes.FETCH_PODCAST_START)
    })
    test('fetchPodcastSuccess action', () => {
        const podcast = 'data'
        const action = fetchPodcastSuccess(podcast)

        expect(action.type).toEqual(PodcastTypes.FETCH_PODCAST_SUCCESS)
        expect(action.payload).toEqual(podcast)
    })
    test('fetchPodcastFailure action', () => {
        const error = 'error'
        const action = fetchPodcastFailure(error)

        expect(action.type).toEqual(PodcastTypes.FETCH_PODCAST_FAILURE)
        expect(action.payload).toEqual(error)
    })
})

describe('fetchRecommendations', () => {
    test('fetchRecommendations action', () => {
        const podcastId = '123'
        const action = fetchRecommendations(podcastId)

        expect(action.type).toEqual(PodcastTypes.FETCH_RECOMMENDATIONS)
        expect(action.payload).toEqual(podcastId)
    })
    test('fetchRecommendationsStart action', () => {
        const action = fetchRecommendationsStart()
        expect(action.type).toEqual(PodcastTypes.FETCH_RECOMMENDATIONS_START)
    })
    test('fetchRecommendationsSuccess action', () => {
        const recommendations = 'data'
        const action = fetchRecommendationsSuccess(recommendations)

        expect(action.type).toEqual(PodcastTypes.FETCH_RECOMMENDATIONS_SUCCESS)
        expect(action.payload).toEqual(recommendations)
    })
    test('fetchRecommendationsFailure action', () => {
        const error = 'error'
        const action = fetchRecommendationsFailure(error)

        expect(action.type).toEqual(PodcastTypes.FETCH_RECOMMENDATIONS_FAILURE)
        expect(action.payload).toEqual(error)
    })
})

describe('fetchMoreEpisodes', () => {
    test('fetchMoreEpisodes action', () => {
        const podcastId = '123'
        const action = fetchMoreEpisodes(podcastId)

        expect(action.type).toEqual(PodcastTypes.FETCH_MORE_EPISODES)
        expect(action.payload).toEqual(podcastId)
    })
    test('fetchMoreEpisodesStart action', () => {
        const action = fetchMoreEpisodesStart()
        expect(action.type).toEqual(PodcastTypes.FETCH_MORE_EPISODES_START)
    })
    test('fetchMoreEpisodesSuccess action', () => {
        const episodes = 'data'
        const action = fetchMoreEpisodesSuccess(episodes)

        expect(action.type).toEqual(PodcastTypes.FETCH_MORE_EPISODES_SUCCESS)
        expect(action.payload).toEqual(episodes)
    })
    test('fetchMoreEpisodesFailure action', () => {
        const error = 'error'
        const action = fetchMoreEpisodesFailure(error)

        expect(action.type).toEqual(PodcastTypes.FETCH_MORE_EPISODES_FAILURE)
        expect(action.payload).toEqual(error)
    })
})
