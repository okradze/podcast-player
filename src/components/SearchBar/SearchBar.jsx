import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'

import SearchBarItem from '../SearchBarItem/SearchBarItem'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState(null)

    useEffect(() => {
        if (searchTerm) {
            const search = async () => {
                const {
                    data: { podcasts },
                } = await listenNotesApi.get(
                    `/typeahead?q=${searchTerm}&show_podcasts=1`,
                )
                if (podcasts.length) setSearchResults(podcasts)
            }
            search()
        } else {
            setSearchResults(null)
        }
    }, [searchTerm])

    return (
        <div className={styles.SearchBar}>
            <input
                className={`${styles.Input} ${searchResults &&
                    styles.InputWithResults}`}
                type='search'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder='Search shows and podcasts'
            />
            {searchResults && (
                <div className={styles.Results}>
                    <ul>
                        {searchResults.map(podcast => (
                            <SearchBarItem
                                clearSearch={() => setSearchTerm('')}
                                key={podcast.id}
                                {...podcast}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SearchBar
