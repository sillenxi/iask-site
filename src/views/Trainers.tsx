import React, { useState } from 'react'
import TrainerModal from './TrainerModal'
import './Trainers.scss'
import { trainers } from '../data/about'

function Trainers() {
  const [activeTrainer, setActiveTrainer] = useState<typeof trainers[0]>()
  return (
    <div className="container mx-auto block">
      <div className="block__head" data-content="coach">讲师教练</div>
      <div className="block__body">
        <div className="trainer-list">
        {
          trainers.map((trainer, index) => (
            <div className="trainer-item" key={index} onClick={() => setActiveTrainer(trainer)}>
              <div className="trainer-item__name">{trainer.name}</div>
              <div className="trainer-item__position">
              {
                trainer.position.map(item => <div>{item}</div>)
              }
              </div>
              <img className="trainer-item__photo" src={trainer.photo} alt={trainer.name} />
              <div className="trainer-item__dot" />
            </div>
          ))
        }
        </div>
      </div>
      { activeTrainer && <TrainerModal data={activeTrainer} onMaskClick={() => setActiveTrainer(undefined)} /> }
    </div>
  )
}

export default Trainers