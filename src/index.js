import React from "react"
import ReactDOM from "react-dom"
import NetworkNodes from "./components/NetworkNodes"
import {Provider} from "react-redux"
import store from "./reducer"
import Modal from 'react-modal';

Modal.setAppElement('#root');

class App extends React.Component {
	render() {
		return (
			<div>
				<NetworkNodes/>
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, document.getElementById("root"))
