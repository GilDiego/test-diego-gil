import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLiked, handleModal } from '../../Redux/actions'
import styles from './Card.module.css'

export default function Card({ img, title }) {
    const [active, setActive] = useState(false)

    const dispatch = useDispatch()
    const data = useSelector(state => state?.likedCards)

    const toggleClass = () => {
        setActive(!active);
    };

    useEffect(() => {
    if (data) {
        let obj = data.filter(city => city.title === title)
        if (obj.length) setActive(true)
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                id={title || null}                            
                                className={`fas fa-heart ${styles.heart} ${active ? styles.active : styles.inactive}`}
                                onClick={() => {
                                    toggleClass()                                    
                                    dispatch(handleLiked(title))
                                }}
                            />
                    ) : (
                        <i className={`fas fa-heart ${styles.dormantHeart}`} />                        
                    )
                }
            </div>
        </div>
    )
}
