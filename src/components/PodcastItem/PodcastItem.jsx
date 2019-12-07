import React from 'react'
import { Link } from 'react-router-dom'
import EllipsisText from '../EllipsisText/EllipsisText'
import styles from './PodcastItem.module.scss'

const PodcastItem = ({ id, isInSlider, thumbnail, title, publisher }) => (
    <div
        className={`${styles.Item} ${isInSlider ? styles.Slider : ''}`}
        key={id}
    >
        <div className={styles.ImageWrapper}>
            <img className={styles.Image} src={thumbnail} alt='' />
        </div>
        <div className={styles.Content}>
            <EllipsisText tagName='p' className={styles.Publisher}>
                {publisher}
            </EllipsisText>
            <EllipsisText tagName='h4' className={styles.Title}>
                {title}
            </EllipsisText>
            {!isInSlider && (
                <Link to={`/podcast/${id}`} className={styles.Button}>
                    View More
                </Link>
            )}
        </div>
    </div>
)

export default PodcastItem
