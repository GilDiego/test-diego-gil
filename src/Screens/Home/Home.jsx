import React from 'react'
import styles from './Home.module.css'
import Header from '../../Components/Header/Header'
import Collection from '../../Components/Collection/Collection'
import Footer from '../../Components/Footer/Footer'
import Modal from '../../Components/Modal/Modal'


export default function Home() {
    return (
        <div className={styles.wrapper}>
            <Header />           
            <Collection />           
            <Footer />
            <Modal />
        </div>
    )
}
