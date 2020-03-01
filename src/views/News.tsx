import React from 'react';
import './News.scss';

function News() {
  return (
    <div className="page-news">
      <div className="container mx-auto news-list">
        <div className="news-item">
          <div className="news-item__img">
            <img src="" alt="新闻资讯" />
          </div>
          <div className="news-item__info">
            <div className="news-item__title">当下的管理现状，德鲁克在1959年已经预见</div>
            <div className="news-item__date">2020.02.07</div>
            <div className="news-item__brief">当下的管理现状，德鲁克在1959年已经预见重读德鲁克《已经发生的未来》有感季益祥</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;