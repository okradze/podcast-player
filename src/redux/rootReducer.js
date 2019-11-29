import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import podcastsReducer from './podcasts/podcastsReducer'
import discoverReducer from './discover/discoverReducer'
import podcastReducer from './podcast/podcastReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['podcast'],
}

const rootReducer = combineReducers({
    podcasts: podcastsReducer,
    podcast: podcastReducer,
    discover: discoverReducer,
})

export default persistReducer(persistConfig, rootReducer)
