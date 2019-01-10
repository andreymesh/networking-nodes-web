import * as actionTypes from '../actions/action-types'
import { updateList } from '../utils/const'
const initialState = {
	networkNodesList: [],
	visible: false,
	modalVisible: false
}

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.NETWORK_NODE_LOAD_SUCCESSFULL:
			return {
				...state,
				networkNodesList: updateList(action.data)
			}
		case actionTypes.NETWORK_NODE_INFO__LOAD_SUCCESSFULL:
			return {
				...state,
				networkNodeInfo: action.data,
			}
		case actionTypes.OPEN_SIDEBAR:
			return {
				...state,
				visible: true
			}
		case actionTypes.CLOSE_SIDEBAR:
			return {
				...state,
				visible: false
			}
		case actionTypes.OPEN_MODAL:
			return {
				...state,
				modalVisible: true,
				visible: false,
				networkNodeInfo: null
			}
		case actionTypes.CLOSE_MODAL:
			return {
				...state,
				modalVisible: false
			}
		default:
			return state
	}
}
export default rootReducer