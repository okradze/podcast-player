import { combineReducers } from 'redux'
import podcastsReducer from './podcasts/podcastsReducer'
import podcastReducer from './podcast/podcastReducer'

const rootReducer = combineReducers({
    podcast: podcastReducer,
    podcasts: podcastsReducer,
})

export default rootReducer
