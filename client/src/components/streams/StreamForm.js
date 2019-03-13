import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends Component {
  renderInput = ({ input, label, meta: { touched, error } }) => {
    const className = `field ${error && touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div className="ui error message">{touched && error}</div>
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description "
        />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }
  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm)
