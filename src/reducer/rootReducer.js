import * as actionTypes from '../actions/action-types'
import { updateList, addElement, deleteElement } from '../utils/const'
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
				networkNodesList: action.data
			}
		case actionTypes.NETWORK_NODE_INFO__LOAD_SUCCESSFULL:
			return {
				...state,
				networkNodeInfo: action.data,
			}
		case actionTypes.NETWORK_CHILD_LOAD_SUCCESSFULL:
			return {
				...state,
				networkNodesList: updateList(state.networkNodesList, action.data)
			}
		case actionTypes.NETWORK_NODE_ADD_SUCCESSFULL:
			return {
				...state,
				networkNodesList: addElement(state.networkNodesList, action.data)
			}
		case actionTypes.NETWORK_NODE_UPDATE_SUCCESSFULL:
			return {
				...state,
				networkNodesList: updateList(state.networkNodesList, action.data)
			}
		case actionTypes.NETWORK_NODE_DELETE_SUCCESSFULL:
			return {
				...state,
				networkNodesList: deleteElement(state.networkNodesList, action.data)
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