import * as types from "./action-types"
import { API } from "../utils/const"

const getListNetworkNodes = () =>
	async dispatch => {
		try {
			const response = await fetch(`${API}/`, {
				method: "GET",
			})
			const responseJSON = await response.json()
			dispatch({ type: types.NETWORK_NODE_LOAD_SUCCESSFULL, data: responseJSON })
		} catch (e) {
			console.log(types.NETWORK_NODE_LOAD_FAILED, e)
		}
	}

const getNetworkNodesInfo = id =>
	async dispatch => {
		try {
			const response = await fetch(`${API}/${id}`, {
				method: "GET",
			})
			const responseJSON = await response.json()
			dispatch({ type: types.NETWORK_CHILD_LOAD_SUCCESSFULL, data: responseJSON })
		}
		catch (e) {
			console.log(types.NETWORK_CHILD_LOAD_FAILED, e)
		}
	}

const deleteNetworkNodes = id =>
	async dispatch => {
		try {
			const response = await fetch(`${API}/${id}`, {
				method: 'DELETE'
			})
			const responseJSON = await response.json()
			dispatch({ type: types.NETWORK_NODE_DELETE_SUCCESSFULL, data: responseJSON })
			dispatch(closeSideBar())
		}
		catch (e) {
			console.log(types.NETWORK_NODE_DELETE_FAILED, e)
		}
	}

const selectNode = id =>
	async dispatch => {
		try {
			const response = await fetch(`${API}/${id}`, {
				method: "GET",
			})
			const responseJSON = await response.json()
			dispatch({ type: types.NETWORK_NODE_INFO__LOAD_SUCCESSFULL, data: responseJSON })
			dispatch(openSideBar())
		}
		catch (e) {
			console.log(types.NETWORK_CHILD_LOAD_FAILED, e)
		}
	}

const updateNetworkNode = data =>
	async dispatch => {
		const url = data.id ? `${API}/${data.id}` : `${API}/`
		const method = data.id ? 'PUT' : 'POST'
		const body = JSON.stringify(data)
		try {
			const response = await fetch(url, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method,
				body
			})
			const responseJSON = await response.json()
			data.id
				? dispatch({ type: types.NETWORK_NODE_UPDATE_SUCCESSFULL, data: responseJSON })
				: dispatch({ type: types.NETWORK_NODE_ADD_SUCCESSFULL, data: responseJSON })
			data.id ? dispatch(closeSideBar()) : dispatch(closeModal())
		}
		catch (e) {
			console.log(types.NETWORK_NODE_UPDATE_FAILED, e)
		}
	}

const openSideBar = () => dispatch => dispatch({ type: types.OPEN_SIDEBAR })
const closeSideBar = () => dispatch => dispatch({ type: types.CLOSE_SIDEBAR })
const openModal = () => dispatch => dispatch({ type: types.OPEN_MODAL })
const closeModal = () => dispatch => dispatch({ type: types.CLOSE_MODAL })


export const networkNodesActions = {
	getListNetworkNodes,
	deleteNetworkNodes,
	getNetworkNodesInfo,
	openSideBar,
	closeSideBar,
	openModal,
	closeModal,
	updateNetworkNode,
	selectNode
}