import React from 'react'

const PodcastItem = ({ id, thumbnail, title, publisher }) => (
    <div key={id}>
        <img src={thumbnail} alt='' />
        <h3>{title}</h3>
        <p>{publisher}</p>
    </div>
)

export default PodcastItem
