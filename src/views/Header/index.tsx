import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="app-header">
      <div className="container mx-auto header-wrap">
        <Link className="app-logo" to="/">
          <h1>爱问管理</h1>
        </Link>
        <nav className="nav">
          <ul className="menu">
            <li className="menu-item"><Link to="/">首页</Link></li>
            <li className="menu-item"><Link to="/about">关于我们</Link></li>
            <li className="menu-item"><Link to="/services">产品服务</Link></li>
            <li className="menu-item"><Link to="/">最新动态</Link></li>
            <li className="menu-item"><Link to="/">学习资源</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header