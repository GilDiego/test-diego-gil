import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <span>
                {new Date().toLocaleDateString()}
            </span>
            <span>
                <a href="https://github.com/GilDiego/test-diego-gil" target="_blank" rel="noreferrer">
                    View Repository
                </a>
            </span>
            <span>
                <a href="https://www.linkedin.com/in/gil-diego/" target="_blank" rel="noreferrer">
                        Diego Gil
                </a>
            </span>
        </div>
    )
}
