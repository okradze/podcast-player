import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import podcastsReducer from './podcasts/podcastsReducer'
import discoverReducer from './discover/discoverReducer'
import playingReducer from './playing/playingReducer'
import podcastReducer from './podcast/podcastReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['playing'],
}

const rootReducer = combineReducers({
    podcasts: podcastsReducer,
    playing: playingReducer,
    discover: discoverReducer,
    podcast: podcastReducer,
})

export default persistReducer(persistConfig, rootReducer)
