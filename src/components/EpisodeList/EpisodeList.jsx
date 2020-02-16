import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {
    selectAreEpisodesFetching,
    selectEpisodes,
    selectAreMoreEpisodes,
} from '../../redux/podcast/podcastSelectors'
import { fetchMoreEpisodes } from '../../redux/podcast/podcastActions'
import EpisodeItem from '../EpisodeItem/EpisodeItem'
import Button from '../Button/Button'
import Spinner from '../Spinner/Spinner'
import styles from './EpisodeList.module.scss'

const EpisodeList = ({
    episodes,
    areEpisodesFetching,
    fetchMoreEpisodes,
    areMoreEpisodes,
}) => (
        <div>
            {episodes && (
                <div className={styles.List}>
                    {episodes.map(episode => (
                        <EpisodeItem key={episode.id} episode={episode} />
                    ))}
                </div>
            )}

            {areEpisodesFetching &&
                <Spinner />}
            {!areEpisodesFetching && areMoreEpisodes &&
                <Button onClick={() => fetchMoreEpisodes()}>Load More</Button>}
        </div>
    )

const mapStateToProps = createStructuredSelector({
    episodes: selectEpisodes,
    areEpisodesFetching: selectAreEpisodesFetching,
    areMoreEpisodes: selectAreMoreEpisodes,
})

const mapDispatchToProps = dispatch => ({
    fetchMoreEpisodes: () => dispatch(fetchMoreEpisodes()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList)
