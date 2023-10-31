import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from '../css/index.module.css';
import HomePageCard from '../components/Card/LearnPageCard';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.homePage}>
          <div className={styles.homePage1}>
            <div className={styles.homePage1Overlay}></div>
            <h1 className={styles.homePage1Header}>Big Header Text</h1>
            <p className={styles.homePage1Desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nunc sed ligula tristique tincidunt.</p>
            <div className={styles.homePage1BottomBar}>
              <button className={styles.homePage1BottomBarButton}>Get help</button>
              <button className={styles.homePage1BottomBarButton}>How to join</button>
            </div>
          </div>
      </main>
    </Layout>
  );
}
