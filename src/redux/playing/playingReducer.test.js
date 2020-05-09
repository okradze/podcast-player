import playingReducer, { initialState } from './playingReducer'
import { setVolume, setCurrentTime, playEpisode, play, pause } from './playingActions'

describe('playingReducer', () => {
    test('return initial state', () => {
        const state = playingReducer(undefined, {})
        expect(state).toEqual(initialState)
    })
    test('playEpisode', () => {
        const podcastId = '123'
        const episode = 'data'
        const state = playingReducer(initialState, playEpisode(podcastId, episode))
        expect(state).toEqual({
            ...initialState,
            currentTime: 0,
            podcastId,
            playingEpisode: episode,
        })
    })
    test('setVolume', () => {
        const volume = 0.9
        const state = playingReducer(initialState, setVolume(volume))
        expect(state.volume).toEqual(volume)
    })
    test('play', () => {
        const state = playingReducer(initialState, play())
        expect(state.isPlaying).toEqual(true)
    })
    test('pause', () => {
        const state = playingReducer(initialState, pause())
        expect(state.isPlaying).toEqual(false)
    })
    test('setCurrentTime', () => {
        const currentTime = 100
        const state = playingReducer(initialState, setCurrentTime(currentTime))
        expect(state.currentTime).toBe(currentTime)
    })
})
