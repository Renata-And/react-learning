import { useState, MouseEvent } from "react"
import './select.module.css'

type ItemType = {
  title: string
  value: any
}

type UpdateSelectPropsType = {
  value: any
  onChange: (value: any) => void
  items: ItemType[]
}

export const UpdateSelect = (props: UpdateSelectPropsType) => {
  const currentValue = props.items.find(item => item.value === props.value)
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | undefined | null>(currentValue?.title)

  const onClickItemHandler = (e: MouseEvent<HTMLLIElement>) => {
    setIsOpen(false)
    setValue(e.currentTarget.textContent)
  }

  const onClickHandler = () => {
    setIsOpen(true)
  }

  return (
    <div>
      <div onClick={onClickHandler}>{value ? value : 'Select option'}</div>
      {isOpen && <ul>{props.items.map(item => <li key={item.value} onClick={onClickItemHandler}>{item.title}</li>)}</ul>}
    </div>
  )
}


// <div>
//   {
//     edit
//       ? (<select value={value} onBlur={() => setEdit(false)} onChange={(e) => { setValue(e.currentTarget.value) }}>
//         {props.items.map(item => (<option key={item.value} value={item.value}>{item.title}</option>))}
//       </select>)
//       : (<div onDoubleClick={onDoubleClickHandler}>{props.items.find(item => item.value === value)?.title}</div>)
//   }
// </div>