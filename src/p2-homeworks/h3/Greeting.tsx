import React from 'react'
import s from './Greeting.module.css'

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
  const inputClass = (name === '') ? s.error : s.notErrors

  return (
    <div className={s.someClass}>
      <input value={name} onChange={setNameCallback} className={inputClass}/>
      <button onClick={addUser}>add</button>
      <span className={s.errorTitle}>{error}</span>
      <span>Total: {totalUsers}</span>
    </div>
  )
}

export default Greeting
