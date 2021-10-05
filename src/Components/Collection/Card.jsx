import React from 'react'
import styles from './Card.module.css'

export default function Card({ img, title }) {
    return (
        <div className={styles.wrapper}>
            <div>
                <img src={img} alt={title} />
            </div>
            <div>
                <p>{title}</p>
                <i className="fas fa-heart"></i>
            </div>
        </div>
    )
}
