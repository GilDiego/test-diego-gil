import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLiked, handleModal } from '../../Redux/actions'
import styles from './Card.module.css'

export default function Card({ img, title }) {

    const dispatch = useDispatch()
    const data = useSelector(state => state?.loadedCards)

    useEffect(()=>{
        if (data){
            let req = data.filter(city => city.title)
            if (req.length && Object.values(req[0])[3]){
                let target = document.getElementById(title)
                console.log(target)
            }
            else return
        }
    },[data])


    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                { 
                    img ? (
                        <img className={styles.image} src={img} alt={title} onClick={() => dispatch(handleModal(title))}/>
                    ) : (
                        <div className={styles.placeholder}>
                            <span className={styles.placeholderSpan}>Image</span>
                        </div>
                    )
                }
            </div>
            <div className={styles.bottom}>
                <span>{title || 'Title'}</span>
                {
                    title ? (
                        <i 
                            id={title}
                            className={`fas fa-heart ${styles.heart}`}
                            onClick={() => dispatch(handleLiked(title))}
                        />
                                                
                    ) : (
                        <i className={`fas fa-heart ${styles.dormantHeart}`} />                        
                    )
                }
            </div>
        </div>
    )
}
