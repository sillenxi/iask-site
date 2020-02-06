import React from 'react'
import './TrainerModal.scss'
import { trainers } from '../data/about'

interface Props {
  data: typeof trainers[0],
  onMaskClick?: Function
}

function TrainerModal(props: Props) {
  const trainer = props.data

  const handleMaskClick = () => {
    props.onMaskClick && props.onMaskClick()
  }

  return (
    <div className="trainer-modal" onClick={handleMaskClick}>
      <div className="trainer">
        <div className="trainer__photo">
          <img src={trainer.photo} alt={trainer.name}/>
        </div>
        <div className="trainer__right">
          <div className="trainer__name">{trainer.name}</div>
          <div className="trainer__position">
          {
            trainer.position.map(item => <div>{item}</div>)
          }
          </div>
          <div className="trainer-tabs">
            <div className="trainer-tabs__titles">
              <div className="trainer-tabs__title active">工作经历</div>
              <div className="trainer-tabs__title">授课风格</div>
              <div className="trainer-tabs__title">擅长课程</div>
            </div>
            <div className="trainer-tabs__content">
              <div>曾就职阿斯利康等世界500强企业，拥有浙江大学管理硕士学位。现任上海爱问网络科技有限公司董事长、《培训》杂志常务理事、中国人才发展社群理事。著有书籍《行动教练实践指南》及《行动教练——把员工带成干将》。<br/>
作为国内知名领导力专家，具有6年跨国公司工作管理经验，23年民营企业工作管理经验，在企业运营管理、战略定位、员工能力培养和激发、教练式管理文化推进等方面具有丰富的理论和实战经验。连续三年成为工总行人力资源部举办的《各级管理者员工管理班》的指定领导力讲师，行动教练近三年来走过了工行的26个省，80个地区，服务了10000+人。<br/>
拥有20年培训经验，10年教练经验，每年主讲100多场领导力教练课程，每年一对一教练时间超过200小时，是国内授课天数最多、客户基础最大、口碑最好的教练讲师之一。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerModal