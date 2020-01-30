import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Trainers from './Trainers'
import Partners from './Partners'
import Contact from './Contact'
import './About.scss'

function About() {
  return (
    <div>
      <div className="banner">
        <h2 className="banner__title">关于我们</h2>
        <div className="banner__desc">爱问（上海）管理咨询有限公司是一家专业的管理咨询和培训公司，致力于通过教练技术帮助中国企业提升领导力、培养人才、达成目标。</div>
      </div>
      <nav className="max-width nav-menu">
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/about" exact>公司简介</NavLink>
        </div>
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/about/trainers">讲师教练</NavLink>
        </div>
        <div className="nav-menu-item">
          <a className="nav-menu-item__txt" href="/trainers">企业荣誉</a>
        </div>
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/about/partners">尊贵客户</NavLink>
        </div>
        <div className="nav-menu-item">
          <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/about/contact">联系我们</NavLink>
        </div>
      </nav>
      {/* <HashRouter>
        <Switch> */}
          <Route path="/about" exact>
            <div id="intro" className="max-width block">
              <div className="block__head" data-content="Introduction">公司简介</div>
              <div className="block__body">
                <p className="company-intro">爱问（上海）管理咨询有限公司成立于2004年，15年专注于组织人才培养与发展领域<br />
      形成了助力企业人才战略发展的差异化优势，爱问公司格守“专注，诚信，热爱”的价值观，践行“专注行为转变，激发组织潜能”的使命<br />
      以全球前瞻的理念、专业一流的团队为企业提供体系咨询、面授培训、学习项目等形式的体化人才发展解决方案</p>
              </div>
            </div>
            <div id="culture" className="max-width block">
              <div className="block__head" data-content="culture">企业文化</div>
              <div className="block__body"></div>
            </div>
            <div id="style" className="max-width block">
              <div className="block__head" data-content="Style">企业风采</div>
              <div className="block__body">

              </div>
            </div>
          </Route>
          <Route path="/about/trainers"><Trainers /></Route>
          <Route path="/about/partners"><Partners /></Route>
          <Route path="/about/contact"><Contact /></Route>
        {/* </Switch>
      </HashRouter> */}
    </div>
  )
}

export default About