import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"

type AffairsPropsType = {
  data: AffairType[]
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {
    props.setFilter('all')
  }
  const setHigh = () => {
    props.setFilter('high')
  }
  const setMiddle = () => {
    props.setFilter('middle')
  }
  const setLowHandle = () => {
    props.setFilter('low')
  }

  return (
    <div className={s.affairsBlock}>
      <div>
        <button onClick={setAll}>All</button>
        <button onClick={setHigh}>High</button>
        <button onClick={setMiddle}>Middle</button>
        <button onClick={setLowHandle}>Low</button>
      </div>
      <div>
        {mappedAffairs}
      </div>
    </div>
  )
}

export default Affairs
