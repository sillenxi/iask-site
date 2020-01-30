import React from 'react'
import './Lessons.scss'

function Lessons() {
  const lessons = [
    {
      title: '第一章 管理自我',
      sections: [
        '结构思考：逻辑清晰有力表达',
        '卓有成效：管理者的五项修炼'
      ]
    },
    {
      title: '第二章 管理他人',
      sections: [
        '辅导下属：教练型管理者',
        '向上管理：辅佐上司的报联商'
      ]
    },
    {
      title: '第三章 管理部门',
      sections: [
        '难点突破：问题分析解决',
        '难点突破：问题分析解决'
      ]
    },
    {
      title: '第四章 管理业务',
      sections: [
        '绩效改进：资源不变业绩翻倍',
        '绩效达成：OKR敏捷目标管理'
      ]
    },
    {
      title: '第五章 管理组织',
      sections: [
        '组织变革：打通企业变革',
        '文化建设：做实企业文化'
      ]
    },
    {
      title: '进阶课程',
      sections: [
        '行动教练之从胜任到卓越'
      ]
    }
  ]

  return (
    <div>
      <div className="max-width block">
        <div className="block__head" data-content="Training">培训课程</div>
        <div className="block__body">
        {
          lessons.map((lesson, index) => (
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
                <img className="chapter-item__cover" src="" alt={lesson.title} />
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