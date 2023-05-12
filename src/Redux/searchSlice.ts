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

export const { setSearchTerm, setSearchResults } = searchSlice.actions;

export const searchAsync = (searchTerm: string) => {
  return (dispatch: any) => {
    // Perform search and dispatch setSearchResults with search results
    const searchResults: string[] = ['result 1', 'result 2', 'result 3'];
    dispatch(setSearchResults(searchResults));
  };
};

export const searchReducer = searchSlice.reducer;
