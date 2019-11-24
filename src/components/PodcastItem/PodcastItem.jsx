import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PodcastItem.module.scss'

const PodcastItem = ({ id, thumbnail, title, publisher }) => (
    <div className={styles.Item} key={id}>
        <img className={styles.Image} src={thumbnail} alt='' />
        <div className={styles.Content}>
            <p className={styles.Publisher}>{publisher}</p>
            <h4>{title}</h4>
            <Link to={`/podcast/${id}`} className={styles.Button}>
                View More
            </Link>
        </div>
    </div>
)

export default PodcastItem
