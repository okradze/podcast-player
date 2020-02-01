import {
    startFetchPodcast,
    startFetchRecommendations,
    startFetchMoreEpisodes,
    setRecommendations,
    setPodcast,
    setMoreEpisodes,
} from './podcastActions'
import podcastReducer from './podcastReducer'

const initialState = {
    podcast: null,
    recommendations: null,
    isPodcastFetching: false,
    areRecommendationsFetching: false,
    areEpisodesFetching: false,
}

describe('podcastReducer', () => {
    it('should return initial state', () => {
        expect(podcastReducer(undefined, {})).toEqual(initialState)
    })
    it('should set isPodcastFetching to true when starting fetching podcast', () => {
        expect(
            podcastReducer(initialState, startFetchPodcast()).isPodcastFetching,
        ).toBe(true)
    })

    it('should set areRecommendationsFetching to true when starting fetching recommendations', () => {
        expect(
            podcastReducer(initialState, startFetchRecommendations())
                .areRecommendationsFetching,
        ).toBe(true)
    })

    it('should set areEpisodesFetching to true when starting fetching episodes', () => {
        expect(
            podcastReducer(initialState, startFetchMoreEpisodes())
                .areEpisodesFetching,
        ).toBe(true)
    })
    it('should set podcast when fetching is done', () => {
        expect(
            podcastReducer(initialState, setPodcast({ episodes: [] })),
        ).toEqual({
            ...initialState,
            isPodcastFetching: false,
            podcast: { episodes: [] },
        })
    })
    it('should set recommendations when fetching is done', () => {
        expect(podcastReducer(initialState, setRecommendations([]))).toEqual({
            ...initialState,
            areRecommendationsFetching: false,
            recommendations: [],
        })
    })
    it('should set episodes when fetching is done', () => {
        expect(
            podcastReducer(
                { ...initialState, podcast: { episodes: [{}] } },
                setMoreEpisodes({ episodes: [{}] }),
            ),
        ).toEqual({
            ...initialState,
            areEpisodesFetching: false,
            podcast: { episodes: [{}, {}] },
        })
    })
})
