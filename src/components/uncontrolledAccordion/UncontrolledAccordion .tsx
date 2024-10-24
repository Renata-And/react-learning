import React, { useReducer, useState } from 'react'
import { reducer } from './reducer'

type AccordionPropsType = {
  titleValue: string
}

type AccordionTitlePropsType = {
  title: string
  value: boolean
  setCollapsed: (value: boolean) => void
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const UncontrolledAccordion = (props: AccordionPropsType) => {
  // const [collapsed, setCollapsed] = useState(false)
  const [collapsed, dispatch] = useReducer(reducer, { collapsed: false })

  return (
    <div>
      <AccordionTitle title={props.titleValue} setCollapsed={() => dispatch({ type: TOGGLE_COLLAPSED })} value={collapsed.collapsed} />
      {collapsed.collapsed && <AccordionBody />}
    </div>
  )
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h3 onClick={() => props.setCollapsed(!props.value)}>{props.title}</h3>
}

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
