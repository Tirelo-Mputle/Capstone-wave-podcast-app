import { createSlice } from '@reduxjs/toolkit';
const podcastsSlice = createSlice({
  name: 'podcastsSlice',
  initialState: {
    allPodcasts: [],
    isLoading: false,
    currentSeason: null,
    currentPodcast: null,
    homePageDisplayedPodcasts: [],
    sorting: 'unsorted',
    searchInput: '',
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
    setCurrentSeason: (state, action) => {
      return { ...state, currentSeason: action.payload };
    },
    setHomePageDisplayedPodcasts: (state, action) => {
      return { ...state, homePageDisplayedPodcasts: action.payload };
    },
    setSorting: (state, action) => {
      return { ...state, sorting: action.payload };
    },
    setSearchInput: (state, action) => {
      return { ...state, searchInput: action.payload };
    },
  },
});

export const {
  setAllPodcasts,
  setIsLoading,
  setCurrentPodcast,
  setCurrentSeason,
  setHomePageDisplayedPodcasts,
  setSorting,
  setSearchInput,
} = podcastsSlice.actions;
export const podcastsReducer = podcastsSlice.reducer;
