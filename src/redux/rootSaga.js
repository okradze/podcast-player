import { all, call } from 'redux-saga/effects'
import { podcastsSagas } from './podcasts/podcastsSagas'

export default function* () {
    yield all([call(podcastsSagas)])
}
