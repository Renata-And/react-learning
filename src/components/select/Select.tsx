import { useState, KeyboardEvent, useEffect } from "react"
import s from './Select.module.css'

type ItemType = {
  title: string
  value: any
}

type SelectPropsType = {
  value?: any
  onChange: (value: any) => void
  items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
  const [active, setActive] = useState(false);
  const [hoveredItemValue, setHoveredItemValue] = useState(props.value);

  const selectedItem = props.items.find(item => item.value === props.value);
  const hoveredItem = props.items.find(item => item.value === hoveredItemValue);

  const toggleItems = () => setActive(!active);
  const onItemClick = (value: any) => {
    props.onChange(value);
    toggleItems();
  };

  useEffect(() => {
    setHoveredItemValue(props.value)
  }, [props.value]);

  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    // for (let i = 1; i <= props.items.length; i++) {
    //   if (hoveredItemValue === i.toString()) {
    //     if (e.key === 'ArrowDown') {
    //       if (i === props.items.length) {
    //         setHoveredItemValue('1');
    //       } else {
    //         setHoveredItemValue((i + 1).toString());
    //       }
    //     } else if (e.key === 'ArrowUp') {
    //       if (i === 1) {
    //         setHoveredItemValue(props.items.length.toString());
    //       } else {
    //         setHoveredItemValue((i - 1).toString());
    //       }
    //     }
    //   }
    // }
    // if (e.key === 'Enter') {
    //   props.onChange(hoveredItemValue);
    //   toggleItems();
    // }

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredItemValue) {
          const pretendentElement = e.key === 'ArrowDown'
            ? props.items[i + 1]
            : props.items[i - 1];

          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            return;;
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value);
      }
    }
    if (e.key === 'Escape' || e.key === 'Enter') {
      setActive(false)
    }
  }

  return (
    <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
      <span className={s.main} onClick={toggleItems}>
        {selectedItem && selectedItem.title}
      </span>
      {active && <div className={s.items}>
        {props.items.map(item => <div
          key={item.value}
          className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
          onClick={() => onItemClick(item.value)}
          onMouseEnter={() => setHoveredItemValue(item.value)}
        >{item.title}</div>)}
      </div>}
    </div>
  )
}

// export const UpdateSelect = (props: UpdateSelectPropsType) => {
//   const currentValue = props.items.find(item => item.value === props.value)
//   const [isOpen, setIsOpen] = useState(false);
//   const [value, setValue] = useState<string | undefined | null>(currentValue?.title)

//   const onClickItemHandler = (e: MouseEvent<HTMLLIElement>) => {
//     setIsOpen(false)
//     setValue(e.currentTarget.textContent)
//   }

//   const onClickHandler = () => {
//     setIsOpen(true)
//   }

//   return (
//     <div>
//       <div onClick={onClickHandler}>{value ? value : 'Select option'}</div>
//       {isOpen && <ul>{props.items.map(item => <li key={item.value} onClick={onClickItemHandler}>{item.title}</li>)}</ul>}
//     </div>
//   )
// }


