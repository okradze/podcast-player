import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import AudioPlayer from './AudioPlayer'

import {
    selectPlayingEpisode,
    selectRecentPodcastId,
    selectIsPlaying,
    selectVolume,
    selectCurrentTime,
} from '../../redux/podcast/podcastSelectors'
import {
    pause,
    play,
    setVolume,
    setCurrentTime,
} from '../../redux/podcast/podcastActions'

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
    currentTime: selectCurrentTime,
})

const mapDispatchToProps = dispatch => ({
    pause: () => dispatch(pause()),
    play: () => dispatch(play()),
    setVolume: volume => dispatch(setVolume(volume)),
    setCurrentTime: time => dispatch(setCurrentTime(time)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AudioPlayerContainer)
