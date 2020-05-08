import { createSelector } from 'reselect'

export const podcast = state => state.podcast

export const selectPodcast = createSelector(
    [podcast],
    podcast => podcast.podcast,
)

export const selectRecommendations = createSelector(
    [podcast],
    podcast => podcast.recommendations,
)

export const selectIsPodcastFetching = createSelector(
    [podcast],
    podcast => podcast.isPodcastFetching,
)

export const selectAreRecommendationsFetching = createSelector(
    [podcast],
    podcast => podcast.areRecommendationsFetching,
)

export const selectAreEpisodesFetching = createSelector(
    [podcast],
    podcast => podcast.areEpisodesFetching,
)

export const selectEpisodes = createSelector(
    [podcast],
    podcast => podcast.podcast.episodes,
)

export const selectAreMoreEpisodes = createSelector(
    [podcast],
    podcast => !!podcast.podcast.next_episode_pub_date,
)
