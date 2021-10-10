import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './Home.module.css'
import Header from '../../Components/Header/Header'
import Collection from '../../Components/Collection/Collection'
import Footer from '../../Components/Footer/Footer'
import Modal from '../../Components/Modal/Modal'


export default function Home() {
    const [modal, setModal] = useState(false)
    
    const displayModal = useSelector(state => state?.modal)

    useEffect(() => {
        if (displayModal !== null) setModal(true)
        else setModal(false)
    },[displayModal])

    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrap}>
                {modal ? <div className={styles.background} /> : null}
                <Header />
                {modal ? <Modal /> : null}           
                <Collection />           
            </div>            
                <Footer />            
        </div>
        
    )
}
