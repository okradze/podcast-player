import React, { useEffect, createRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchPodcasts, nextPage } from '../../store/podcasts/podcastsSlice'
import useOnScreen from '../../hooks/useOnScreen'
import PodcastList from '../../components/PodcastList/PodcastList'
import Spinner from '../../components/Spinner/Spinner'

const Homepage = () => {
    const dispatch = useDispatch()
    const { page, lastFetchedPage, isFetching, podcasts, hasNextPage } = useSelector((state) => state.podcasts)
    const infiniteScrollRef = createRef()
    const isLoadMoreButtonOnScreen = useOnScreen(infiniteScrollRef)

    useEffect(() => {
        if (!isFetching) {
            fetchPodcasts(dispatch, page, lastFetchedPage)
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
                <title>Home | Podcast Player</title>
            </Helmet>
            {podcasts.length > 0 && <PodcastList podcasts={podcasts} />}
            {isFetching && <Spinner />}
            {!isFetching && hasNextPage && (
                <div style={{ minHeight: '1px' }} ref={infiniteScrollRef} />
            )}
        </div>
    )
}

export default Homepage
