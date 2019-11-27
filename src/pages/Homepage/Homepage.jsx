import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetchPodcasts, nextPage } from '../../redux/podcasts/podcastsActions'
import {
    selectPodcasts,
    selectIsFetching,
    selectCurrentPage,
    selectHasNextPage,
} from '../../redux/podcasts/podcastsSelectors'
import Button from '../../components/Button/Button'
import PodcastList from '../../components/PodcastList/PodcastList'

const Homepage = ({
    fetchPodcasts,
    nextPage,
    page,
    hasNextPage,
    isFetching,
    podcasts,
}) => {
    useEffect(() => {
        fetchPodcasts(page)
    }, [fetchPodcasts, page])

    const loadMorePodcasts = () => {
        nextPage()
    }

    return (
        <div>
            {podcasts && (
                <PodcastList
                    needsLoadMoreButton
                    podcasts={podcasts}
                    loadMorePodcasts={loadMorePodcasts}
                />
            )}

            {isFetching ? (
                <div>Loading...</div>
            ) : (
                hasNextPage && (
                    <Button onClick={loadMorePodcasts}>Load More</Button>
                )
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    page: selectCurrentPage,
    podcasts: selectPodcasts,
    hasNextPage: selectHasNextPage,
})

const mapDispatchToProps = dispatch => ({
    fetchPodcasts: page => dispatch(fetchPodcasts(page)),
    nextPage: () => dispatch(nextPage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
