import React from 'react'
import styles from './Button.module.scss'

const Button = ({ children, inverted, ...otherProps }) => (
    <button
        className={`${styles.Button} ${inverted ? styles.Inverted : ''}`}
        {...otherProps}
    >
        {children}
    </button>
)

export default Button
