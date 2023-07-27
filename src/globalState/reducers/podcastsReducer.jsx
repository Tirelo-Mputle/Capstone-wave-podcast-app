import { createSlice } from '@reduxjs/toolkit';
const podcastsSlice = createSlice({
  name: 'podcastsSlice',
  initialState: {
    allPodcasts: [],
    isLoading: false,

    currentPodcast: null,
  },
  reducers: {
    setAllPodcasts: (state, action) => {
      return { ...state, allPodcasts: action.payload };
    },
    setIsLoading: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
    setCurrentPodcast: (state, action) => {
      return { ...state, currentPodcast: action.payload };
    },
  },
});

export const { setAllPodcasts, setIsLoading, setCurrentPodcast } =
  podcastsSlice.actions;
export const podcastsReducer = podcastsSlice.reducer;
