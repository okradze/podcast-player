import React from 'react'
import styles from './Spinner.module.scss'

export const Spinner = () => (
    <div data-testid='spinner' className={styles.SpinnerWrapper}>
        <span className={styles.Spinner}>
            <span className={styles.SpinItem} />
            <span className={styles.SpinItem} />
            <span className={styles.SpinItem} />
            <span className={styles.SpinItem} />
        </span>
    </div>
)

export default Spinner
