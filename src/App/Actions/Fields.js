export const updateFieldValue = (name, path) => dispatch => value => {
  dispatch({
    type: 'UPDATE_FIELD_VALUE',
    path,
    value
  })
}
