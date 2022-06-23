import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "../h2/Affairs.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)

  const stop = () => {
    clearInterval(timerId)

  }
  const start = () => {
    stop()
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000)
    setTimerId(id)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }

  const stringTime = date.toLocaleTimeString()
  const stringDate = date.toLocaleDateString()

  return (
    <div>
      <div className={s.affair}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}
      >
        <div className={s.affairName}>{stringTime}
          {show && (
            <div>
              {stringDate}
            </div>
          )}
        </div>
      </div>

      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>
    </div>
  )
}

export default Clock
