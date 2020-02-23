import React from 'react'
import './CoachCertification.scss'

function CoachCertification() {
  return (
    <div className="comp-coach-certification">
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">企业内部教练/讲师认证课程</div>
          <div className="block__subtitle">[    持续精进  赞誉满满    ]</div>
          <div className="block__body inside">
            <div className="inside-item" style={{backgroundImage: `url(${require('../../images/product_ac_pic_online.png')})`}}>
              <div className="inside-item__title">线下课程</div>
              <div className="inside-item__desc">4天26小时课时，蔡明老师（创始人）亲授</div>
            </div>
            <div className="inside-item" style={{backgroundImage: `url(${require('../../images/product_ac_pic_online_2.png')})`}}>
              <div className="inside-item__title">线上辅导</div>
              <div className="inside-item__desc">为期一个月，每周一次，每次一小时的强化训练和专业点评</div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">被市场验证过的好课程</div>
          <div className="block__subtitle">[    中国企业培训十佳版权课程    ]</div>
          <div className="block__body lessons">
            <div className="lessons__desc">
              <div>2014年6月30日获得国家版权局登记证书，成为国内企业教练经典版权课程</div>
              <div>历经10年的迭代优化、持续改进，服务过企业1200+，服务学员100000+，为企业认证讲师300+，课程反馈平均分值9.5+</div>
              <div>中国500强前十中有九强选择行动教练；世界500强前十中有4强选择行动教练</div>
            </div>
            <div className="lessons__counts">
              <div className="lessons-count-item">
                <div className="lessons-count-item__num">100000+</div>
                <div className="lessons-count-item__name">服务学员</div>
                <div className="lessons-count-item__extra">单一教练课程服务学员100000+</div>
              </div>
              <div className="lessons-count-item">
                <div className="lessons-count-item__num">1000+</div>
                <div className="lessons-count-item__name">服务企业</div>
                <div className="lessons-count-item__extra"> 单一教练课程服务企业1000+</div>
              </div>
              <div className="lessons-count-item">
                <div className="lessons-count-item__num">9.5+</div>
                <div className="lessons-count-item__name">课程评分</div>
                <div className="lessons-count-item__extra">课程反馈平均分值9.5+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">课程认证收益</div>
          <div className="block__subtitle">[    八大成果产物    ]</div>
          <div className="block__body profit">
            <div className="profit__img">
              <img src={require('../../images/service_profit.png')} alt=""/>
            </div>
            <div className="profit__right">
              <div className="profit-item">
                <div className="profit-item__name">认证收益</div>
                <ul className="profit-item__list">
                  <li>国际行动教练协会认证教练</li>
                  <li>国际行动教练协会认证讲师</li>
                  <li>共识教练的3项原则</li>
                  <li>掌握教练的3大技术</li>
                  <li>应用教练的4步流程</li>
                  <li>解析教练的10个案例</li>
                </ul>
              </div>
              <div className="profit-item">
                <div className="profit-item__name">八大成果物</div>
                <ul className="profit-item__list">
                  <li>讲师PPT一套</li>
                  <li>教学用视频</li>
                  <li>注释版讲师手册</li>
                  <li>学员手册</li>
                  <li>季益祥金句五十句</li>
                  <li>教学挂图</li>
                  <li>考试题</li>
                  <li>企业教练资料包</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">报名联系</div>
          <div className="block__subtitle">[    扫码咨询 获取更多优惠    ]</div>
          <div className="block__body application">
            <div className="application__left"
              style={{backgroundImage: `url(${require('../../images/service_application_bg.png')})`}}
            >
              <div className="application__qrcode">
                <img src={require('../../images/service_application_qrcode.png')} alt="" />
                <div>张老师</div>
                <div>18202270832</div>
              </div>
            </div>
            <div className="application__right">
              <div className="application-item">
                <div className="application-item__name">教练认证</div>
                <div className="application-item__content">5500元/2天/人</div>
              </div>
              <div className="application-item">
                <div className="application-item__name">讲师认证</div>
                <div className="application-item__content">9800元/2天/人</div>
              </div>
              <div className="application__extra">※参与教练与讲师认证享受早鸟价12800元/4天/人</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoachCertification