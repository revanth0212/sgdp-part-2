import React from 'react'
import { TextField as OriginalTextField } from 'office-ui-fabric-react/lib/TextField'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'

import FieldConstants from '../Constants/Fields'

const TextField = ({ configuration, name = '', ...otherProps }) => (
  <OriginalTextField name={name} {...FieldConstants[name]} {...configuration} {...otherProps} />
)

const mapStateToProps = (state, { path = [] }) => ({
  configuration: pathOr({}, path, state)
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextField)
