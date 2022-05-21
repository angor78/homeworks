import React from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
  name: string
  setNameCallback: (e: React.FormEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

  return (
    <div className={s.someClass}>
      {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
      <div>
        <SuperInputText value={name} onChange={setNameCallback} onEnter={addUser} error={error}/>
      </div>
      <div>
        <SuperButton onClick={addUser} >add</SuperButton>
      </div>
      <span className={s.totalBlock}>Total: {totalUsers}</span>
    </div>
  )
}

export default Greeting
