import React from 'react'
import './Lessons.scss'
import { manager as lessonManager } from '../data/lessons'

function Lessons() {

  return (
    <div>
      <div className="container mx-auto block">
        <div className="block__head" data-content="Training">培训课程</div>
        <div className="block__body">
        {
          lessonManager.map((lesson, index) => (
            <div className="chapter-item" key={index}>
              <div className="chapter-item__left">
                <div className="chapter-item__left-content">
                  <div className="chapter-item__title">{lesson.title}</div>
                  <div className="chapter-item__sections">
                  {
                    lesson.sections.map((section, sIndex) => (
                      <div className="chapter-item__section" key={`${index}-${sIndex}`}>{section}</div>
                    ))
                  }
                  </div>
                </div>
              </div>
              <div className="chapter-item__right">
                <img className="chapter-item__cover" src={lesson.cover} alt={lesson.title} />
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Lessons