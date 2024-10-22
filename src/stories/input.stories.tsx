import { action } from '@storybook/addon-actions';
import { ChangeEvent, useRef, useState } from 'react';

export default {
  title: 'input',
}

export const UncontrolledInput = () => <input />

export const TrackingValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('');
  return <><input onChange={(e) => setValue(e.currentTarget.value)} /> - {value}</>
}

export const GetValueOfUncontrolledInputOnButtonClick = () => {
  const [value, setValue] = useState('');
  const refInput = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = refInput.current as HTMLInputElement;
    setValue(el.value)
  }
  return <>
    <input ref={refInput} />
    <button onClick={save}>save</button>
    - {value}
  </>
}

export const ControlledCheckbox = () => {
  const [value, setValue] = useState(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.checked)
  }
  return <input type='checkbox' checked={value} onChange={onChange} />
}

export const ControlledSelect = () => {
  const [selectValue, setSelectValue] = useState<string | undefined>('0');
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.currentTarget.value)
  }

  return <select value={selectValue} onChange={onChange}>
    <option value={'0'}>none</option>
    <option value={'1'}>Ufa</option>
    <option value={'2'}>Moscow</option>
    <option value={'3'}>Tver</option>
  </select>
}


export const ControlledInputWithFixedValue = () => <input value={'hello'} />