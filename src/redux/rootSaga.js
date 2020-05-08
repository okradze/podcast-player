import { all, call } from 'redux-saga/effects'
import { podcastsSagas } from './podcasts/podcastsSagas'
import { discoverSagas } from './discover/discoverSagas'

export default function* () {
    yield all([call(podcastsSagas), call(discoverSagas)])
}
