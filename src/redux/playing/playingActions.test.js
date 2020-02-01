import {
    PLAY_EPISODE,
    PLAY,
    PAUSE,
    SET_VOLUME,
    CURRENT_TIME,
} from './playingTypes'
import {
    playEpisode,
    setVolume,
    setCurrentTime,
    pause,
    play,
} from './playingActions'

it('should create playEpisode action', () => {
    const action = playEpisode('1', '1')
    expect(action.type).toEqual(PLAY_EPISODE)
    expect(action.payload).toEqual({ podcastId: '1', episode: '1' })
})

it('should create setVolume action', () => {
    const action = setVolume(1)
    expect(action.type).toEqual(SET_VOLUME)
    expect(action.payload).toEqual(1)
})

it('should create setCurrentTime action', () => {
    const action = setCurrentTime(100)
    expect(action.type).toEqual(CURRENT_TIME)
    expect(action.payload).toEqual(100)
})

it('should create play action', () => {
    expect(play().type).toEqual(PLAY)
})

it('should create pause action', () => {
    expect(pause().type).toEqual(PAUSE)
})
