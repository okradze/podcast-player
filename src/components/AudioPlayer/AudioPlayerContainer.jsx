import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import AudioPlayer from './AudioPlayer'

import {
    selectPlayingEpisode,
    selectPlayingPodcastId,
    selectIsPlaying,
    selectVolume,
    selectCurrentTime,
} from '../../redux/playing/playingSelectors'
import {
    pause,
    play,
    setVolume,
    setCurrentTime,
} from '../../redux/playing/playingActions'

const AudioPlayerContainer = props => {
    if (props.episode) {
        return <AudioPlayer {...props} />
    }

    return null
}

const mapStateToProps = createStructuredSelector({
    episode: selectPlayingEpisode,
    podcastId: selectPlayingPodcastId,
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
