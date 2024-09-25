import React, { useState } from 'react'

// type OnOffPropsType = {
//   state: boolean
// }

export const OnOff = () => {
  const [on, setOn] = useState(false)
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

  return (
    <div className='wrapper'>
      <div style={onStyle} onClick={() => setOn(true)}>on</div>
      <div style={offStyle} onClick={() => setOn(false)}>off</div>
      <div style={lampStyle}></div>
    </div>
  )
}
