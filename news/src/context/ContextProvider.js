import React, { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
export const CartContext = createContext();

export const ContextProvider = ({ children }) => {
  const [allNews, setAllNews] = useState([]);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams,setSearchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState(searchParams.get("q") || "");
  
  let all = "everything";
console.log(searchParams)
  useEffect(() =>{
    
  },[])
  const getData = () => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${
          inputValue
        }&from=2022-12-10&sortBy=publishedAt&apiKey=c857f1dddbdf4a41bea8545facf235b2`
      )
      .then((data) => {
        setAllNews(data.data.articles);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  //   Handle Search Funtionality
  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      setSearched(true);
      setInputValue(e.target.value)
      setSearchParams({q:e.target.value})
      getData();
    }
  };

  console.log(allNews);
  return (
    <CartContext.Provider
      value={{
        allNews,
        setAllNews,
        inputValue,
        setInputValue,
        handleSearch,
        loading,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
