import React from 'react'

import { ReactComponent as PlayButton } from '../../assets/play-button.svg'
import styles from './EpisodeItem.module.scss'

const EpisodeItem = ({ thumbnail, audio_length_sec, title }) => (
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

            <PlayButton className={styles.Play} />
        </div>
    </div>
)

export default EpisodeItem
