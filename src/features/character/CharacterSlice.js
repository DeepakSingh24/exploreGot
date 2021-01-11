import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    allCharacters: [],
    selectedCharacter: {},
  },
  reducers: {
    setAllcharacters: (state, action) => {
      state.allCharacters=action.payload;
    },
    setSelectedCharcter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
  },
});

export const { setAllcharacters, setSelectedCharcter } = characterSlice.actions;

export const selectAllCharacters = (state) => state.characters.allCharacters;
export const selectedSingleCharacter = (state) =>
  state.characters.selectedCharacter;

export default characterSlice.reducer;
