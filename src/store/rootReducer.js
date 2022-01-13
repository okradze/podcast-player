import podcastsReducer from './podcasts/podcastsSlice'
import discoverPodcastsReducer from './discoverPodcasts/discoverPodcastsSlice'
import playingPodcastReducer from './playingPodcast/playingPodcastSlice'

const rootReducer = {
  podcasts: podcastsReducer,
  discoverPodcasts: discoverPodcastsReducer,
  playingPodcast: playingPodcastReducer
}

export default rootReducer