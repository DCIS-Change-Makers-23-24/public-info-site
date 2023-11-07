import React from "react";
import Layout from "@theme/Layout";
import styles from "../css/index.module.css";

import { useHistory } from "@docusaurus/router";

export default function Home() {
  const history = useHistory();

  return (
    <Layout
      title={`Home`}
      description="Home of the Nord Anglia Education Computing Association"
    >
      <main className={styles.homePage}>
        <div className={styles.homePage1}>
          <div className={styles.homePage1Overlay}></div>
          <h1 className={styles.homePage1Header}>Nord Anglia Education Computing Association</h1>
          <p className={styles.homePage1Desc}>
            Uniting and leading the Flotilla Through Shifting Seas of STEAM and IT​
          </p>
          <div className={styles.homePage1BottomBar}>
            <button className={styles.homePage1BottomBarButton}>
              Placeholder
            </button>
            <button className={styles.homePage1BottomBarButton} onClick={() => history.push('/hackathon')}>
              Our Hackathon
            </button>
          </div>
        </div>
        <div className={styles.homePage2}>
          
        </div>
      </main>
    </Layout>
    );
}
