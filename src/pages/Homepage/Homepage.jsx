import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Helmet } from 'react-helmet'

import { fetchPodcasts, nextPage } from '../../redux/podcasts/podcastsActions'
import {
    selectPodcasts,
    selectIsFetching,
    selectHasNextPage,
} from '../../redux/podcasts/podcastsSelectors'
import Button from '../../components/Button/Button'
import PodcastList from '../../components/PodcastList/PodcastList'
import Spinner from '../../components/Spinner/Spinner'

const Homepage = ({
    fetchPodcasts,
    nextPage,
    hasNextPage,
    isFetching,
    podcasts,
}) => {
    useEffect(() => {
        fetchPodcasts()
    }, [fetchPodcasts])

    const loadMorePodcasts = () => {
        nextPage()
    }

    return (
        <div>
            <Helmet>
                <title>Home | Podcast Player</title>
            </Helmet>
            {podcasts && <PodcastList podcasts={podcasts} />}
            {isFetching && <Spinner />}
            {!isFetching && hasNextPage && (
                <Button onClick={loadMorePodcasts}>Load More</Button>
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    podcasts: selectPodcasts,
    hasNextPage: selectHasNextPage,
})

const mapDispatchToProps = dispatch => ({
    fetchPodcasts: () => dispatch(fetchPodcasts()),
    nextPage: () => dispatch(nextPage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
