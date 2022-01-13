import React, { useEffect, createRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

import {
    fetchPodcastLists,
    nextPage,
} from '../../store/discoverPodcasts/discoverPodcastsSlice'
import useOnScreen from '../../hooks/useOnScreen'
import PodcastList from '../../components/PodcastList/PodcastList'
import Spinner from '../../components/Spinner/Spinner'

const Discoverpage = () => {
    const dispatch = useDispatch()
    const { isFetching, curated_lists: lists, hasNextPage, lastFetchedPage, page } = useSelector(state => state.discoverPodcasts)
    const infiniteScrollRef = createRef()
    const isLoadMoreButtonOnScreen = useOnScreen(infiniteScrollRef)

    useEffect(() => {
        if (!isFetching) {
            fetchPodcastLists(dispatch, page, lastFetchedPage)
        }
    }, [dispatch, page, lastFetchedPage, isFetching])

    useEffect(() => {
        if (isLoadMoreButtonOnScreen) {
            dispatch(nextPage())
        }
    }, [dispatch, isLoadMoreButtonOnScreen])

    return (
        <div>
            <Helmet>
                <title>Discover Podcasts | Podcast Player</title>
            </Helmet>
            {lists.length > 0 &&
                lists.map(({ id, title, podcasts }) => (
                    <PodcastList key={id} title={title} podcasts={podcasts} />
                ))}
            {isFetching && <Spinner />}
            {!isFetching && hasNextPage && (
                <div style={{ minHeight: '1px' }} ref={infiniteScrollRef} />
            )}
        </div>
    )
}

export default Discoverpage