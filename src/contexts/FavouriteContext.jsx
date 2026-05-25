import { createContext, useContext, useState } from "react";

const FavouriteContext = createContext();

function FavouriteProvider({ children }) {

  const [favouriteList, setFavouriteList] = useState([]);


  function toggleFavorite(id) {
    const exists = favouriteList.find(index => index === id);

    if (exists) {
      setFavouriteList(favouriteList.filter(index => index !== id));
    } else {
      setFavouriteList([...favouriteList, id]);
    }
    console.log(favouriteList);

  }

  function isFavorite(id) {
    return favouriteList.find(index => index === id);
  }

  return (
    <>
      <FavouriteContext.Provider value={{ favouriteList, toggleFavorite, isFavorite }}>
        {children}
      </FavouriteContext.Provider>
    </>
  )
}

function useFavourite() {
  return useContext(FavouriteContext)
}

export { FavouriteProvider, useFavourite }