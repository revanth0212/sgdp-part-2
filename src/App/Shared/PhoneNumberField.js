import React from 'react'
import TextField from './TextField'

export default props => (
  <div className="row">
    <div className="col-3" style={{ marginLeft: '0px' }}>
      <TextField {...props.phoneNumberCodeProps} label="Country Code" />
    </div>
    <div className="col-9" style={{ marginLeft: '10px' }}>
      <TextField {...props.phoneNumberProps} label="Phone Number" />
    </div>
  </div>
)
