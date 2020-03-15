import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Source.scss";

const Source = () => {
  const publications = [
    {
      cover: require('../images/source_book_1.png'),
      name: '行动教练：把员工带成干将',
      author: '季益祥',
      intro: '本书将”西方的教练方式“和”东方的学徒方式“相结合，以解决管理问题为目标，以启发员工心智为导向，将倾听、提问、反馈形成有效的闭环。这本书同时还是一本非常实用的工具书，里面提供了简洁有效的工具表单，帮助管理者实现和员工、上级和同级之间的高效沟通，从而进一步帮助员工成为干将。'
    },
    {
      cover: require('../images/source_book_2.png'),
      name: '行动教练实践指南',
      author: '季益祥、蔡明',
      intro: '《行动教练实践指南》汇集近百位行动教练认证讲师5年多的企业教练经验编撰而成，是行动教练基础课程的配套教材。'
    }
  ];

  const learnings = [
    {
      bg: require('../images/source_learn_1.png'),
      title: '教练课程',
      desc: '行动教练音频课程+行动教练视频课程，边听边学，边学边练，轻松有趣，简单有效。'
    },
    {
      bg: require('../images/source_learn_2.png'),
      title: '精选文章',
      desc: '行动教练音频课程+每日精选教练相关文章，利用碎片化时间学习教练知识。\r\n关注行动教练订阅号，即可查看。'
    }
  ];

  return (
    <div>
      <div className="banner banner-source">
        <h2 className="text-4xl md:text-5xl banner__title">学习资源</h2>
        <div className="hidden md:block banner__desc">爱问（上海）管理咨询有限公司是一家专业的管理咨询和培训公司，致力于通过教练技术帮助中国企业提升领导力、培养人才、达成目标。</div>
      </div>
      <div className="nav-menu-wrap">
        <nav className="container mx-auto nav-menu">
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/trends/cases" exact>项目案例</NavLink>
          </div>
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/trends" exact>客户赞誉</NavLink>
          </div>
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/trends/news" exact>公司动态</NavLink>
          </div>
        </nav>
      </div>
      <div className="block">
        <div className="block__head" data-content="Publications">出版物</div>
        <div className="block__body">
          <div className="container mx-auto publication-list">
          {
            publications.map((item, index) => (
              <div className="publication-item" key={index}>
                <div className="publication-item__cover">
                  <img src={item.cover} alt={item.name}/>
                </div>
                <div className="publication-item__info">
                  <div className="publication-item__name">{item.name}</div>
                  <div className="publication-item__author">作者：{item.author}</div>
                  <div className="publication-item__intro">简介：{item.intro}</div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block__head" data-content="learning">在线学习</div>
        <div className="block__body">
          <div className="container mx-auto">
          {
            learnings.map((item, index) => (
              <div className="cases-item" key={index}>
                <img className="cases-item__bg" src={item.bg} alt={item.title} />
                <div className="cases-item__content">
                  <div className="cases-item__title">{item.title}</div>
                  <div className="cases-item__desc">{item.desc}</div>
                  <div className="cases-item__arrow"></div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block__head" data-content="Training">线上训练营</div>
        <div className="block__body">
          <div className="container mx-auto">
            <div className="cases-item">
              <img className="cases-item__bg" src={require('../images/source_train.png')} alt="线上训练营" />
              <div className="cases-item__content">
                <div className="cases-item__title">线上训练营</div>
                <div className="cases-item__desc">培训工作面临的三大痛点，爱问采用线上训练营的培训方式，替代传统的线下培训，一一攻破痛点的同时，为企业带来三大价值和成果。</div>
                <div className="cases-item__arrow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Source;