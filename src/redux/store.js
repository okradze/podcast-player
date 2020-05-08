import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }
