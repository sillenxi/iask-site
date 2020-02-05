import React from 'react'
import './Partners.scss'
import { partners } from '../data/about'

function Partners() {
  return (
    <div className="container mx-auto block">
      <div className="block__head" data-content="client">尊贵客户</div>
      <div className="block__body">
        <div className="partners">
        {
          partners.map((img, index) => (
            <div className="partner-item" key={index}>
              <img src={img} alt="合作伙伴" />
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Partners