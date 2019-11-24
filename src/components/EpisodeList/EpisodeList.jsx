import React from 'react'
import EpisodeItem from '../EpisodeItem/EpisodeItem'
import Button from '../Button/Button'
import styles from './EpisodeList.module.scss'

const EpisodeList = ({ episodes, loadMoreEpisodes }) => (
    <div className={styles.List}>
        {episodes.map(({ id, ...episode }) => (
            <EpisodeItem key={id} {...episode} />
        ))}
        <Button onClick={() => loadMoreEpisodes()}>Load More</Button>
    </div>
)

export default EpisodeList
