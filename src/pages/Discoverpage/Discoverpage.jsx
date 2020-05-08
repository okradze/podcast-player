import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Helmet } from 'react-helmet'

import {
    fetchPodcastLists,
    nextPage,
} from '../../redux/discover/discoverActions'
import {
    selectCurrentPage,
    selectHasNextPage,
    selectIsFetching,
    selectLists,
} from '../../redux/discover/discoverSelectors'
import Button from '../../components/Button/Button'
import PodcastList from '../../components/PodcastList/PodcastList'
import Spinner from '../../components/Spinner/Spinner'

const Discoverpage = ({
    fetchPodcastLists,
    isFetching,
    hasNextPage,
    lists,
    nextPage,
}) => {
    useEffect(() => {
        fetchPodcastLists()
    }, [fetchPodcastLists])

    const loadMoreLists = () => {
        nextPage()
    }

    return (
        <div>
            <Helmet>
                <title>Discover Podcasts | Podcast Player</title>
            </Helmet>
            {lists &&
                lists.map(({ id, title, podcasts }) => (
                    <PodcastList key={id} title={title} podcasts={podcasts} />
                ))}
            {isFetching && <Spinner />}
            {hasNextPage && !isFetching && (
                <Button onClick={() => loadMoreLists()}>Load More</Button>
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    page: selectCurrentPage,
    hasNextPage: selectHasNextPage,
    isFetching: selectIsFetching,
    lists: selectLists,
})

const mapDispatchToProps = dispatch => ({
    fetchPodcastLists: () => dispatch(fetchPodcastLists()),
    nextPage: () => dispatch(nextPage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Discoverpage)
