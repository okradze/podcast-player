import React from 'react'

import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.scss'

const Header = () => (
    <header className={`container ${styles.Header}`}>
        <h1 className={styles.Logo}>Podcast</h1>
        <SearchBar />
    </header>
)

export default Header
