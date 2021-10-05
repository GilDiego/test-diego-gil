import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <span>
                {
                    new Date().toLocaleDateString()
                }
            </span>
            <span>
                <a href="https://github.com/GilDiego/test-diego-gil">
                    My repository
                </a>
            </span>
            <span>
                Diego Gil
            </span>
        </div>
    )
}
