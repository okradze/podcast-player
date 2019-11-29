import { PLAY_EPISODE, TOGGLE_PLAY, SET_VOLUME } from './podcastTypes'

export const playEpisode = (podcastId, episode) => ({
    type: PLAY_EPISODE,
    payload: {
        podcastId,
        episode,
    },
})

export const setVolume = volume => ({
    type: SET_VOLUME,
    payload: volume,
})

export const togglePlay = () => ({
    type: TOGGLE_PLAY,
})
