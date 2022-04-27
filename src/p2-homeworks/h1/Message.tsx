import React from 'react'
import s from './Message.module.css'

type MessageType = {
  avatar: string,
  name: string,
  message: string,
  time: string,
}

function Message(props: MessageType) {
  return (
    <div className={s.Message}>
      <div className={s.avatar}>
        <img src={props.avatar} alt="avatar"/>
      </div>
      <div className={s.content}>
        <div className={s.content_bubble}>
          <h4>{props.name}</h4>
          <p>{props.message}</p>
          <p>{props.time}</p>

        </div>

      </div>


    </div>
  )
}

export default Message
