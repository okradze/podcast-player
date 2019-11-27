import { combineReducers } from 'redux'
import podcastsReducer from './podcasts/podcastsReducer'
import discoverReducer from './discover/discoverReducer'

const rootReducer = combineReducers({
    podcasts: podcastsReducer,
    discover: discoverReducer,
})

export default rootReducer
