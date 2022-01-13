import React from 'react'
import { Link } from 'react-router-dom'
import EllipsisText from '../EllipsisText/EllipsisText'
import styles from './SearchBarItem.module.scss'

export const SearchBarItem = ({
  id,
  thumbnail,
  publisher_original,
  title_original,
  clearSearch,
}) => (
  <li className={styles.Item}>
    <Link onClick={() => clearSearch()} to={`/podcast/${id}`} className={styles.Link}>
      <img className={styles.Image} src={thumbnail} alt='' />
      <div>
        <EllipsisText tagName='h4' className={styles.Title}>
          {title_original}
        </EllipsisText>
        <EllipsisText tagName='p' className={styles.Publisher}>
          {publisher_original}
        </EllipsisText>
      </div>
    </Link>
  </li>
)

export default SearchBarItem
