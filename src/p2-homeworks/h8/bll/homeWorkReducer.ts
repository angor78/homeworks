import {UserType} from "../HW8";

type ActionType = {
  type: 'sort' | 'check'
  payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
  switch (action.type) {
    case 'sort': {
      let newState = [...state]
      if (action.payload === 'up') {
        return newState.sort((a, b) => a.age - b.age)
      }
      return newState.sort((a, b) => b.age - a.age)
    }
    case 'check': {
      let newState = [...state]
      return newState.filter(el => el.age >= action.payload)
    }
    default:
      return state
  }
}