import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLiked, handleModal } from '../../Redux/actions'
import styles from './Modal.module.css'

export default function Modal() {
    const modal = useSelector(state => state?.modal)
    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <i className={`fas fa-times ${styles.closeIcon}`} onClick={() => dispatch(handleModal(null))}></i>
                <div className={styles.image}>
                    <img src={modal?.source} alt={modal?.title} />
                </div>
            </div>
            <div className={styles.middle}>
                <span>{modal?.title}</span>
                <i className={`fas fa-heart ${styles.heartIcon}`} onClick={() => dispatch(handleLiked(modal?.title))}/>               
            </div>
            <div className={styles.bottom}>
                <p>{modal?.description}</p> 
            </div>
        </div>
    )
}
