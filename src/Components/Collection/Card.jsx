import React from 'react'
import { useDispatch } from 'react-redux'
import { handleLiked, handleModal } from '../../Redux/actions'
import styles from './Card.module.css'

export default function Card({ img, title }) {

    const dispatch = useDispatch()

    return (
        <div className={styles.wrapper}>
            <div>
                <img src={img} alt={title} onClick={() => dispatch(handleModal(title))}/>
            </div>
            <div>
                <p>{title}</p>
                <i 
                    className="fas fa-heart"
                    onClick={() => dispatch(handleLiked(title))}>
                </i>
            </div>
        </div>
    )
}
