import { createSelector } from 'reselect'

export const discover = state => state.discover

export const selectLists = createSelector(
    [discover],
    discover => discover.curated_lists,
)

export const selectIsFetching = createSelector(
    [discover],
    discover => discover.isFetching,
)

export const selectHasNextPage = createSelector(
    [discover],
    discover => discover.has_next,
)

export const selectCurrentPage = createSelector(
    [discover],
    discover => discover.page,
)
