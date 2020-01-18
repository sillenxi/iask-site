import React from 'react'
import './index.scss'

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer max-width">
        <ul className="footer__nav">
          <li className="footer__nav-item"><a href="/">关于我们</a></li>
          <li className="footer__nav-item"><a href="/">产品服务</a></li>
          <li className="footer__nav-item"><a href="/">最新动态</a></li>
          <li className="footer__nav-item"><a href="/">学习资源</a></li>
        </ul>
        <div className="footer__company">
          <div className="footer__company-item">爱问（上海）管理咨询有限公司</div>
          <div className="footer__company-item">电话：021-80394782</div>
          <div className="footer__company-item">地址：上海市长宁区东华大学科技园1号楼B座504</div>
        </div>
        <div className="footer__qrcode">
          <img className="footer__qrcode-item" src={require('../../images/qrcode_demo.png')} alt="公众号" />
          <img className="footer__qrcode-item" src={require('../../images/qrcode_demo.png')} alt="公众号" />
        </div>
      </div>
      <div className="copyright">
        <div className="copyright__company">Copyright &copy; 爱问（上海）管理咨询有限公司</div>
        <div className="copyright__icp">苏ICP备09066281号-1</div>
      </div>
    </footer>
  )
}

export default Footer