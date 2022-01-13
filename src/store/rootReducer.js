import podcastsReducer from '../store/podcasts/podcastsSlice'
import playingPodcastReducer from './playingPodcast/playingPodcastSlice'

const rootReducer = {
  podcasts: podcastsReducer,
  playingPodcast: playingPodcastReducer
}

export default rootReducer