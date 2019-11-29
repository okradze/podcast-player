import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import AudioPlayerContainer from './components/AudioPlayer/AudioPlayerContainer'
import Homepage from './pages/Homepage/Homepage'
import Discoverpage from './pages/Discoverpage/Discoverpage'
import Podcastpage from './pages/Podcastpage/Podcastpage'

const App = () => (
    <BrowserRouter>
        <div className='container'>
            <div className='App'>
                <Sidebar />
                <AudioPlayerContainer />
                <div className='main-page'>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route path='/discover' component={Discoverpage} />
                        <Route
                            exact
                            path='/podcast/:podcastId'
                            component={Podcastpage}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter>
)

export default App
