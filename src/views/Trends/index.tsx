import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

function Trends() {
  const acclaimList = [
    {
      name: '朱伟正',
      position: '《培训》杂志主编',
      comment: '彼得·德鲁克在《21世纪的管理挑战》一书中指出：20世纪管理学的最伟大贡献是将行业工人的生产力提高了50倍，而21世纪管理学的挑战则是如何将知识员工的生产力提高50倍。要达成德鲁克提出这这一目标，必须充分挖掘个人和组织的创造潜能，实现最大化的绩效…'
    },
    {
      name: '宋翰乙',
      position: '中国工商银行企业文化部总经理',
      comment: '根据美国管理协会《教练：成功实践的全球研究，当前的趋势和来来的可能胜》（2008一2018）报告，超过一半的公司已经在应用教练辅导，其中北美公司比例为52％国际其他公司为55％。 国际教练协会对接受教练服务的客户进行调查发现， 57％的人认为改善了团队...'
    },
    {
      name: '丁捷',
      position: '云学堂联合创始人、总裁',
      comment: '和行动教练相识5年多了，在很多项目上都有合作。一直致力于将教练技术和企业管理相结合，因此一直在关注他，因为我们有同样的目标——探索管理效能的最大化。'
    }
  ]

  return (
    <div>
      <div className="banner">
        <h2 className="banner__title">最新动态</h2>
        <div className="banner__desc">爱问（上海）管理咨询有限公司是一家专业的管理咨询和培训公司，致力于通过教练技术帮助中国企业提升领导力、培养人才、达成目标。</div>
      </div>
      <div className="nav-menu-wrap">
        <nav className="container mx-auto nav-menu">
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/trends" exact>客户赞誉</NavLink>
          </div>
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/trends/company" exact>公司动态</NavLink>
          </div>
        </nav>
      </div>
      <div className="block">
        <div className="block__head" data-content="Acclaim">客户赞誉</div>
        <div className="block__body">
          <div className="container mx-auto acclaim-list">
          {
            acclaimList.map((acclaim, index) => (
              <div className="acclaim-item" key={index}>
                <div className="flex items-baseline">
                <div className="acclaim-item__man">{acclaim.name}</div>
                  <div className="acclaim-item__position">{acclaim.position}</div>
                </div>
                <div className="acclaim-item__comment">{acclaim.comment}</div>
                <div className="acclaim-item__arrow"></div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trends