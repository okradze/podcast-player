import React from 'react'

import SearchBar from '../SearchBar/SearchBar'
import styles from './Header.module.scss'

const Header = () => (
    <header className={styles.Header}>
        <SearchBar />
    </header>
)

export default Header
