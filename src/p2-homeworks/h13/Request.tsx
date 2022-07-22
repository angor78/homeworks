import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from "../h2/Affairs.module.css";
import {RequestsAPI} from "./requests-api";

export const Request = () => {
  const [response, setResponse] = useState('response')
  const [checked, setChecked] = useState(false)
  const request = () => {
    RequestsAPI.addSuccess(checked)
      .then(res => {
        setResponse(res.data.errorText)
      })
      .catch(error=>{
         let message =  {...error}
        setResponse(message.response ? message.response.data.errorText : message.message)
      })
  }

  return (
        <div className={s.affair}>
          <div className={s.affairName}>
            <SuperCheckbox onChange={() => setChecked(!checked)}/>
            <div>{JSON.stringify(response)}</div>
          </div>
          <SuperButton red onClick={request}>Request</SuperButton>
        </div>
  )
}