import { createSelector } from 'reselect'

export const podcasts = state => state.podcasts

export const selectPodcasts = createSelector(
    [podcasts],
    podcasts => podcasts.podcasts,
)

export const selectIsFetching = createSelector(
    [podcasts],
    podcasts => podcasts.isFetching,
)

export const selectHasNextPage = createSelector(
    [podcasts],
    podcasts => podcasts.has_next,
)

export const selectCurrentPage = createSelector(
    [podcasts],
    podcasts => podcasts.page,
)
