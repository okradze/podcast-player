import { createSlice } from '@reduxjs/toolkit'
import { listenNotesApi } from '../../axios'

export const initialState = {
  podcast: null,
  recommendations: null,
  isPodcastFetching: false,
  areRecommendationsFetching: false,
  areEpisodesFetching: false,
  error: null,
}

export const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    setLoading(state) {
      state.isPodcastFetching = true
    },
    setPodcast(state, action) {
      state.isPodcastFetching = false
      state.podcast = action.payload
      state.error = null
    },
    setError(state, action) {
      state.error = action.payload
    },
    setRecommendationsLoading(state) {
      state.areRecommendationsFetching = true
    },
    setRecommendations(state, action) {
      state.areRecommendationsFetching = false
      state.recommendations = action.payload
      state.error = null
    },
    setEpisodesLoading(state) {
      state.areEpisodesFetching = true
    },
    setEpisodes(state, action) {
      const episodes = state.podcast.episodes
      state.areEpisodesFetching = false
      state.podcast = action.payload
      state.podcast.episodes = [...episodes, ...action.payload.episodes]
      state.error = null
    },
  },
})

export const {
  setLoading,
  setPodcast,
  setError,
  setRecommendationsLoading,
  setRecommendations,
  setEpisodesLoading,
  setEpisodes,
} = podcastSlice.actions

export const fetchPodcast = async (dispatch, podcastId) => {
  try {
    dispatch(setLoading())

    const { data } = await listenNotesApi.get(`/podcasts/${podcastId}`)

    dispatch(setPodcast(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const fetchRecommendations = async (dispatch, podcastId) => {
  try {
    dispatch(setRecommendationsLoading())

    const { data } = await listenNotesApi.get(`/podcasts/${podcastId}/recommendations`)
    dispatch(setRecommendations(data.recommendations))
  } catch (error) {
    dispatch(setError(error))
  }
}

export const fetchEpisodes = async (dispatch, podcastId, next_episode_pub_date) => {
  try {
    dispatch(setEpisodesLoading())

    const { data } = await listenNotesApi.get(
      `/podcasts/${podcastId}?next_episode_pub_date=${next_episode_pub_date}`,
    )
    dispatch(setEpisodes(data))
  } catch (error) {
    dispatch(setError(error))
  }
}

export default podcastSlice.reducer
