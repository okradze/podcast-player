import podcastsReducer from './podcasts/podcastsSlice'
import discoverPodcastsReducer from './discoverPodcasts/discoverPodcastsSlice'
import podcastReducer from './podcast/podcastSlice'
import playingPodcastReducer from './playingPodcast/playingPodcastSlice'

const rootReducer = {
  podcasts: podcastsReducer,
  discoverPodcasts: discoverPodcastsReducer,
  podcast: podcastReducer,
  playingPodcast: playingPodcastReducer
}

export default rootReducer