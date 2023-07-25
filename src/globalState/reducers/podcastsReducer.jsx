import { createSlice } from '@reduxjs/toolkit';
const podcastsSlice = createSlice({
  name: 'podcastsSlice',
  initialState: {
    allPodcasts: [],
  },
  reducers: {
    setAllPodcasts: (state, action) => {
      return { ...state, allPodcasts: action.payload };
    },
  },
});

export const { setAllPodcasts } = podcastsSlice.actions;
export const podcastsReducer = podcastsSlice.reducer;
