import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "../css/Learn.module.css";
import LearnPageCard from "../components/Card/LearnPageCard";

export default function Learn() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Learn Programming`}
      description="Learn popular frameworks and languages for free"
    >
      <main className={styles.homePage}>
        <div className={styles.homePage1}>
          <h1 className={styles.header}>Learn popular frameworks for free</h1>
          <div className={styles.cardContainer}>
            <LearnPageCard
              desc={
                "One of the most popular front-end tools, React is a framework built on Javascript by Facebook."
              }
              title="React"
            />
            <LearnPageCard
              desc={
                "Git and Github are tools that allow programmers to host, share, and collaborate on code."
              }
              title="Git/SCM"
            />
            <LearnPageCard
              desc={"HTML/CSS involves the basics of creating websites."}
              title="HTML/CSS"
            />
            <LearnPageCard
              desc={
                "Python is one of the most popular, multi-purpose languages used for building backends, AI/ML, data visualisation, etc."
              }
              title="Python"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
