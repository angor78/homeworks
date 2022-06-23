import React from 'react'
import Clock from './Clock'
import s from "../h2/Affairs.module.css";

function HW9() {
  return (
    <div className={s.affairsBlock}>
      <hr/>
      homeworks 9

      {/*should work (должно работать)*/}
      <Clock/>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeClock/>*/}
      <hr/>
    </div>
  )
}

export default HW9
