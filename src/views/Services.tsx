import React from 'react'
import { Route, NavLink, Switch, useRouteMatch } from 'react-router-dom'
import Lessons from './Lessons'
import Certification from './services/CoachCertification'
import BankSystem from './services/BankSystem'
import OnlineService from './services/OnlineService'

function Services() {
  const { path, url } = useRouteMatch()

  return (
    <div>
      <div className="banner">
        <h2 className="text-4xl md:text-5xl banner__title">产品服务</h2>
        <div className="hidden md:block banner__desc">爱问（上海）管理咨询有限公司是一家专业的管理咨询和培训公司，致力于通过教练技术帮助中国企业提升领导力、培养人才、达成目标。</div>
      </div>
      <div className="container mx-auto nav-menu">
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to={`${url}/certification`}>教练认证</NavLink>
        </div>
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to={url} exact>培训课程</NavLink>
        </div>
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to={`${url}/bank`}>银行体系</NavLink>
        </div>
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to={`${url}/online`}>在线服务</NavLink>
        </div>
      </div>
      <Switch>
        <Route path={path} exact><Lessons /></Route>
        <Route path={`${path}/certification`}><Certification /></Route>
        <Route path={`${path}/bank`}><BankSystem /></Route>
        <Route path={`${path}/online`}><OnlineService /></Route>
      </Switch>
    </div>
  )
}

export default Services