import React from 'react'

import TextField from '../Shared/TextField'
import DropDownField from '../Shared/DropDownField'
import PhoneNumberField from '../Shared/PhoneNumberField'

export default () => (
  <div>
    <h3 style={{ paddingBottom: '2%', textAlign: 'center' }}>Registration Page</h3>
    <div className="row">
      <div>
        <div className="col-4">
          <TextField label="First Name" />
        </div>
        <div className="col-4">
          <TextField label="Middle Name" />
        </div>
        <div className="col-4">
          <TextField label="Last Name" />
        </div>
      </div>
      <div className="row">
        <div>
          <div className="col-10">
            <TextField label="Address" />
          </div>
          <div className="col-2">
            <TextField label="Zip Code" />
          </div>
        </div>
      </div>
      <div>
        <div className="col-4">
          <TextField label="City" />
        </div>
        <div className="col-4">
          <DropDownField label="State" />
        </div>
        <div className="col-4">
          <DropDownField label="Country" />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <PhoneNumberField />
        </div>
      </div>
    </div>
  </div>
)
