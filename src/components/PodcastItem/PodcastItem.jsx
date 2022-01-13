import React from 'react'
import { Link } from 'react-router-dom'
import EllipsisText from '../EllipsisText/EllipsisText'
import styles from './PodcastItem.module.scss'

export const PodcastItem = ({ id, thumbnail, title, publisher }) => (
  <div className={styles.Item} key={id}>
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

      <Link to={`/podcast/${id}`} className={styles.Button}>
        View More
      </Link>
    </div>
  </div>
)

export default PodcastItem
