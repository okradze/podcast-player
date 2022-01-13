import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

import podcastsReducer from './podcasts/podcastsSlice'
import discoverPodcastsReducer from './discoverPodcasts/discoverPodcastsSlice'
import podcastReducer from './podcast/podcastSlice'
import playingPodcastReducer from './playingPodcast/playingPodcastSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['playingPodcast'],
}

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  discoverPodcasts: discoverPodcastsReducer,
  podcast: podcastReducer,
  playingPodcast: playingPodcastReducer,
})

export default persistReducer(persistConfig, rootReducer)
