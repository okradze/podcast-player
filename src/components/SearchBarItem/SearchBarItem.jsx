import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SearchBarItem.module.scss'

const SearchBarItem = ({
    id,
    thumbnail,
    publisher_original,
    title_original,
    clearSearch,
}) => (
    <li className={styles.Item} key={id}>
        <Link
            onClick={() => clearSearch()}
            to={`/podcast/${id}`}
            className={styles.Link}
        >
            <img className={styles.Image} src={thumbnail} alt='' />
            <div>
                <h4 className={styles.Title}>{title_original}</h4>
                <p className={styles.Publisher}>{publisher_original}</p>
            </div>
        </Link>
    </li>
)

export default SearchBarItem
