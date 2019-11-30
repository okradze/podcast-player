import {
    PLAY_EPISODE,
    PLAY,
    PAUSE,
    SET_VOLUME,
    CURRENT_TIME,
} from './podcastTypes'

const initialState = {
    podcastId: '',
    playingEpisode: null,
    isPlaying: false,
    volume: 1.0,
    currentTime: 0,
}

const podcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY_EPISODE:
            return {
                ...state,
                currentTime: 0,
                podcastId: action.payload.podcastId,
                playingEpisode: action.payload.episode,
            }
        case PLAY:
            return { ...state, isPlaying: true }
        case PAUSE:
            return { ...state, isPlaying: false }
        case CURRENT_TIME:
            return { ...state, currentTime: action.payload }
        case SET_VOLUME:
            return {
                ...state,
                volume: action.payload,
            }
        default:
            return state
    }
}

export default podcastReducer
