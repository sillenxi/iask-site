import React, { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Home.scss'
import classNames from 'classnames'
import { serviceList } from '../data/services'

function Home() {
  const [currentServiceIdx, setCurrentServiceIdx] = useState(0)

  const projectList = [
    {
      id: 1,
      name: '领导力提升项目',
      desc: '集行动学习，教练技术，复盘技术等高端学习方法论为一身，融合案例教学，微课开发，学习设计等先进方法论为一体，帮企业解决实际问题，支持管理沉淀，提升培训影响力，最终解决业务问题，促进公司发展。',
      img: require('../images/project_demo.png'),
    },
    {
      id: 2,
      name: '领导力提升项目',
      desc: '集行动学习，教练技术，复盘技术等高端学习方法论为一身，融合案例教学，微课开发，学习设计等先进方法论为一体，帮企业解决实际问题，支持管理沉淀，提升培训影响力，最终解决业务问题，促进公司发展。',
      img: require('../images/project_demo.png'),
    },
    {
      id: 3,
      name: '领导力提升项目',
      desc: '集行动学习，教练技术，复盘技术等高端学习方法论为一身，融合案例教学，微课开发，学习设计等先进方法论为一体，帮企业解决实际问题，支持管理沉淀，提升培训影响力，最终解决业务问题，促进公司发展。',
      img: require('../images/project_demo.png'),
    },
  ]

  const [slideIndex, setSlideIndex] = useState(0)
  const sliderEl = useRef<Slider>(null)

  useEffect(() => {
    const slider = sliderEl.current
    if (slider) {
      slider.slickGoTo(slideIndex)
    }
  }, [slideIndex])

  const books = [
    { id: 1, name: '《行动教练：把员工带成干将》', author: '季益祥', img: require('../images/book_demo.png') },
    { id: 2, name: '《行动教练实践指南》', author: '季益祥 蔡明', img: require('../images/book_demo.png') },
  ]

  const [modalVideoVisible, setModalVideoVisible] = useState(false)
  const handleVideo = (action: string) => () => {
    switch (action) {
      case 'play':
        setModalVideoVisible(true)
        break
      case 'stop':
        setModalVideoVisible(false)
        break
      default:
    }
  }

  return (
    <div>
      <div className="banner">
        <h2 className="banner__title">激发个人与组织的无限潜能</h2>
        <div className="banner__desc">爱问（上海）管理咨询有限公司是一家专业的管理咨询和培训公司，致力于通过教练技术帮助中国企业提升领导力、培养人才、达成目标。</div>
      </div>
      <div className="block">
        <div className="block__head" data-content="SERVICE">产品服务</div>
        <div className="block__body">
          <div className="container mx-auto service">
            <div className="service__nav">
            {
              serviceList.map((service, index) => (
                <div className={classNames(['service-nav-item', { 'is-active': index === currentServiceIdx }])} key={index}
                  onMouseEnter={() => setCurrentServiceIdx(index)}
                >
                <div className="service-nav-item__name">{service.name}</div>
                  <div className="service-nav-item__arrow"></div>
                </div>
              ))
            }
            </div>
            <div className="service__content">
            {
              serviceList.map((service, sIndex) => (
                <ul className={classNames(["service-list", { 'is-active': currentServiceIdx === sIndex }, `count-${service.items.length}`])} key={sIndex}>
                {
                  service.items.map((item, index) => (
                    <li className="service-item" key={index}
                      style={{ backgroundImage: `url(${item.cover})` }}
                    >
                      <a className="service-item__content" href="/">
                        <div className="service-item__info">
                        <div className="service-item__name">{item.name}</div>
                          <div className="service-item__desc">{item.description}</div>
                        </div>
                      </a>
                    </li>
                  ))
                }
                </ul>
              ))
            }
            </div>
          </div>
        </div>
      </div>
      <div className="block project-wrap">
        <div className="block__head" data-content="PROJECT">学习项目</div>
        <div className="block__body">
          <Slider
            className="project-list"
            ref={sliderEl}
            centerMode={true}
            infinite={true}
            centerPadding="280px"
            slidesToShow={1}
            slidesToScroll={1}
            speed={500}
            nextArrow={<SlickArrow />}
            prevArrow={<SlickArrow />}
            beforeChange={(current, next) => setSlideIndex(next)}
          >
          {
            projectList.map(item => (
              <div key={item.id}>
                <div className="project-item">
                  <img className="project-item__img" src={item.img} alt={item.name} />
                  <div className="project-item__info">
                    <div className="project-item__name">{item.name}</div>
                    <div className="project-item__desc">{item.desc}</div>
                    <div className="project-item__arrow"></div>
                  </div>
                </div>
              </div>
            ))
          }
          </Slider>
          <div className="slider-paging">
            <div className="slider-arrow slider-arrow--last" onClick={() => setSlideIndex(slideIndex - 1)}></div>
            <progress className="slider-progress" value={(slideIndex + 1) % projectList.length || projectList.length} max={projectList.length}></progress>
            <div className="slider-arrow slider-arrow--next" onClick={() => setSlideIndex(slideIndex + 1)}></div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block__head" data-content="LEARNING">学习资源</div>
        <div className="block__body">
          <div className="container mx-auto learning-sources">
            <div className="source-item">
              <div className="source-item__icon"
                style={{backgroundImage: `url(${require('../images/source_publication.svg')})`}}
              ></div>
              <div className="source-item__name">出版物</div>
            </div>
            <div className="source-item">
              <div className="source-item__icon"
                style={{backgroundImage: `url(${require('../images/source_online.svg')})`}}
              ></div>
              <div className="source-item__name">在线学习</div>
            </div>
            <div className="source-item">
              <div className="source-item__icon"
                style={{backgroundImage: `url(${require('../images/source_lesson.svg')})`}}
              ></div>
              <div className="source-item__name">视频课程</div>
            </div>
          </div>
          <div className="books-wrap">
            <div className="container mx-auto books-container">
              <div className="company">爱问（上海）管理咨询有限公司是一家专业的管理咨询和培训公司，致力于通过教练技术帮助中国企业提升领导力、培养人才、达成目标。</div>
              <div className="book-list">
              {
                books.map(book => (
                  <div className="book-item" key={book.id}>
                    <img className="book-item__img" src={book.img} alt={book.name} />
                <div className="book-item__name">{book.name}</div>
                    <div className="book-item__author">{book.author} 著</div>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="block__head" data-content="STYLE">企业风采</div>
        <div className="block__body">
          <figure className="container video-wrap">
            <div className="video__poster"></div>
            <div className="video__desc">
              <div className="video__name">行动教练</div>
              <div className="video__slogan">专注教练十二年</div>
              <div className="video__arrow"></div>
            </div>
            <div className="video-btn__play" onClick={handleVideo('play')}></div>
          </figure>
          <div className={"modal-video " + (modalVideoVisible && 'visible')} onClick={handleVideo('stop')}>
            <div className="modal-video__content">
            {
              modalVideoVisible &&
              <video className="company__video"
                autoPlay
                controls
                preload="metadata" poster={require('../images/video_poster.png')}>
                <source src="http://www.coach.ac.cn/template/69/images/company.mp4" type="video/mp4" />
                <p>抱歉，您的浏览器不支持嵌入视频</p>
              </video>
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SlickArrow() {
  return (
    <div style={{display: 'none'}}></div>
  )
}

export default Home