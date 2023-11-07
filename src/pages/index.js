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
            Forging connections amidst the ever-shifting IT landscape.
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
          <div className={styles.homePage2ColumnLayout}>
            <div className={styles.homePage2Column1}>
              <p>
                <span className={styles.title}>
                  What is the Nord Anglia Education Hackathon?
                </span>{" "}
                <br /> <br />
                The upcoming hackathon is designed to be an engaging and intellectually stimulating event that will encompass a range of thought-provoking challenges. These challenges will be focused on assessing participants' critical thinking skills, with a particular emphasis on how technology can be harnessed to address pressing global issues and contribute to the betterment of our world. In order to tackle these challenges effectively, participants are encouraged to craft innovative solutions that ideally integrate both hardware and software components. This unique blend of hardware and software solutions will not only test your technical expertise but also your creative problem-solving abilities, ensuring that you are well-prepared to make a positive impact in our ever-evolving digital age.
                <br /> <br />
                <span className={styles.title}>
                  Why should you do the NAE Hackathon?
                </span>{" "}
                <br /> <br />
                <ul>
                  <li>Skill Development</li><ul><li>FutureHack will require problem-solving, critical thinking, and analytical skills</li><li>By participating, you can sharpen your ability to solve complex technical problems, which will prove to be beneficial in various aspects of your life.</li></ul>
                  <li>Networking</li><ul><li>FutureHack is designed to garner like-minded individuals who share an interest in technology</li><li>This provides an opportunity to connect with fellow tech enthusiasts, potential mentors, and even future collaborators in tech-related projects.</li></ul>
                  <li>Competitive Edge</li><ul><li>For students and professionals, excelling in FutureHack and other hackathons can be an impressive addition to your resume or portfolio</li><li>It demonstrates your commitment to continuous learning and your proficiency in the field, which can help you stand out to potential employers or educational institutions.</li></ul>
                </ul>
              </p>
            </div>
            <div className={styles.homePage2Column2}>
              <p>
                <span className={styles.title}>Details for the Hackathon</span>{" "}
                <br />
                <br />
                <ul>
                  <li>Date: dd/mm/yyyy</li>
                  <li>Duration: 2 days and 3 nights</li>
                  <li>Location: DCIS@Singapore</li>
                </ul>
                <br />
                <span className={styles.title}>
                  Categories for the Hackathon
                </span>{" "}
                <br />
                <br />
                <ol>
                  <li>Hardware</li>
                  <li>Software</li>
                  <li>Both hardware and software</li>
                </ol>
                <br />
                <span className={styles.title}>
                  Question for the Hackathon
                </span>{" "}
                <br />
                <br />
                Lorem ipsum dolor, sit amet? Consectetur adipiscing elit
                programa.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
    );
}
