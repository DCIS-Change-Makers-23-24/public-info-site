import React from 'react';
import styles from './HomePageCard.module.css'

const HomePageCard = ({ title, desc }) => {
    return (
        <div className={styles.homePageCardContainer}>
        <div className={styles.homePageCard}>
            <div className={styles.img}></div>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
        </div>
    )
}

export default HomePageCard;