import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "book",
  initialState: {
    allBooks: [],
    selectedBook: {},
  },
  reducers: {
    setAllBooks: (state, action) => {
      state.allBooks=action.payload;
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

export const { setAllBooks, setSelectedBook } = booksSlice.actions;

export const selectAllBooks = (state) => state.book.allBooks;
export const selectedSingleBook = (state) => state.book.selectedBook;

export default booksSlice.reducer;
