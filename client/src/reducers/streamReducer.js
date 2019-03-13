import _ from 'lodash'
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload }
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload }
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, 'id') }
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload }
    case DELETE_STREAM:
      return _.omit(state, payload)

    default:
      return state
  }
}
