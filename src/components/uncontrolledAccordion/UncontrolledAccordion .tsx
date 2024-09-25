import React, { useState } from 'react'

type AccordionPropsType = {
  titleValue: string
}

type AccordionTitlePropsType = {
  title: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      <button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
      {!collapsed && <AccordionBody />}
    </div>
  )
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h3>{props.title}</h3>
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
