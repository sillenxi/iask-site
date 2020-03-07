import React, { useState, useImperativeHandle } from 'react'

interface IRef {
  play(): void
}

interface IProps {
  source: string
  children?: React.ReactNode
  poster?: string
  title?: string
  desc?: string
}

const VideoModal = React.forwardRef<IRef, IProps>((props, ref) => {
  const [modalVideoVisible, setModalVideoVisible] = useState(false);

  type TVideoAction = 'play' | 'stop'
  const handleVideo = (action: TVideoAction) => () => {
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

  useImperativeHandle(ref, () => ({
    play: () => {
      handleVideo('play')()
    }
  }))

  return (
    <>
      {
        props.children || (
          <figure className="container video-wrap">
            <div className="video__poster" style={{ backgroundImage: `url(${props.poster})` }}></div>
            <div className="video__desc">
              <div className="video__name">{props.title}</div>
              <div className="video__slogan">{props.desc}</div>
              <div className="video__arrow"></div>
            </div>
            <div className="video-btn__play" onClick={handleVideo('play')}></div>
          </figure>
        )
      }
      <div className={"modal-video " + (modalVideoVisible && 'visible')} onClick={handleVideo('stop')}>
        <div className="modal-video__content">
        {
          modalVideoVisible &&
          <video className="company__video"
            autoPlay
            controls
            preload="metadata"
            { ...(props.poster ? { poster: props.poster } : {})}
          >
            <source src={props.source} type="video/mp4" />
            <p>抱歉，您的浏览器不支持嵌入视频</p>
          </video>
        }
        </div>
      </div>
    </>
  )
})

export default VideoModal