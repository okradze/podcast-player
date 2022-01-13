import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../store/rootReducer'

export const createTestStore = () => {
  return configureStore({ reducer: rootReducer })
}
