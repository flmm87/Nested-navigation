import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeIds: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [FavMealIds, setFavMealIds] = useState([]);

  function addFavorite(id) {
    setFavMealIds((currFavId) => [...currFavId, id]);
  }

  function removeFavorites(id) {
    setFavMealIds((currFavIds) => currFavIds.filter((ids) => ids !== id));
  }

  const value = {
    ids: FavMealIds,
    addFavorite: addFavorite,
    removeIds: removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavouritesContextProvider;
