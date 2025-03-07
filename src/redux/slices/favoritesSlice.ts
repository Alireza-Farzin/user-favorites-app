import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/global";

interface FavoritesState {
  items: UserType[];
}

const initialState: FavoritesState = {
  items: []
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<UserType>) => {
      const index = state.items.findIndex((user) => user.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push({...action.payload});
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;