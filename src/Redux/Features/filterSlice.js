import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  sorting: "",
  manga: false,
  novel: false,
  comic: false,
  rating: "",
  range: 3,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterSearch: (state, action) => {
      state.search = action.payload;
    },

    setFilterSorting: (state, action) => {
      state.sorting = action.payload;
    },

    setFilterManga: (state, action) => {
      state.manga = action.payload;
    },
    setFilterComic: (state, action) => {
      state.comic = action.payload;
    },
    setFilterNovel: (state, action) => {
      state.novel = action.payload;
    },
    setFilterRating: (state, action) => {
      state.rating = action.payload;
    },
    setFilterRange: (state, action) => {
      state.range = action.payload;
    },
    clearFilter: (state) => {
      state.search = "";
      state.sorting = "";
      state.manga = false;
      state.novel = false;
      state.comic = false;
      state.rating = "";
      state.range = 3;
    },
  },
});

export const {
  setFilterSearch,
  setFilterComic,
  setFilterManga,
  setFilterRange,
  setFilterNovel,
  setFilterRating,
  setFilterSorting,
  clearFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
