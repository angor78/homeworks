import React from 'react'
import s from './Error404.module.css'

function Error404() {
  return (
    <div className={s.body}>
      <div className={s.content}>
        <span>Oops...Error 404!</span>
        <span>This page not found.</span>
      </div>
      <a href="/">Redirect to Home page...</a>
    </div>

  )
}

export default Error404
