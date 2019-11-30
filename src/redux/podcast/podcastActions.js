import {
    PLAY_EPISODE,
    PLAY,
    PAUSE,
    SET_VOLUME,
    CURRENT_TIME,
} from './podcastTypes'

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

export const setCurrentTime = time => ({
    type: CURRENT_TIME,
    payload: time,
})

export const pause = () => ({
    type: PAUSE,
})

export const play = () => ({
    type: PLAY,
})
