import React from "react"
import { connect } from "react-redux"
import { networkNodesActions } from "../../actions"
import Tree from "rc-tree"
import 'rc-tree/assets/index.css'
import './styles.css'
import UpdateForm from '../UpdateForm'
import AddWindow from "../AddWindow";

class NetworkNodes extends React.Component {
	state = {
		id: null,
	}
	componentDidMount() {
		this.props.getListNetworkNodes()
	}

	onSelect = (data) => {
		this.props.getNetworkNodesInfo(data)
		this.setState({ id: data })
	}

	deleteNode = () => {
		const { id } = this.state
		this.props.deleteNetworkNodes(id)
	}

	submit = values => {
		const data = { ...values, parentId: values.id ? values.parentId : this.state.id ? this.state.id[0] : null }
		this.props.updateNetworkNode(data)
	};

	render() {
		const { networkNodesList, visible, openModal, closeModal, modalVisible, closeSideBar } = this.props
		const { id } = this.state
		return (
			<div className="parent">
				{networkNodesList.length > 0 &&
					<div className="content">
						<button onClick={openModal}>Add</button>
						<button onClick={this.deleteNode} disabled={!id}>Delete</button>
						<Tree
							onSelect={this.onSelect}
							treeData={networkNodesList}
						/>
					</div>
				}
				{visible &&
					<div className="sideBar">
						<UpdateForm onSubmit={this.submit} cancelForm={closeSideBar} />
					</div>
				}
				<AddWindow modalIsOpen={modalVisible} closeModal={closeModal} onSubmit={this.submit} />
			</div>
		)
	}
}

const mapStateToProps = ({ rootReducer: { visible, networkNodesList, modalVisible } }) => {
	return {
		networkNodesList,
		visible,
		modalVisible
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getListNetworkNodes: () => dispatch(networkNodesActions.getListNetworkNodes()),
		openSideBar: () => dispatch(networkNodesActions.openSideBar()),
		closeSideBar: () => dispatch(networkNodesActions.closeSideBar()),
		openModal: () => dispatch(networkNodesActions.openModal()),
		closeModal: () => dispatch(networkNodesActions.closeModal()),
		deleteNetworkNodes: id => dispatch(networkNodesActions.deleteNetworkNodes(id)),
		getNetworkNodesInfo: id => dispatch(networkNodesActions.getNetworkNodesInfo(id)),
		updateNetworkNode: (data) => dispatch(networkNodesActions.updateNetworkNode(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NetworkNodes)