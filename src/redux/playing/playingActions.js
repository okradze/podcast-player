import PlayingTypes from './playingTypes'

export const playEpisode = (podcastId, episode) => ({
    type: PlayingTypes.PLAY_EPISODE,
    payload: {
        podcastId,
        episode,
    },
})

export const setVolume = volume => ({
    type: PlayingTypes.SET_VOLUME,
    payload: volume,
})

export const setCurrentTime = time => ({
    type: PlayingTypes.CURRENT_TIME,
    payload: time,
})

export const pause = () => ({
    type: PlayingTypes.PAUSE,
})

export const play = () => ({
    type: PlayingTypes.PLAY,
})
