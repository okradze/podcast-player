import {
    START_FETCH_PODCAST,
    START_FETCH_MORE_EPISODES,
    START_FETCH_RECOMMENDATIONS,
    SET_RECOMMENDATIONS,
    SET_PODCAST,
    SET_MORE_EPISODES,
} from './podcastTypes'
import {
    startFetchPodcast,
    startFetchMoreEpisodes,
    startFetchRecommendations,
    setPodcast,
    setMoreEpisodes,
    setRecommendations,
    fetchMoreEpisodes,
    fetchPodcast,
    fetchRecommendations,
} from './podcastActions'

it('should create startFetchPodcast action', () => {
    expect(startFetchPodcast().type).toEqual(START_FETCH_PODCAST)
})
it('should create startFetchRecommendations action', () => {
    expect(startFetchRecommendations().type).toEqual(
        START_FETCH_RECOMMENDATIONS,
    )
})
it('should create startFetchMoreEpisodes action', () => {
    expect(startFetchMoreEpisodes().type).toEqual(START_FETCH_MORE_EPISODES)
})

it('should create setPodcast action', () => {
    const action = setPodcast({})
    expect(action.type).toEqual(SET_PODCAST)
    expect(action.payload).toEqual({})
})
it('should create setRecommendations action', () => {
    const action = setRecommendations({})
    expect(action.type).toEqual(SET_RECOMMENDATIONS)
    expect(action.payload).toEqual({})
})
it('should create setMoreEpisodes action', () => {
    const action = setMoreEpisodes({})
    expect(action.type).toEqual(SET_MORE_EPISODES)
    expect(action.payload).toEqual({})
})
