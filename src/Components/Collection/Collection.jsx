import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../Redux/actions'
import styles from './Collection.module.css'
import Card from './Card'


export default function Collection() {
    const [cards, setCards] = useState([])
    const [timer, setTimer] = useState(0)
    const [fetching, setFetching] = useState(true)

    const dispatch = useDispatch()
    const data = useSelector(state => state?.loadedCards)

    useEffect(() => {
        dispatch(fetchData())
    },[])

    useEffect(() => {
        if (data && data.length) setCards(data)
    },[data])

    // Timer-based fetching logic.
    useEffect(() => {
        if (fetching){
            const count = window.setInterval(() => {
                setTimer(seconds => seconds + 1)
            }, 1000)
            return () => clearInterval(count)
        }
    },[fetching])

    useEffect(() => {
        if (timer >= 840) setFetching(false)
    },[timer])

    useEffect(() => {
        if (timer % 120 === 0 && fetching){
            return
        }
    },[timer, fetching])



    return (
        <div className={styles.wrapper}>

            <button className={styles.showLiked}>Photos you liked</button>

            <div className={styles.display}>
                {
                    cards.length ? (
                        cards.map((card, index) => ( 
                            <Card
                                key={index}
                                img={card.source}
                                title={card.title}
                            />
                        ))
                    ) : (
                        <p> Loading...</p>
                    )
                }
            </div>

        </div>
    )
}
