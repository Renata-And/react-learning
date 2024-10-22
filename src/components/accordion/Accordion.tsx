import React from 'react'

type ItemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  setCollapsed: (value: boolean) => void
  items: ItemType[]
  onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={props.setCollapsed} value={props.collapsed} />
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  value: boolean
  onClick: (value: boolean) => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h3 onClick={() => props.onClick(!props.value)}>{props.title}</h3>
}

type AccordionBodyType = {
  items: ItemType[]
  onClick: (value: any) => void
}

const AccordionBody = (props: AccordionBodyType) => {
  return (
    <ul>
      {
        props.items.map((item, index) => <li key={index} onClick={() => props.onClick(item.value)}>{item.title}</li>)
      }
    </ul>
  )
}
