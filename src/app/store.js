import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/character/CharacterSlice";
import houseReducer from "../features/houses/HouseSlice";
import bookReducer from "../features/books/BookSlice";

export default configureStore({
  reducer: {
    characters: charactersReducer,
    house:houseReducer,
    book:bookReducer
  },
});
