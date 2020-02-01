import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectPlayingPodcastId } from '../../redux/playing/playingSelectors'
import { ReactComponent as HomeIcon } from '../../assets/home.svg'
import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import { ReactComponent as PodcastIcon } from '../../assets/podcast.svg'
import styles from './Sidebar.module.scss'

export const Sidebar = ({ playingPodcastId }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)

    return (
        <>
            <span
                aria-label='Toggle menu'
                onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                className={styles.Toggle}
            >
                <span
                    className={`${styles.ToggleIcon} ${
                        isSidebarVisible ? styles.ToggleIconWhenVisible : ''
                    }`}
                ></span>
            </span>

            <div
                className={`${styles.Sidebar} ${
                    isSidebarVisible ? styles.SidebarMobileVisible : ''
                }`}
            >
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

                        <li className={styles.ListItem}>
                            <NavLink
                                to={`/podcast/${playingPodcastId}`}
                                className={styles.Link}
                                activeClassName={
                                    playingPodcastId ? styles.ActiveLink : ''
                                }
                            >
                                <PodcastIcon className={styles.LinkIcon} />
                                Now Playing
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    playingPodcastId: selectPlayingPodcastId,
})

export default connect(mapStateToProps)(Sidebar)
