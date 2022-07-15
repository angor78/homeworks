import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some', 'blue'];

function HW12() {
  // const theme = 'some'; // useSelector
  const theme = useSelector<AppStoreType, string>(state => state.theme)
  const dispatch = useDispatch()

  const onChangeCallback = (value: string) => {
    dispatch(changeThemeC(value))
  }
  // useDispatch, onChangeCallback

  return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + '-text']}>
                homeworks 12
            </span>

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}
      <SuperSelect options={themes}
                   value={theme}
                   onChangeOption={onChangeCallback}/>
      <hr/>
    </div>
  );
}

export default HW12;
