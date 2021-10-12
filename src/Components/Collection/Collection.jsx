import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../Redux/actions'
import styles from './Collection.module.css'
import Card from './Card'


export default function Collection() {
    const [collection, setCollection] = useState([0, 1, 2, 3, 4, 5, 6, 7])
    const [cards, setCards] = useState(0) // Amount of cards to fetch from redux
    const [timer, setTimer] = useState(0) // Timer in seconds
    const [fetching, setFetching] = useState(true) // While true, fetching can continue
    const [showLiked, setShowLiked] = useState(false) // Triggers display of only liked cards

    const dispatch = useDispatch()
    const data = useSelector(state => state?.loadedCards)
    const likedCards = useSelector(state => state?.likedCards)

    // Dispatch fetch based on required amount of cards to display
    useEffect(() => {
        if (cards) dispatch(fetchData(cards))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cards])

    useEffect(() => {
        if (data){
            let arr = data
            while (arr.length < 8){
                arr.push(arr.length)
            }
            setCollection(arr)
        }
    },[data])

    // Timer-based fetching logic
    useEffect(() => {
        if (fetching){
            const count = window.setInterval(() => {
                setTimer(seconds => seconds + 1)
            }, 1000)
            return () => clearInterval(count)
        }
    },[fetching])

    // Trigger fetch for an extra image
    useEffect(() => {
        if (
            fetching &&
            timer !== 840/*40*/ &&
            timer % 120/*5*/  === 0 
        ){
            setCards(prevAmount => prevAmount + 1)
        }
    },[timer, fetching])
    
    //Stop fetching
    useEffect(() => {
        if (timer >= 840/*40*/  ) setFetching(false)
    },[timer])


    return (
        <div className={styles.wrapper}>

            <div className={styles.buttons}>
                <span className={`${!showLiked ? styles.showLiked : styles.active}`} onClick={() => setShowLiked(!showLiked)}>
                    Photos you liked
                </span>
            </div>

            <div className={styles.display}>
                {
                    !showLiked ? (
                        collection ? (
                            collection.map((card, index) => ( 
                                <Card
                                    key={`${card.title} ${index}`}
                                    img={card.source}
                                    title={card.title}
                                />
                            ))
                        ) : (
                            <p> Loading...</p>
                        )
                    ) : (
                        likedCards.length ? (
                            likedCards.map((card, index) => ( 
                                <Card
                                    key={`${index} ${card.title}`}
                                    img={card.source}
                                    title={card.title}
                                />
                            ))
                        ) : (
                            <div className={styles.noCard}>
                                <p> No cards liked yet!</p>
                            </div>
                        )
                    )
                }
            </div>

        </div>
    )
}
