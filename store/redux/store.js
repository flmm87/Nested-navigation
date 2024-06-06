import { configureStore } from "@reduxjs/toolkit";

import favSlice from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favSlice,
  },
});
