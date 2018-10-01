import React from 'react'
import { Dropdown as OriginalDropdown } from 'office-ui-fabric-react/lib/Dropdown'
import { connect } from 'react-redux'
import { pathOr, compose, map, prop, values } from 'ramda'

import { updateFieldValue } from '../Actions/Fields'
import FieldConstants from '../Constants/Fields'

const onFieldChangeHandler = (updateFieldValue, onChange) => event => {
  const value = pathOr('', ['target', 'value'], event)
  updateFieldValue(value)
  if (onChange) {
    onChange(value)
  }
}

const displayOption = options => code => pathOr('', [code, 'desc'], options)

const getOptions = compose(
  map(prop('code')),
  values
)

const Dropdown = ({ configuration, name, path, onChange = () => {}, updateFieldValue, ...otherProps }) => (
  <OriginalDropdown
    {...FieldConstants[name]}
    {...configuration}
    {...otherProps}
    readOnly={false}
    name={name}
    onChange={onFieldChangeHandler(updateFieldValue, onChange(name))}
    options={getOptions(configuration.options || FieldConstants[name].options || [])}
    displayOption={displayOption(configuration.options || FieldConstants[name].options || [])}
  />
)

const mapStateToProps = (state, { path = [] }) => ({
  configuration: pathOr({}, path, state)
})

const mapDispatchToProps = (dispatch, { name, path }) => ({
  updateFieldValue: dispatch(updateFieldValue(name, path))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown)
