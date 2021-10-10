import React from 'react'
import { useDispatch } from 'react-redux'
import { handleLiked, handleModal } from '../../Redux/actions'
import styles from './Card.module.css'

export default function Card({ img, title }) {

    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <img src={img} alt={title} onClick={() => dispatch(handleModal(title))}/>
            </div>
            <div className={styles.bottom}>
                <span>{title || 'Title'}</span>
                <i 
                    className={`fas fa-heart ${styles.heart}`}
                    onClick={() => dispatch(handleLiked(title))}>
                </i>
            </div>
        </div>
    )
}
