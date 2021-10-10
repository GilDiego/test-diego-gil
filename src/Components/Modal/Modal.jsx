import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLiked, handleModal } from '../../Redux/actions'
import styles from './Modal.module.css'

export default function Modal() {
    const modal = useSelector(state => state?.modal)
    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>
            <div>
                <i className="fas fa-times" onClick={() => dispatch(handleModal(null))}></i>
                <p>{modal?.source}</p>
            </div>
            <div>
                <span>{modal?.title}</span>
                <i className="fas fa-heart" onClick={() => dispatch(handleLiked(modal?.title))}/>               
            </div>
            <div>
                <p>
                    {modal?.description}
                </p> 
            </div>
        </div>
    )
}
