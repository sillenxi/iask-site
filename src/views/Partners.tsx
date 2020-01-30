import React from 'react'
import './Partners.scss'

function Partners() {
  return (
    <div className="max-width block">
      <div className="block__head" data-content="client">尊贵客户</div>
      <div className="block__body">
        <div className="partners">
          <div className="partners__nav"></div>
          <div className="partners__content">
            <div className="partner-item">
              <img className="partner-item__logo" src="" alt=""/>
              <div className="partner-item__name">中国银行</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners