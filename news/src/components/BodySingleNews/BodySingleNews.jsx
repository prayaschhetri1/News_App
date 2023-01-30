import React from "react";
import style from "./BodySingleNews.module.css";
const BodySingleNews = ({ news }) => {
  return (
    <div className={style.single_news_cont}>
      <div className={style.image_cont}>
        <img
          src={
            news.urlToImage
              ? news.urlToImage
              : "https://tse3.mm.bing.net/th?id=OIP.Tlkq8vAT7fbwPPA4rJjGyQHaEK&pid=Api&P=0"
          }
          className={style.news_image}
          width="100%"
          height="100%"
          alt=""
        />
      </div>
      <div className={style.title}>{news.title}</div>
      <div className={style.description}>{news.description} </div>
      <div className={style.author}>{news.author}</div>
    </div>
  );
};

export default BodySingleNews;
