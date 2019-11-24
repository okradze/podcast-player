import React, { useState, useEffect } from 'react'
import { listenNotesApi } from '../../axios'

import SearchBarItem from '../SearchBarItem/SearchBarItem'
import styles from './SearchBar.module.scss'

const results = [
    {
        title_highlighted:
            '(<span class="ln-search-highlight">Hi</span>)story Time',
        title_original: '(Hi)story Time',
        publisher_highlighted:
            '(<span class="ln-search-highlight">Hi</span>)story Time Podcast',
        publisher_original: '(Hi)story Time Podcast',
        image:
            'https://cdn-images-1.listennotes.com/podcasts/history-time-p-CoUzBkgG5-oR-H6Tj1JeC.300x300.jpg',
        thumbnail:
            'https://cdn-images-1.listennotes.com/podcasts/history-time-p-CoUzBkgG5-oR-H6Tj1JeC.300x300.jpg',
        id: 'e5b98b36a329427e9144ea3703f0751a',
        explicit_content: false,
    },
    {
        title_highlighted:
            'Game Boy Geek - <span class="ln-search-highlight">Hi</span> Quality - <span class="ln-search-highlight">Hi</span> Energy Board Game Reviews',
        title_original:
            'Game Boy Geek - Hi Quality - Hi Energy Board Game Reviews',
        publisher_highlighted: 'Game Boy Geek',
        publisher_original: 'Game Boy Geek',
        image:
            'https://cdn-images-1.listennotes.com/podcasts/game-boy-geek-hi-quality-hi-energy-board-DFUci1qTjlz-cVQ9xS3iaNG.300x300.jpg',
        thumbnail:
            'https://cdn-images-1.listennotes.com/podcasts/game-boy-geek-hi-quality-hi-energy-board-DFUci1qTjlz-cVQ9xS3iaNG.300x300.jpg',
        id: '5aa11c7c7ec1442daa0b64745a18e962',
        explicit_content: false,
    },
    {
        title_highlighted:
            'Qu\u00e8 t\'<span class="ln-search-highlight">hi</span> jugues!',
        title_original: "Qu\u00e8 t'hi jugues!",
        publisher_highlighted: 'Cadena SER',
        publisher_original: 'Cadena SER',
        image:
            'https://cdn-images-1.listennotes.com/podcasts/qu\u00e8-thi-jugues-cadena-ser-GjpZ18OtCx0.300x300.jpg',
        thumbnail:
            'https://cdn-images-1.listennotes.com/podcasts/qu\u00e8-thi-jugues-cadena-ser-GjpZ18OtCx0.300x300.jpg',
        id: '5f5e3d17f18b4cae8d2c766b7ea9f61e',
        explicit_content: false,
    },
    {
        title_highlighted: 'Active Shooter: The Podcast',
        title_original: 'Active Shooter: The Podcast',
        publisher_highlighted:
            '<span class="ln-search-highlight">Hi</span> Five Holly Productions',
        publisher_original: 'Hi Five Holly Productions',
        image:
            'https://cdn-images-1.listennotes.com/podcasts/active-shooter-the-podcast-hi-five-holly-2twf4h0HcyY-WLfOPsgBuwH.300x300.jpg',
        thumbnail:
            'https://cdn-images-1.listennotes.com/podcasts/active-shooter-the-podcast-hi-five-holly-2twf4h0HcyY-WLfOPsgBuwH.300x300.jpg',
        id: '1b9be0905f584a878d1418afd147205e',
        explicit_content: false,
    },
    {
        title_highlighted: '<span class="ln-search-highlight">HI</span>-Pods',
        title_original: 'HI-Pods',
        publisher_highlighted:
            '<span class="ln-search-highlight">HMHI</span> Universitas Pertamina',
        publisher_original: 'HMHI Universitas Pertamina',
        image:
            'https://cdn-images-1.listennotes.com/podcasts/hi-pods-7fznRPOvr0F-D07SAmTfk-_.300x300.jpg',
        thumbnail:
            'https://cdn-images-1.listennotes.com/podcasts/hi-pods-7fznRPOvr0F-D07SAmTfk-_.300x300.jpg',
        id: 'c855f659c8944384b7abdc1f346836fd',
        explicit_content: false,
    },
]

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
                        {searchResults.map(({ id, ...podcast }) => (
                            <SearchBarItem key={id} {...podcast} />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SearchBar
