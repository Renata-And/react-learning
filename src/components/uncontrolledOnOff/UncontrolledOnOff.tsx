import React, { useState } from 'react'

type OnOffPropsType = {
  onChange: (on: boolean) => void
  defaultOn?: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {
  const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

  const wrapperStyle = {
    display: 'flex',
    gap: '5px'
  }
  const onStyle = {
    width: '30px',
    height: '20px',
    padding: '5px',
    border: '2px solid #cfcfcf',
    borderRadius: '5px',
    lineHeight: '20px',
    color: '#cfcfcf',
    fontFamily: 'Helvetica, sans - serif',
    fontWeight: '700',
    backgroundColor: on ? '#1fb401' : '#fff'
  }

  const offStyle = {
    width: '30px',
    height: '20px',
    padding: '5px',
    border: '2px solid #cfcfcf',
    borderRadius: '5px',
    lineHeight: '20px',
    color: '#cfcfcf',
    fontFamily: 'Helvetica, sans - serif',
    fontWeight: '700',
    backgroundColor: on ? '#fff' : '#ad0000'
  }

  const lampStyle = {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    border: '2px solid #cfcfcf',
    borderRadius: '50%',
    backgroundColor: on ? '#1fb401' : '#ad0000'
  }

  const onClicked = () => {
    setOn(true);
    props.onChange(true);
  }

  const offClicked = () => {
    setOn(false);
    props.onChange(false);
  }

  return (
    <div style={wrapperStyle}>
      <div style={onStyle} onClick={onClicked}>on</div>
      <div style={offStyle} onClick={offClicked}>off</div>
      <div style={lampStyle}></div>
    </div>
  )
}
