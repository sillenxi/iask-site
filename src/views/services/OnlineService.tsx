import React from 'react'
import { Link } from 'react-router-dom'
import '../Trends/Cases/index.scss'
import './OnlineService.scss'

function OnlineService() {
  const serviceList = [
    {
      bg: require('../../images/online_ai.png'),
      title: '很牛智能教练',
      desc: '很牛智能教练是一款促进目标达成的人工智能产品，基于AI技术和企业教练技术，通过每周一对一的教练辅导，帮助员工更好的达成业务目标，激发员工主动思考，提升独立解决问题的能力，进一步提升组织的目标达成率。',
      href: '/smart-coach'
    },
    {
      bg: require('../../images/online_one_to_one.png'),
      title: '一对一教练',
      desc: '通过在线一对一教练对话方式帮助企业管理者实现目标。',
      href: '/one-to-one'
    }
  ]
  return (
    <div className="container mx-auto">
    {
      serviceList.map((item, index) => (
        <Link className="cases-item" key={index} to={item.href}>
          <img className="cases-item__bg" src={item.bg} alt={item.title} />
          <div className="cases-item__content">
            <div className="cases-item__title">{item.title}</div>
            <div className="cases-item__desc">{item.desc}</div>
            <div className="cases-item__arrow"></div>
          </div>
        </Link>
      ))
    }
    </div>
  )
}

export default OnlineService
