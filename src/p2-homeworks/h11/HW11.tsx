import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h2/Affairs.module.css";

function HW11() {
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(100)

  function onChangeRange(value: [number, number]) {
    setValue1(value[0])
    setValue2(value[1])
  }

  return (
    <div>
      <hr/>
      homeworks 11
      <div className={s.affairsBlock}>
        {/*should work (должно работать)*/}
        <div>
          <span>{value1}</span>
          <SuperRange min={value1} max={value2} onChangeRange={onChangeRange}
            // сделать так чтоб value1 изменялось
          />
        </div>

        <div>
          <span>{value1}</span>
          <SuperDoubleRange onChangeRange={onChangeRange} min={value1} max={value2}
            // сделать так чтоб value1 и value2 изменялось
          />
          <span>{value2}</span>
        </div>
      </div>
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
