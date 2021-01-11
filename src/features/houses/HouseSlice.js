import { createSlice } from "@reduxjs/toolkit";

export const houseSlice = createSlice({
  name: "house",
  initialState: {
    allHouses: [],
    selectedHouse: {},
  },
  reducers: {
    setAllHouse: (state, action) => {
      state.allHouses=action.payload;
    },
    setSelectedHouse: (state, action) => {
      state.selectedHouse = action.payload;
    },
  },
});

export const { setAllHouse, setSelectedHouse } = houseSlice.actions;

export const selectAllHouse = (state) => state.house.allHouses;
export const selectedSingleHouse = (state) =>
  state.house.selectedHouse;

  export default houseSlice.reducer;
