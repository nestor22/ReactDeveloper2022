import React from 'react'
import './button.style.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}
const Button = ({childern, buttonType, ...otherProps}) => {
  return (
    <Button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}> {childern}</Button>
  )
}

export default Button