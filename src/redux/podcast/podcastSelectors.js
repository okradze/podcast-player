import { createSelector } from 'reselect'

const podcast = state => state.podcast

export const selectRecentPodcastId = createSelector(
    [podcast],
    podcast => podcast.podcastId,
)
export const selectPlayingEpisode = createSelector(
    [podcast],
    podcast => podcast.playingEpisode,
)

export const selectIsPlaying = createSelector(
    [podcast],
    podcast => podcast.isPlaying,
)

export const selectVolume = createSelector([podcast], podcast => podcast.volume)

export const selectCurrentTime = createSelector(
    [podcast],
    podcast => podcast.currentTime,
)
