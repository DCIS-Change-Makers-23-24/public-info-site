import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "../css/index.module.css";
import HomePageCard from "../components/Card/LearnPageCard";

import { useHistory } from "@docusaurus/router";
import '../css/animation.css'

import {gsap} from 'gsap';
import {useRef, useLayoutEffect} from 'react'


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory()
  const ref = useRef(null)

  useLayoutEffect(() => {
    const element = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(element.querySelectorAll(".home-page-1-anim"), {
        y: -20,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.6
      })

      return () => ctx.revert()
    }, ref)

      
  }, [])

  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={styles.homePage} ref={ref}>
        <div className={styles.homePage1}>
          <div className={styles.homePage1TextContainer}>
            <h1 className={styles.homePage1Header + " home-page-1-anim"}>FutureHack</h1>
            <p className={styles.homePage1Desc + " home-page-1-anim"}>
              Forging connections amidst the ever-shifting IT landscape.
            </p>
            <div className={styles.buttonRow + " home-page-1-anim"}>
              <button className={styles.homePage1Button} onClick={() => history.push('/docs/support/get-help')}>
                Get help
              </button>
              <button className={styles.homePage1Button} onClick={() => history.push('/docs/support/how-to-join')}>
                How to join
              </button>
            </div>
          </div>
          <div className="home-page-animation">
            <div className="screen home-page-1-anim">
              <div className="title-container">
                <p className="title">index.js</p>
                <div className="buttons">
                  <div className="abutton red"></div>
                  <div className="abutton orange"></div>
                  <div className="abutton green"></div>
                </div>
              </div>
              <div className="code">
                <p className="line-1"><span className="bold">import</span> react, {'{useState, useEffect}'} <span className="bold">from</span> 'react'</p>
                <br />
                <p className="line-2">const NewComponent = (props) ={'>'} {'{'}</p>
                <p className="line-3">&nbsp;&nbsp;&nbsp;&nbsp;const [stuff, set_stuff] = useState(null);</p>
                <br/>
                <p className="line-4">&nbsp;&nbsp;&nbsp;&nbsp;useEffect(() ={'>'} {'{'}</p>
                <p className="line-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.title = "Example Title Here";</p>
                <p className="line-6">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
                <br />
                <p className="line-7">&nbsp;&nbsp;&nbsp;&nbsp;{'return ('}</p>
                <p className="line-8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<h1>Hello World!</h1>'}</p>
                <p className="line-9">&nbsp;&nbsp;&nbsp;&nbsp;{');'}</p>
                <p className="line-10">{'};'}</p>
                <br />
                <p className="line-11">{'export default NewComponent;'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.homePage2}>
            <h1 className={styles.title}>
              What is FutureHack?
            </h1>
            <p>FutureHack is an engaging and intellectually stimulating event that will encompass a set of 2 thought-provoking challenges. These challenges will be focused on assessing participants' critical thinking skills, with a particular emphasis on how technology can be harnessed to address pressing global issues and contribute to the betterment of our world. In order to tackle these challenges effectively, participants are encouraged to craft innovative solutions that ideally integrate both hardware and software components. This unique blend of hardware and software solutions will not only test your technical expertise but also your creative problem-solving abilities, ensuring that you are well-prepared to make a positive impact in our ever-evolving digital age.</p>
        </div>
        <div className={styles.homePage3}>
            <h1 className={styles.title}>
                Why should you do the NAE Hackathon?
            </h1>
            <ul>
              <li>Skill Development</li><ul><li>FutureHack will require problem-solving, critical thinking, and analytical skills</li><li>By participating, you can sharpen your ability to solve complex technical problems, which will prove to be beneficial in various aspects of your life.</li></ul>
              <li>Networking</li><ul><li>FutureHack is designed to garner like-minded individuals who share an interest in technology</li><li>This provides an opportunity to connect with fellow tech enthusiasts, potential mentors, and even future collaborators in tech-related projects.</li></ul>
              <li>Competitive Edge</li><ul><li>For students and professionals, excelling in FutureHack and other hackathons can be an impressive addition to your resume or portfolio</li><li>It demonstrates your commitment to continuous learning and your proficiency in the field, which can help you stand out to potential employers or educational institutions.</li></ul>
            </ul>
        </div>
        <div className={styles.homePage4}>
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
      </main>
    </Layout>
  );
}
