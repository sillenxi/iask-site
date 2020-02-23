import React from 'react'
import './OnlineService.scss'

function OnlineService() {
  return (
    <div className="comp-online-service">
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">什么是一对一教练</div>
          <div className="block__subtitle">[    一对一在线辅导    ]</div>
          <div className="block__body what">
            <div className="what__desc">通过在线一对一教练对话方式帮助企业管理者实现目标</div>
            <div className="what-items">
              <div className="what-item" style={{backgroundImage: `url(${require('../../images/service_online_1.png')})`}}>企业</div>
              <div className="what-item" style={{backgroundImage: `url(${require('../../images/service_online_2.png')})`}}>员工</div>
              <div className="what-item" style={{backgroundImage: `url(${require('../../images/service_online_3.png')})`}}>教练</div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">一对一教练创造的收益</div>
          <div className="block__subtitle">[    一对一教练在线辅导    ]</div>
          <div className="block__body profit">
            <div className="profit-item" style={{backgroundImage: `url(${require('../../images/service_online_4.png')})`}}>
              <div className="profit-item__name">行为改变，目标达成</div>
              <div className="profit-item__desc">为将来要达成的目标描绘更加清晰的图景，将绩效目标梳理清晰，使其符合SMART原则，负向转正向。</div>
            </div>
            <div className="profit-item" style={{backgroundImage: `url(${require('../../images/service_online_5.png')})`}}>
              <div className="profit-item__name">适时陪伴，跟出结果</div>
              <div className="profit-item__desc">跟踪被指导者的目标完成进展，带着问题来，带着方案走，跟出结果来。</div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">服务咨询</div>
          <div className="block__subtitle">[    扫码咨询 获取更多优惠    ]</div>
          <div className="block__body contact">
            <img className="contact__left" src={require('../../images/service_online_6.png')} alt="" />
            <div className="contact__right">
              <div className="contact__price">500-3000元/次</div>
              <div className="contact__desc">每次辅导45分钟，4次起采购</div>
              <div className="contact__qrcode">
                <img src={require('../../images/service_online_qrcode.png')} alt="" />
                <div>饶老师</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineService