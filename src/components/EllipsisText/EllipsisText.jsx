import React from 'react'
import styles from './EllipsisText.module.scss'

export const EllipsisText = ({
    tagName = 'span',
    children,
    className = '',
}) => {
    return React.createElement(
        tagName,
        { className: `${styles.Ellipsis} ${className}` },
        children,
    )
}

export default EllipsisText
