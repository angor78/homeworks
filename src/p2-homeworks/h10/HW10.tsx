import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from "../h2/Affairs.module.css";



function HW10() {
  let dispatch = useDispatch()
  let loading = useSelector<AppStoreType, boolean>((state) => state.loading)
  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 2000)
    console.log('loading...')
  };

  return (
    <div>
      <hr/>
      homeworks 10
      <div className={s.affairsBlock}>
        {loading
          ? (
            <div>
              <img  width={'100px'} height={'20px'} src="https://art.pixilart.com/b5a664e4b71821f.gif" alt="крутилка..."/>
            </div>

          ) : (
            <div>
              <SuperButton onClick={setLoading}>set loading...</SuperButton>
            </div>
          )
        }
      </div>


      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
