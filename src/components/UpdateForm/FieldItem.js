import React from 'react'
import { Field } from 'redux-form'

const renderField = ({ title, input, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{title}: </label>
        <div>
            <input {...input} type={type} />
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const FieldItem = ({ title, name, validateField }) => (
    <Field
        title={title}
        name={name}
        component={renderField}
        type="text"
        validate={validateField}
    />
)
export default FieldItem