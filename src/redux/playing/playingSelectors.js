import { createSelector } from 'reselect'

const playing = state => state.playing

export const selectPlayingPodcastId = createSelector(
    [playing],
    playing => playing.podcastId,
)
export const selectPlayingEpisode = createSelector(
    [playing],
    playing => playing.playingEpisode,
)

export const selectIsPlaying = createSelector(
    [playing],
    playing => playing.isPlaying,
)

export const selectVolume = createSelector([playing], playing => playing.volume)

export const selectCurrentTime = createSelector(
    [playing],
    playing => playing.currentTime,
)
