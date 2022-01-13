import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  minimized: false,
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
    toggleMinimize(state) {
      state.minimized = !state.minimized
    },
    playEpisode(state, action) {
      const { podcastId, episode } = action.payload
      state.currentTime = 0
      state.podcastId = podcastId
      state.playingEpisode = episode
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

export const { playEpisode, setCurrentTime, setVolume, play, pause, toggleMinimize } =
  playingPodcastSlice.actions

export default playingPodcastSlice.reducer
