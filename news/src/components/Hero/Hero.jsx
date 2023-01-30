import React from "react";
import style from "./Hero.module.css";
import { useContext } from "react";
import { CartContext } from "./../../context/ContextProvider";
import BodySingleNews from "../BodySingleNews/BodySingleNews";
const Hero = () => {
  const { allNews, setAllNews, loading } = useContext(CartContext);
  return (
    <div className={style.hero_cont}>
      {loading ? (
        <div className={style.loader}></div>
      ) : (
        <div className={style.hero_news_cont}>
          {allNews.length>0 ? 
            allNews.map((news, i) => {
              return <BodySingleNews key={i} news={news} />;
            })
            : <h1 style={{textAlign:"center"}}>No Data found</h1>}

           
        </div>
      )}
    </div>
  );
};

export default Hero;
