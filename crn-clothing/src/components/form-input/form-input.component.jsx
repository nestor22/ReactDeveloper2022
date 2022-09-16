import React, { Fragment } from 'react'
import './form-input.style.scss'

const FormInput = ({label, ...otherProps }) => {
  return (
    <div className='group'>
        <label className = {`${otherProps.value.length ? 'shirink': ''} form-input.label`}>{label}</label>
        <input
            className='form-input'
          {...otherProps}
        />
    </div>
  )
}

export default FormInput