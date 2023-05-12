import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
  searchResults: string[];
}

const initialState: SearchState = {
  searchTerm: '',
  searchResults: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<string[]>) => {
      state.searchResults = action.payload;
    },
  },
});
