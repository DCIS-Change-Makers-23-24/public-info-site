import React from 'react';
import styles from './HomePageCard.module.css'

const HomePageCard = () => {
    return (
        <div className={styles.homePageCard}>
            <div className={styles.img}></div>
            <div className={styles.content}>
                <p className={styles.title}>Lorem ipsum</p>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sunt nihil unde necessitatibus voluptatum.</p>
            </div>
        </div>
    )
}

export default HomePageCard;