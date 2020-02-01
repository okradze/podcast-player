import React from 'react'
import styles from './Spinner.module.scss'

export const Spinner = () => (
    <div className={styles.SpinnerWrapper}>
        <span className={styles.Spinner}>
            <span className={styles.SpinItem}></span>
            <span className={styles.SpinItem}></span>
            <span className={styles.SpinItem}></span>
            <span className={styles.SpinItem}></span>
        </span>
    </div>
)

export default Spinner
