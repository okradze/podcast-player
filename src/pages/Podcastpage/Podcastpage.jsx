import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Helmet } from 'react-helmet'

import {
    fetchPodcast,
    fetchRecommendations,
} from '../../redux/podcast/podcastActions'
import {
    selectPodcast,
    selectRecommendations,
    selectIsPodcastFetching,
    selectAreRecommendationsFetching,
} from '../../redux/podcast/podcastSelectors'

import PodcastList from '../../components/PodcastList/PodcastList'
import EpisodeList from '../../components/EpisodeList/EpisodeList'
import Spinner from '../../components/Spinner/Spinner'
import styles from './Podcastpage.module.scss'

const Podcastpage = ({
    match,
    podcast,
    recommendations,
    isPodcastFetching,
    areRecommendationsFetching,
    fetchPodcast,
    fetchRecommendations,
}) => {
    const { podcastId } = match.params

    useEffect(() => {
        fetchPodcast(podcastId)
    }, [fetchPodcast, podcastId])

    useEffect(() => {
        fetchRecommendations(podcastId)
    }, [fetchRecommendations, podcastId])

    const { thumbnail, publisher, description, title } = podcast || {}

    return (
        <div>
            <Helmet>
                <title>
                    {podcast
                        ? `${podcast.title} | Podcast Player`
                        : 'Loading... | Podcast Player'}
                </title>
            </Helmet>
            {isPodcastFetching && <Spinner />}
            {!isPodcastFetching && podcast && (
                <div>
                    <h2 className={styles.Title}>{title}</h2>
                    <div className={styles.Content}>
                        <div className={styles.ThumbnailWrapper}>
                            <img
                                className={styles.Thumbnail}
                                src={thumbnail}
                                alt=''
                            />
                        </div>
                        <div>
                            <h3 className={styles.Publisher}>{publisher}</h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                                className={styles.Text}
                            />
                        </div>
                    </div>

                    <div className={styles.EpisodeList}>
                        <EpisodeList />
                    </div>

                    {areRecommendationsFetching && <Spinner />}
                    {recommendations && (
                        <PodcastList
                            podcasts={recommendations}
                            title='Recommendations'
                        />
                    )}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    podcast: selectPodcast,
    recommendations: selectRecommendations,
    isPodcastFetching: selectIsPodcastFetching,
    areRecommendationsFetching: selectAreRecommendationsFetching,
})

const mapDispatchToProps = dispatch => ({
    fetchPodcast: podcastId => dispatch(fetchPodcast(podcastId)),
    fetchRecommendations: podcastId =>
        dispatch(fetchRecommendations(podcastId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Podcastpage)
