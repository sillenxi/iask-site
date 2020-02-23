import React from 'react'
import './BankSystem.scss'

function BankSystem() {
  return (
    <div className="comp-bank-system">
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">业务发展</div>
          <div className="block__subtitle">[    银行业岗位专业课程    ]</div>
          <div className="block__body photos">
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_1.png')})`}}>柜员</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_2.png')})`}}>大堂经理</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_3.png')})`}}>客户经理</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_4.png')})`}}>私人银行投资顾问/理财经理</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_5.png')})`}}>网点负责人</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_6.png')})`}}>支行长</div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">人才发展</div>
          <div className="block__subtitle">[    银行业岗位专业课程    ]</div>
          <div className="block__body photos">
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_7.png')})`}}>新员工</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_8.png')})`}}>资深员工</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_9.png')})`}}>新任管理/后备</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_10.png')})`}}>资深管理</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_11.png')})`}}>中高层管理</div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">行业信息</div>
          <div className="block__subtitle">[    银行业岗位专业课程    ]</div>
          <div className="block__body photos">
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_12.png')})`}}>行业信息</div>
            <div className="photo-item" style={{backgroundImage: `url(${require('../../images/service_system_13.png')})`}}>通用素质</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankSystem