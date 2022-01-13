import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
})

export const persistor = persistStore(store)
