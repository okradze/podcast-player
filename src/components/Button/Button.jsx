import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ children, inverted, ...otherProps }) => (
    <button
        type='button'
        className={`${styles.Button} ${inverted ? styles.Inverted : ''}`}
        {...otherProps}
    >
        {children}
    </button>
)

export default Button
