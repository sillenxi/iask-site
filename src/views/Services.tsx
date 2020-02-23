import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Lessons from './Lessons'
import Certification from './services/CoachCertification'
import BankSystem from './services/BankSystem'
import OnlineService from './services/OnlineService'

function Services() {
  return (
    <div>
      <div className="banner">
        <h2 className="text-4xl md:text-5xl banner__title">产品服务</h2>
        <div className="hidden md:block banner__desc">爱问（上海）管理咨询有限公司是一家专业的管理咨询和培训公司，致力于通过教练技术帮助中国企业提升领导力、培养人才、达成目标。</div>
      </div>
      <div className="container mx-auto nav-menu">
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/services/certification">教练认证</NavLink>
        </div>
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/services" exact>培训课程</NavLink>
        </div>
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/services/bank">银行体系</NavLink>
        </div>
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/services/online">在线服务</NavLink>
        </div>
      </div>
      <Route path="/services" exact><Lessons /></Route>
      <Route path="/services/certification"><Certification /></Route>
      <Route path="/services/bank"><BankSystem /></Route>
      <Route path="/services/online"><OnlineService /></Route>
    </div>
  )
}

export default Services