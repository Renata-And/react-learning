
type OnOffPropsType = {
  setOn: (value: boolean) => void
  on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
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
    backgroundColor: props.on ? '#1fb401' : '#fff'
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
    backgroundColor: props.on ? '#fff' : '#ad0000'
  }

  const lampStyle = {
    display: 'inline-block',
    width: '30px',
    height: '30px',
    border: '2px solid #cfcfcf',
    borderRadius: '50%',
    backgroundColor: props.on ? '#1fb401' : '#ad0000'
  }

  return (
    <div style={wrapperStyle}>
      <div style={onStyle} onClick={() => props.setOn(true)}>on</div>
      <div style={offStyle} onClick={() => props.setOn(false)}>off</div>
      <div style={lampStyle}></div>
    </div>
  )
}
