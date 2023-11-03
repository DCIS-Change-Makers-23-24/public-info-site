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
          <div className={styles.homePage2}>
            <div className={styles.homePage2ColumnLayout}>
              <div className={styles.homePage2Column1}>
                <p>
                  <span className={styles.title}>What is the Nord Anglia Education Hackathon?</span> <br /> <br /> 

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio eu feugiat pretium nibh. Risus quis varius quam quisque. Pretium viverra suspendisse potenti nullam ac tortor vitae. Sit amet nisl purus in mollis nunc sed id semper. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Nunc aliquet bibendum enim facilisis gravida neque convallis. Molestie nunc non blandit massa enim. Fermentum leo vel orci porta non pulvinar neque. Quam pellentesque nec nam aliquam sem. At varius vel pharetra vel turpis nunc eget. Sem integer vitae justo eget magna fermentum.

                  <br /> <br /> 
                  <span className={styles.title}>Why should you do the NAE Hackathon?</span> <br /> <br /> 

                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <ul>
                      <li>consectetur adipiscing elit</li>
                      <li>sed do eiusmod tempor</li>
                    </ul>
                    <li>Test test test</li>
                    <ul>
                      <li>Helicopters!</li>
                      <li>Julius Caesar</li>
                    </ul>
                    <li>Inclusivity</li>
                    <li>Oppurtunities for stuff</li></ul>
                </p>
              </div>
              <div className={styles.homePage2Column2}>
                <p>
                  <span  className={styles.title}>Details for the Hackathon</span> <br /><br />

                  <ul>
                    <li>Date: dd/mm/yyyy</li>
                    <li>Duration: 2 days and 3 nights</li>
                    <li>Location: DCIS@Singapore</li>
                  </ul>

                  <br />

                  <span  className={styles.title}>Categories for the Hackathon</span> <br /><br />

                  <ol>
                    <li>Hardware</li>
                    <li>Software</li>
                    <li>Both hardware and software</li>
                  </ol>

                  <br />

                  <span  className={styles.title}>Question for the Hackathon</span> <br /><br />

                  Lorem ipsum dolor, sit amet? Consectetur adipiscing elit programa.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.homePage3}>
            <h1 className={styles.homePage3Header}>Contact</h1>
          </div>
      </main>
    </Layout>
  );
}
