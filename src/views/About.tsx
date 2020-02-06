import React, { useRef, useState, useEffect } from 'react'
import { Route, NavLink } from 'react-router-dom'
import Slider from 'react-slick'
import Trainers from './Trainers'
import Partners from './Partners'
import Contact from './Contact'
import './About.scss'
import { cultures as cultureList } from '../data/about'

function About() {
  const sliderCultureOneRef = useRef<Slider>(null)
  const sliderCultureTwoRef = useRef<Slider>(null)
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const sliderOne = sliderCultureOneRef.current
    sliderOne && sliderOne.slickGoTo(slideIndex)
    const sliderTwo = sliderCultureTwoRef.current
    sliderTwo && sliderTwo.slickGoTo(slideIndex)
  }, [slideIndex])

  return (
    <div>
      <div className="banner banner-about">
        <h2 className="text-4xl md:text-5xl banner__title">关于我们</h2>
        <div className="hidden md:block banner__desc">爱问（上海）管理咨询有限公司是一家专业的管理咨询和培训公司，致力于通过教练技术帮助中国企业提升领导力、培养人才、达成目标。</div>
      </div>
      <div className="nav-menu-wrap">
        <nav className="container mx-auto nav-menu">
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/about" exact>公司简介</NavLink>
          </div>
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/about/trainers">讲师教练</NavLink>
          </div>
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" to="/about/trainers">企业荣誉</NavLink>
          </div>
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/about/partners">尊贵客户</NavLink>
          </div>
          <div className="nav-menu-item">
            <NavLink className="nav-menu-item__txt" activeClassName="is-active" to="/about/contact">联系我们</NavLink>
          </div>
        </nav>
      </div>
      <Route path="/about" exact>
        <div id="intro" className="container mx-auto block">
          <div className="block__head" data-content="Introduction">公司简介</div>
          <div className="block__body">
            <p className="company-intro">爱问（上海）管理咨询有限公司成立于2004年，15年专注于组织人才培养与发展领域<br />
  形成了助力企业人才战略发展的差异化优势，爱问公司格守“专注，诚信，热爱”的价值观，践行“专注行为转变，激发组织潜能”的使命<br />
  以全球前瞻的理念、专业一流的团队为企业提供体系咨询、面授培训、学习项目等形式的体化人才发展解决方案</p>
            <div className="count-list">
              <div className="count-item">
                <div className="count-item__num">2000+</div>
                <div className="count-item__title">内训、公益论坛、峰会</div>
                <div className="count-item__desc">参与2000余场内训、公益论坛、峰会</div>
              </div>
              <div className="count-item">
                <div className="count-item__num">1000+</div>
                <div className="count-item__title">企业客户</div>
                <div className="count-item__desc">专注教练10余年，服务了1000家企业客户</div>
              </div>
              <div className="count-item">
                <div className="count-item__num">300+</div>
                <div className="count-item__title">认证讲师</div>
                <div className="count-item__desc">独创行动教练双证班，培养认证讲师300多位</div>
              </div>
            </div>
          </div>
        </div>
        <div id="culture" className="container mx-auto block">
          <div className="block__head" data-content="culture">企业文化</div>
          <div className="block__body">
            <div className="culture-wrap">
              <Slider className="culture__vision"
                ref={sliderCultureOneRef}
                arrows={false}
                fade={true}
                adaptiveHeight={false}
              >
              {
                cultureList.map((culture, index) => (
                  <div className="vision" key={index}>
                    <div className="vision__head">{culture.head}</div>
                    <div className="vision__title">{culture.title}</div>
                    <div className="vision__desc">{culture.description}</div>
                  </div>
                ))
              }
              </Slider>
              <div className="culture__carousel">
                <Slider
                  ref={sliderCultureTwoRef}
                  arrows={false}
                  beforeChange={(current, next) => setSlideIndex(next)}
                >
                {
                  cultureList.map((culture, index) => (
                    <div className="vision__cover-wrap" key={index}>
                      <img className="vision__cover" src={culture.cover} alt={culture.head} />
                    </div>
                  ))
                }
                </Slider>
                <div className="slider-paging">
                  <div className="slider-arrow slider-arrow--last" onClick={() => setSlideIndex(slideIndex - 1)}></div>
                  <progress className="slider-progress" max={cultureList.length} value={(slideIndex + 1) % cultureList.length || cultureList.length}></progress>
                  <div className="slider-arrow slider-arrow--next" onClick={() => setSlideIndex(slideIndex + 1)}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Trainers />
        <Partners />
        <Contact />
      </Route>
      <Route path="/about/trainers"><Trainers /></Route>
      <Route path="/about/partners"><Partners /></Route>
      <Route path="/about/contact"><Contact /></Route>
    </div>
  )
}

export default About