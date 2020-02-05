import React from 'react'
import './Contact.scss'
import { ReactComponent as SVGPhone } from '../images/contact_icon_phone.svg'
import { ReactComponent as SVGEmail } from '../images/contact_icon_email.svg'
import { ReactComponent as SVGAddress } from '../images/contact_icon_adress.svg'

function Contact() {
  return (
    <div>
      <div className="container mx-auto block">
        <div className="block__head" data-content="contact">联系我们</div>
        <div className="block__body">
          <div className="container mx-auto contact-way">
            <div className="contact-way-item">
              <SVGPhone className="way__icon" />
              <div className="way__name">电话</div>
              <div className="way__content">021 - 80394782</div>
            </div>
            <div className="contact-way-item">
              <SVGEmail className="way__icon" />
              <div className="way__name">邮箱</div>
              <div className="way__content">actioncoaching@qq.com</div>
            </div>
            <div className="contact-way-item">
              <SVGAddress className="way__icon" />
              <div className="way__name">地址</div>
              <div className="way__content">上海市长宁区东华科技园1号楼B座5楼</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact