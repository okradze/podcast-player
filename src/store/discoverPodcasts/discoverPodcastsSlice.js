import { createSlice } from "@reduxjs/toolkit"
import { listenNotesApi } from '../../axios'

export const initialState = {
  curated_lists: [],
  isFetching: false,
  page: 1,
  lastFetchedPage: null,
  error: null,
}

export const discoverPodcastsSlice = createSlice({
  name: 'discoverPodcasts',
  initialState,
  reducers: {
    setLoading(state) {
      state.isFetching = true
    },
    setPodcastLists(state, action) {
      const { has_next, page_number, curated_lists } = action.payload

      state.isFetching = false
      state.error = null
      state.hasNextPage = has_next
      state.lastFetchedPage = page_number
      state.curated_lists = [...state.curated_lists, ...curated_lists]
    },
    setError(state, action) {
      state.error = action.payload
    },
    nextPage(state) {
      state.page++
    },
  },
})

export const { setLoading, setPodcastLists, setError, nextPage } = discoverPodcastsSlice.actions

export const fetchPodcastLists = async (dispatch, page, lastFetchedPage) => {
  try {
    if (page > lastFetchedPage) {
      dispatch(setLoading())

      const { data } = await listenNotesApi.get(
        `curated_podcasts?page=${page}`,
      )

      dispatch(setPodcastLists(data))
    }
  } catch (error) {
    dispatch(setError(error))
  }
}

export default discoverPodcastsSlice.reducer

