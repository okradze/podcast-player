import React, { lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AudioPlayerContainer from './components/AudioPlayer/AudioPlayerContainer'

const Homepage = lazy(() => import('./pages/Homepage/Homepage'))
const Discoverpage = lazy(() => import('./pages/Discoverpage/Discoverpage'))
const Podcastpage = lazy(() => import('./pages/Podcastpage/Podcastpage'))

const App = () => (
    <BrowserRouter>
        <ErrorBoundary>
            <div className='container'>
                <div className='App'>
                    <Sidebar />
                    <AudioPlayerContainer />
                    <div className='main-page'>
                        <Header />
                        <Switch>
                            <Suspense fallback={<div />}>
                                <Route exact path='/' component={Homepage} />
                                <Route
                                    path='/discover'
                                    component={Discoverpage}
                                />
                                <Route
                                    exact
                                    path='/podcast/:podcastId'
                                    component={Podcastpage}
                                />
                            </Suspense>
                        </Switch>
                    </div>
                </div>
            </div>
        </ErrorBoundary>
    </BrowserRouter>
)

export default App
