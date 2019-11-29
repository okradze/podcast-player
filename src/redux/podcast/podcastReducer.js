import { PLAY_EPISODE, TOGGLE_PLAY, SET_VOLUME } from './podcastTypes'

const initialState = {
    podcastId: '',
    playingEpisode: null,
    isPlaying: false,
    volume: 1.0,
}

const podcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY_EPISODE:
            return {
                podcastId: action.payload.podcastId,
                playingEpisode: action.payload.episode,
                isPlaying: true,
            }
        case TOGGLE_PLAY:
            return {
                ...state,
                isPlaying: !state.isPlaying,
            }
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
