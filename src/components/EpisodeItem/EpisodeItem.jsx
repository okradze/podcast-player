import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { playEpisode } from '../../redux/playing/playingActions'
import { ReactComponent as PlayButton } from '../../assets/play-button.svg'
import styles from './EpisodeItem.module.scss'

const EpisodeItem = ({ match, playEpisode, episode }) => {
    const { thumbnail, audio_length_sec, title } = episode

    return (
        <div className={styles.Episode}>
            <div className={styles.ImageWrapper}>
                <img className={styles.Image} src={thumbnail} alt='' />
            </div>
            <div className={styles.Content}>
                <div>
                    <h4 className={styles.Title}>{title}</h4>
                    <span className={styles.Duration}>
                        {new Date(audio_length_sec * 1000)
                            .toISOString()
                            .substr(11, 8)}
                    </span>
                </div>

                <PlayButton
                    role='button'
                    tabIndex='0'
                    className={styles.Play}
                    onClick={() => playEpisode(match.params.podcastId, episode)}
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    playEpisode: (podcastId, episode) =>
        dispatch(playEpisode(podcastId, episode)),
})

export default compose(
    withRouter,
    connect(null, mapDispatchToProps),
)(EpisodeItem)
