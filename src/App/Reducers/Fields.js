import { set, lensPath, drop } from 'ramda'

import FieldsInitialState from '../InitialStates/Fields'

export default (state = FieldsInitialState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD_VALUE':
      return set(lensPath([...drop(1, action.path), 'value']), action.value, state)
    default:
      return state
  }
}
