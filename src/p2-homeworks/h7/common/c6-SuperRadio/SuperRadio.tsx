import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "../../HW7.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  console.log(restProps)
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    // onChange, onChangeOption
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
  }

  // map options with key
  const mappedOptions: any[] = options ? options.map((o, i) => (
    <label key={name + '-' + i}>
      <input
        className={s.superRadio}
        type="radio"
        name={name}
        value={o}
        onChange={onChangeCallback}
        checked={o === value}
      />
      {o}
    </label>
  )) : []

  return (
    <>
      {mappedOptions}
    </>
  )
}

export default SuperRadio
