import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
  values: localStorage.getItem("favoritesValues")
    ? localStorage
        .getItem("favoritesValues")
        .split(",")
        .map((item) => {
          return {
            city: item.split("*")[0],
            country: item.split("*")[1],
            currentTemperature: item.split("*")[2],
            currentCondition: item.split("*")[3],
          };
        })
    : [],
};

export const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.values.push(action.payload);
      const stateToString = state.values.map(
        (item) =>
          `${item.city}*${item.country}*${item.currentTemperature}*${item.currentCondition}`
      );
      localStorage.setItem("favoritesValues", stateToString.join(","));
    },
    removeFromFavorites: (state, action) => {
      const filteredValues = state.values.filter((item) => {
        if (
          action.payload.city !== item.city &&
          action.payload.country !== item.country
        ) {
          return item;
        }
      });

      console.log(filteredValues);
      const stateToString = filteredValues.map(
        (item) =>
          `${item.city}*${item.country}*${item.currentTemperature}*${item.currentCondition}`
      );

      localStorage.setItem("favoritesValues", stateToString.join(","));
      console.log(localStorage.getItem("favoritesValues"));
      localStorage.getItem("favoritesValues")
        ? (state.values = localStorage
            .getItem("favoritesValues")
            .split(",")
            .map((item) => {
              return {
                city: item.split("*")[0],
                country: item.split("*")[1],
                currentTemperature: item.split("*")[2],
                currentCondition: item.split("*")[3],
              };
            }))
        : (state.values = []);
    },
    isOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToFavorites, removeFromFavorites, isOpen } =
  favorites.actions;

export default favorites.reducer;
