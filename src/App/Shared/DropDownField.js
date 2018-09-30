import React from 'react'
import { Dropdown as OriginalDropdown } from 'office-ui-fabric-react/lib/Dropdown'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'

import FieldConstants from '../Constants/Fields'

const Dropdown = ({ configuration, name = '', ...otherProps }) => (
  <OriginalDropdown name={name} {...FieldConstants[name]} {...configuration} {...otherProps} />
)

const mapStateToProps = (state, { path = [] }) => ({
  configuration: pathOr({}, path, state)
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)
