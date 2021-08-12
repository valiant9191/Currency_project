import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  
  console.log();
  const [watchList, setWatchList] = useState(
    [
      "bitcoin",
      "ethereum",
      "ripple",
      "litecoin",
    ]
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const deleteCoin = (coin) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (watchList.indexOf(coin) === -1) {
      setWatchList([...watchList, coin]);
    }
  };


  const [navLinkOpen, navLinkToggle] = useState(false);

  return (
    <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin, navLinkOpen, navLinkToggle }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
