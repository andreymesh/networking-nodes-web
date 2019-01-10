import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from "react-redux"
import { networkNode } from '../../utils/const'
import FieldItem from './FieldItem'

class UpdateForm extends React.Component {

    Item = item => (
        <FieldItem
            key={item.id}
            {...item} />
    )


    render() {
        const { handleSubmit, cancelForm } = this.props
        return (
            <form onSubmit={handleSubmit}>
                {networkNode.map(this.Item)}
                <button type="submit">Прменить</button>
                <button type="button" onClick={cancelForm} >Отменить</button>
            </form>
        )
    }
}

const mapStateToProps = ({ rootReducer: { networkNodeInfo } }) => {
    return {
        initialValues: {
            id: networkNodeInfo && networkNodeInfo.id,
            title: networkNodeInfo && networkNodeInfo.title,
            IPAddress: networkNodeInfo && networkNodeInfo.IPAddress,
            webPort: networkNodeInfo && networkNodeInfo.webPort,
            parentId: networkNodeInfo && networkNodeInfo.parentId
        }
    }
}

UpdateForm = reduxForm({ form: 'updateForm', enableReinitialize: true })(UpdateForm)
export default connect(mapStateToProps, null)(UpdateForm)