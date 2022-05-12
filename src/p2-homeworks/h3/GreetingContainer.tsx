import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('Enter some name please!')

  const setNameCallback = (e: React.FormEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    setName(value)
  }
  const addUser = () => {
    if (name === '') {
      setError('Error, please enter some name!')
      return undefined
    } else {
      alert(`Hello ${name}!`)
      addUserCallback(name)
      setError('Enter some name please!')
      setName('')
    }

  }

  const totalUsers = users.length

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
