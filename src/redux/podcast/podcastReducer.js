const initialState = {
    podcastId: '',
    playingEpisode: null,
}

const podcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return state
        default:
            return state
    }
}

export default podcastReducer
