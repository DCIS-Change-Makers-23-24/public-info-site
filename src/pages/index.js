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
          <div className={styles.homePage1}>
          <h1 className={styles.header}>Learn popular frameworks for free</h1>
            <div className={styles.cardContainer}>
              <HomePageCard desc={"One of the most popular front-end tools, React is a framework built on Javascript by Facebook."} title="React" />
              <HomePageCard desc={"Git and Github are tools that allow programmers to host, share, and collaborate on code."} title="Git/SCM" />
              <HomePageCard desc={"HTML/CSS involves the basics of creating websites."} title="HTML/CSS" />
              <HomePageCard desc={"Python is one of the most popular, multi-purpose languages used for building backends, AI/ML, data visualisation, etc."} title="Python" />
            </div>
          </div>
      </main>
    </Layout>
  );
}
