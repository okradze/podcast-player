import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  podcastId: '',
  playingEpisode: null,
  isPlaying: false,
  volume: 1.0,
  currentTime: 0,
}

export const playingPodcastSlice = createSlice({
  name: 'playingPodcast',
  initialState,
  reducers: {
    playEpisode(state, action) {
      const { podcastId, episode } = action.payload
      state.currentTime = 0
      state.podcastId = podcastId
      state.episode = episode
    },
    setCurrentTime(state, action) {
      state.currentTime = action.payload
    },
    setVolume(state, action) {
      state.volume = action.payload
    },
    play(state) {
      state.isPlaying = true
    },
    pause(state) {
      state.isPlaying = false
    },
  },
})

export const { playEpisode, setCurrentTime, setVolume, play, pause } = playingPodcastSlice.actions

export default playingPodcastSlice.reducer