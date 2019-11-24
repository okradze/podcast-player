import React from 'react'
import styles from './SearchBarItem.module.scss'

const SearchBarItem = ({
    id,
    thumbnail,
    publisher_original,
    title_original,
}) => (
    <li className={styles.Item} key={id}>
        <a className={styles.Link} href=''>
            <img className={styles.Image} src={thumbnail} alt='' />
            <div>
                <h4 className={styles.Title}>{title_original}</h4>
                <p className={styles.Publisher}>{publisher_original}</p>
            </div>
        </a>
    </li>
)

export default SearchBarItem
