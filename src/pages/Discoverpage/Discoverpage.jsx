import React, { useEffect, createRef } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Helmet } from 'react-helmet'

import {
    fetchPodcastLists,
    nextPage,
} from '../../redux/discover/discoverActions'
import {
    selectHasNextPage,
    selectIsFetching,
    selectLists,
} from '../../redux/discover/discoverSelectors'
import useOnScreen from '../../hooks/useOnScreen'
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
    const infiniteScrollRef = createRef()
    const isLoadMoreButtonOnScreen = useOnScreen(infiniteScrollRef)

    useEffect(() => {
        fetchPodcastLists()
    }, [fetchPodcastLists])

    useEffect(() => {
        if (isLoadMoreButtonOnScreen) {
            nextPage()
        }
    }, [isLoadMoreButtonOnScreen, nextPage])

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
            {!isFetching && hasNextPage && (
                <>
                    <div style={{ minHeight: '1px' }} ref={infiniteScrollRef} />
                    <Button onClick={() => nextPage()}>Load More</Button>
                </>
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsFetching,
    lists: selectLists,
    hasNextPage: selectHasNextPage,
})

const mapDispatchToProps = dispatch => ({
    fetchPodcastLists: () => dispatch(fetchPodcastLists()),
    nextPage: () => dispatch(nextPage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Discoverpage)
