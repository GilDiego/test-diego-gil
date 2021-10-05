import React from 'react'
import styles from './Modal.module.css'

export default function Modal() {
    return (
        <div className={styles.wrapper}>
            <div>
                <i className="fas fa-times"></i>
                <p>img</p>
            </div>
            <div>
                <span>title</span>
                <i className="fas fa-heart"></i>                
            </div>
            <div>
                <p>
                    description
                </p> 
            </div>
        </div>
    )
}
