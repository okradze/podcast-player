import PlayingTypes from './playingTypes'

const initialState = {
    podcastId: '',
    playingEpisode: null,
    isPlaying: false,
    volume: 1.0,
    currentTime: 0,
}

const playingReducer = (state = initialState, action) => {
    switch (action.type) {
        case PlayingTypes.PLAY_EPISODE:
            return {
                ...state,
                currentTime: 0,
                podcastId: action.payload.podcastId,
                playingEpisode: action.payload.episode,
            }
        case PlayingTypes.PLAY:
            return { ...state, isPlaying: true }
        case PlayingTypes.PAUSE:
            return { ...state, isPlaying: false }
        case PlayingTypes.CURRENT_TIME:
            return { ...state, currentTime: action.payload }
        case PlayingTypes.SET_VOLUME:
            return {
                ...state,
                volume: action.payload,
            }
        default:
            return state
    }
}

export default playingReducer
