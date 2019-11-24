import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { ReactComponent as HomeIcon } from '../../assets/home.svg'
import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import styles from './Sidebar.module.scss'

const Sidebar = () => (
    <div className={styles.Sidebar}>
        <h1 className={styles.Logo}>
            <Link to='/' className={styles.LogoLink}>
                Podcast
            </Link>
        </h1>
        <nav className={styles.Nav}>
            <h4 className={styles.Title}>PODCAST</h4>
            <ul>
                <li className={styles.ListItem}>
                    <NavLink
                        exact
                        to='/'
                        className={styles.Link}
                        activeClassName={styles.ActiveLink}
                    >
                        <HomeIcon className={styles.LinkIcon} />
                        Home
                    </NavLink>
                </li>
                <li className={styles.ListItem}>
                    <NavLink
                        to='/discover'
                        className={styles.Link}
                        activeClassName={styles.ActiveLink}
                    >
                        <SearchIcon className={styles.LinkIcon} />
                        Discover
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
)

export default Sidebar
