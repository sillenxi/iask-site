import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div>
      <div className="max-width block">
        <div className="block__head" data-content="contact">联系我们</div>
        <div className="block__body">
          <p className="contact-tips">您好，如有任何问题请联系我们，欢迎提交任何关于我们的问题和建议，我们将尽快回复您。<br/>
  感谢您对我们的帮助。我们竭诚为您服务。</p>
        </div>
      </div>
      <div className="max-width contact-way">
        <div className="contact-way-item">
          <img className="way__icon" src={require("../images/contact_icon_phone.svg")} alt="电话"/>
          <div className="way__name">电话</div>
          <div className="way__content">021 - 80394782</div>
        </div>
        <div className="contact-way-item">
          <img className="way__icon" src={require("../images/contact_icon_email.svg")} alt="电话"/>
          <div className="way__name">邮箱</div>
          <div className="way__content">actioncoaching@qq.com</div>
        </div>
        <div className="contact-way-item">
          <img className="way__icon" src={require("../images/contact_icon_adress.svg")} alt="电话"/>
          <div className="way__name">地址</div>
          <div className="way__content">上海市长宁区金钟路658弄东华科技园1号楼B座5楼</div>
        </div>
      </div>
    </div>
  )
}

export default Contact