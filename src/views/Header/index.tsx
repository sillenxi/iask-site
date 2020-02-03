import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { throttle } from '../../utils'

function Header() {
  const [visible, setVisible] = useState(true)

  const [offsetY, setOffsetY] = useState(0)
  const onScroll = throttle<EventListener>((e) => {
    const diffY = offsetY - window.pageYOffset
    if (diffY < 0) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    setOffsetY(window.pageYOffset)
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  return (
    <header className={classNames(["app-header", { 'visible': visible }])}>
      <div className="container mx-auto header-wrap">
        <Link className="app-logo" to="/">
          <h1>爱问管理</h1>
        </Link>
        <nav className="nav">
          <ul className="menu">
            <li className="menu-item"><Link to="/">首页</Link></li>
            <li className="menu-item"><Link to="/about">关于我们</Link></li>
            <li className="menu-item"><Link to="/services">产品服务</Link></li>
            <li className="menu-item"><Link to="/trends">最新动态</Link></li>
            <li className="menu-item"><Link to="/">学习资源</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header