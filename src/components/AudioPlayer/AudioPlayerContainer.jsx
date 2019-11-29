import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import AudioPlayer from './AudioPlayer'

import {
    selectPlayingEpisode,
    selectRecentPodcastId,
    selectIsPlaying,
    selectVolume,
} from '../../redux/podcast/podcastSelectors'
import { togglePlay, setVolume } from '../../redux/podcast/podcastActions'

const AudioPlayerContainer = props => {
    if (props.episode) {
        return <AudioPlayer {...props} />
    }

    return null
}

const mapStateToProps = createStructuredSelector({
    episode: selectPlayingEpisode,
    podcastId: selectRecentPodcastId,
    isPlaying: selectIsPlaying,
    volume: selectVolume,
})

const mapDispatchToProps = dispatch => ({
    togglePlay: () => dispatch(togglePlay()),
    setVolume: volume => dispatch(setVolume(volume)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AudioPlayerContainer)
