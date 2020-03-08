import React, { useEffect } from 'react'
import { withRouter, useLocation } from 'react-router-dom'

interface IProps {

}

const ScrollToTop: React.FC<IProps> = (props) => {

  const { pathname } = useLocation()
  useEffect(() => {
    try {
      const scrollY = sessionStorage.getItem(pathname)
      window.scrollTo(0, scrollY ? Number(scrollY) : 0)
    } catch (err) {
      console.error(err)
      window.scrollTo(0, 0)
    }
    // return () => {
    //   try {
    //     sessionStorage.setItem(pathname, String(window.scrollY))
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }
  }, [pathname])

  return (
    <>
      { props.children }
    </>
  )
}

export default withRouter(ScrollToTop)