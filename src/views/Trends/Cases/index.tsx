import React from 'react';
import './index.scss';

function Cases() {
  const caseList = [
    {
      bg: require('../../../images/cases_item_1.png'),
      title: '领导力提升项目',
      desc: '刚需：教练技术已成为领导者的必备技能；简单：课程结构清晰，体系简单，落地工具现场演练，易于掌握，确保学员两天时间掌握核心教练技能；实战：实施流程清晰，可复制性高；有效：及时的在线辅导和集中辅导，逐级递进的实战任务'
    },
    {
      bg: require('../../../images/cases_item_2.png'),
      title: '基于定制的内部讲师认证项目',
      desc: '课程成熟，得到广泛的认可：已在近千家企业成功实践，产品迭代36次；教练是组织长期发展的刚需：快速变化中的组织，需要教练来激发组织应变弹性；标准化、模块化的课程易于转化复制：完整的讲师手册、精心设计的表单步骤，内训师易上手。'
    },
    {
      bg: require('../../../images/cases_item_3.png'),
      title: '教练型领导力项目',
      desc: '集行动学习，教练技术，复盘技术等高端学习方法论为一身，融合案例教学，微课开发，学习设计等先进方法论为一体，帮企业解决实际问题，支持管理沉淀，提升培训影响力，最终解决业务问题，促进公司发展。'
    },
    {
      bg: require('../../../images/cases_item_4.png'),
      title: '导师制项目',
      desc: '导师制项目从“选育用留，评估管理，运营支持”3大系统提供导师制整体解决方案，帮助企业顺利实施导师制，正确理解导师的角色，提升导师能力，灵活运用多种带教工具，培养高潜人才，帮助组织以越来越高的水平提高绩效质量，形成人才梯队。'
    }
  ];
  return (
    <div className="container mx-auto">
    {
      caseList.map((item, index) => (
        <div className="cases-item" key={index}>
          <img className="cases-item__bg" src={item.bg} alt={item.title} />
          <div className="cases-item__content">
            <div className="cases-item__title">{item.title}</div>
            <div className="cases-item__desc">{item.desc}</div>
            <div className="cases-item__arrow"></div>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default Cases;