import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Homepage from './pages/Homepage/Homepage'
import Podcastpage from './pages/Podcastpage/Podcastpage'

const App = () => (
    <BrowserRouter>
        <div className='container'>
            <div className='App'>
                <Sidebar />
                <div className='main-page'>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route
                            path='/discover'
                            component={() => <p>Discover</p>}
                        />
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
