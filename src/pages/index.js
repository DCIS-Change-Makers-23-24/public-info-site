import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from '../css/index.module.css';
import HomePageCard from '../components/Card/HomePageCard';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.homePage}>
          <h1>Insert text here</h1>
          <div className={styles.homePage1}>
            <div className={styles.cardContainer}>
              <HomePageCard />
              <HomePageCard />
              <HomePageCard />
              <HomePageCard />
            </div>
          </div>
      </main>
    </Layout>
  );
}
