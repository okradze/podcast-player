import playingReducer from './playingReducer'
import {
    setVolume,
    setCurrentTime,
    playEpisode,
    play,
    pause,
} from './playingActions'

const initialState = {
    podcastId: '',
    playingEpisode: null,
    isPlaying: false,
    volume: 1.0,
    currentTime: 0,
}

describe('playingReducer', () => {
    it('should return initial state', () => {
        expect(playingReducer(undefined, {})).toEqual(initialState)
    })
    it('should set playing episode', () => {
        expect(playingReducer(initialState, playEpisode('1', '1'))).toEqual({
            ...initialState,
            currentTime: 0,
            podcastId: '1',
            playingEpisode: '1',
        })
    })
    it('should set volume', () => {
        expect(playingReducer(initialState, setVolume(0.9)).volume).toBe(0.9)
    })
    it('should play', () => {
        expect(playingReducer(initialState, play()).isPlaying).toBe(true)
    })
    it('should pause', () => {
        expect(playingReducer(initialState, pause()).isPlaying).toBe(false)
    })
    it('should set current time', () => {
        expect(
            playingReducer(initialState, setCurrentTime(100)).currentTime,
        ).toBe(100)
    })
})
