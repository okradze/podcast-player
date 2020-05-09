import PlayingTypes from './playingTypes'
import {
    playEpisode,
    setVolume,
    setCurrentTime,
    pause,
    play,
} from './playingActions'

it('should create playEpisode action', () => {
    const podcastId = '123'
    const episode = 'data'
    const action = playEpisode(podcastId, episode)

    expect(action.type).toEqual(PlayingTypes.PLAY_EPISODE)
    expect(action.payload).toEqual({ podcastId, episode })
})

it('should create setVolume action', () => {
    const volume = 0.5
    const action = setVolume(volume)

    expect(action.type).toEqual(PlayingTypes.SET_VOLUME)
    expect(action.payload).toEqual(volume)
})

it('should create setCurrentTime action', () => {
    const currentTime = 100
    const action = setCurrentTime(currentTime)

    expect(action.type).toEqual(PlayingTypes.CURRENT_TIME)
    expect(action.payload).toEqual(currentTime)
})

it('should create play action', () => {
    expect(play().type).toEqual(PlayingTypes.PLAY)
})

it('should create pause action', () => {
    expect(pause().type).toEqual(PlayingTypes.PAUSE)
})
