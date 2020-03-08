import React from 'react'
import VideoModal from '../../../components/VideoModal'
import './index.scss'

function SmartCoach() {
  const introList = [
    {
      icon: require('../../../images/ai_method.svg'),
      name: '方法',
      desc: '运用AI＋教练对话技术\r\n持续跟进员工目标完成情况'
    },
    {
      icon: require('../../../images/ai_skill.svg'),
      name: '技术',
      desc: '自然语言处理（NLP）、语音识别、语义识别及深度学习技术'
    },
    {
      icon: require('../../../images/ai_service.svg'),
      name: '服务',
      desc: '提供周报、个人报告、团队报告'
    },
    {
      icon: require('../../../images/ai_fee.svg'),
      name: '费用',
      desc: '198/人/月 相当于专业教练（PCC）费用的二十分之一'
    }
  ]

  const worthList = [
    {
      bg: require('../../../images/ai_worth_1.png'),
      title: '目标及关键结果',
      desc: '确保员工专注于正确的目标'
    },
    {
      bg: require('../../../images/ai_worth_2.png'),
      title: '及时反馈',
      desc: '适时的建设性反馈有助于员工不断进步'
    },
    {
      bg: require('../../../images/ai_worth_3.png'),
      title: '持续简洁的对话',
      desc: '对企业和员工无负担的便利工具'
    },
    {
      bg: require('../../../images/ai_worth_4.png'),
      title: '调整员工队伍',
      desc: '确保团队成员以正确的方向前进'
    }
  ]

  return (
    <div>
      <div className="banner">
        <h2 className="text-4xl md:text-5xl banner__title">智能教练服务</h2>
      </div>
      <div className="container mx-auto breadcrumb">
        <span className="breadcrumb-item">首页</span>
        <span className="breadcrumb-item">产品服务</span>
        <span className="breadcrumb-item">在线服务</span>
      </div>
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">什么是智能教练</div>
          <div className="block__subtitle">[    专注训后转化 促进目标达成    ]</div>
          <div className="block__desc">很牛智能教练是一款促进目标达成的人工智能产品，基于AI技术和企业教练技术
            <br/>通过每周一对一的教练辅导，帮助员工更好的达成业务目标，激发员工主动思考，提升独立解决问题的能力
            <br/>进一步提升组织的目标达成率
          </div>
          <div className="intro-list">
          {
            introList.map((item, index) => (
              <div className="intro-item" key={index}>
                <img className="intro-item__icon" src={item.icon} alt=""/>
                <div className="intro-item__name">{item.name}</div>
                <div className="intro-item__desc">{item.desc}</div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto text-center">
          <div className="block__title">使用价值</div>
          <div className="block__subtitle">[    性价比最高的绩效管理工具    ]</div>
          <div className="mx-auto worth-list">
          {
            worthList.map((item, index) => (
              <div className="text-left worth-item" key={index}>
                <img className="worth-item__bg" src={item.bg} alt={item.title} />
                <div className="worth-item__content">
                  <div className="worth-item__title">{item.title}</div>
                  <div className="worth-item__desc">{item.desc}</div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto">
          <div className="text-center block__title">使用流程</div>
          <div className="text-center block__subtitle">[    性价比最高的绩效管理工具    ]</div>
          <div className="block__content flow">
            <img className="flow__img" src={require('../../../images/ai_flow.png')} alt="使用流程" />
          </div>
        </div>
      </div>
      <br />
      <div className="block publicity-video">
        <div className="container mx-auto">
          <div className="text-center block__title">宣传视频</div>
          <div className="text-center block__subtitle">[    专注训后转化 促进目标达成    ]</div>
          <div className="block__content">
            <VideoModal
              source="http://www.coach.ac.cn/template/69/images/ff87716782616a93.mp4"
              poster={require('../../../images/ai_video_poster.png')}
              title="轻松实现小目标"
              desc="致力于帮助企业解决培训落地难的问题"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartCoach
