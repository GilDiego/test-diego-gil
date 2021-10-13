import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLiked, handleModal } from '../../Redux/actions'
import styles from './Modal.module.css'

export default function Modal() {
    const [active, setActive] = useState(false)
    const modal = useSelector(state => state?.modal)

    const dispatch = useDispatch()
    const data = useSelector(state => state?.likedCards)

    const toggleClass = () => {
        setActive(!active);
    };

    useEffect(() => {
    if (data) {
        let obj = data.filter(city => city.title === modal?.title)
        if (obj.length) setActive(true)
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])
    
    useEffect(() => {
        window.scrollTo(0,0)
        document.body.style.overflow = 'hidden';
        return ()=> document.body.style.overflow = 'unset';
    }, []);

    return (
        
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <i 
                        className={`fas fa-times ${styles.closeIcon}`} 
                        onClick={() => dispatch(handleModal(null))}
                    />
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={modal?.source} alt={modal?.title} />
                    </div>
                </div>
                <div className={styles.middle}>
                    <span>{modal?.title}</span>
                    <i 
                        className={`fas fa-heart ${styles.heart} ${active ? styles.active : styles.inactive}`} 
                        onClick={() => {
                            dispatch(handleLiked(modal?.title))
                            toggleClass()
                        }}
                    />               
                </div>
                <div className={styles.bottom}>
                    <p>{modal?.description}</p> 
                </div>
            </div>

        
    )
}
