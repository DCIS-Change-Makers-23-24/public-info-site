import React from 'react';
import styles from './LearnPageCard.module.css'

const LearnPageCard = ({ title, desc }) => {
    return (
        <div className={styles.learnPageCardContainer}>
        <div className={styles.learnPageCard}>
            <div className={styles.img}></div>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
        </div>
    )
}

export default LearnPageCard;