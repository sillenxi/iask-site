import React, { useState } from 'react'
import './Trainers.scss'

function Trainers() {
  const [trainers] = useState([
    { name: '季益祥', position: '行动教练创始人' },
    { name: '蔡明', position: '行动教练课程创始人' },
    { name: '高煜东', position: '国际行动教练协会认证讲师' },
    { name: '金律言', position: 'WIAC认证讲师' },
    { name: '戴维', position: '行动教练核心讲师' },
    { name: '朱莎', position: 'WIAC上海分会理事' },
    { name: '徐华', position: '行动教练联合创始人' },
    { name: '吴静艳', position: '国际行动教练协会认证讲师' },
    { name: '肖广', position: '银行绩效提升专家' },
  ])

  return (
    <div className="container mx-auto block">
      <div className="block__head" data-content="coach">讲师教练</div>
      <div className="block__body">
        <div className="trainer-list">
        {
          trainers.map((trainer, index) => (
            <div className="trainer-item" key={index}>
              <div className="trainer-item__name">{trainer.name}</div>
              <div className="trainer-item__position">{trainer.position}</div>
              <img className="trainer-item__photo" src="" alt={trainer.name} />
              <div className="trainer-item__dot" />
            </div>
          ))
        }
        </div>
        <div className="pagination">
          <div className="pagination__last"></div>
          <div className="pagination__nums">
            <div className="pagination__nums-item">1</div>
            <div className="pagination__nums__rest">...</div>
          </div>
          <div className="pagination__next"></div>
        </div>
      </div>
    </div>
  )
}

export default Trainers