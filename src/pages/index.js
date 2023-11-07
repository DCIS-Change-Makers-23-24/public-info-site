import React from "react";
import Layout from "@theme/Layout";

// styles
import styles from "../css/index.module.css";
import 'primeicons/primeicons.css';

// hooks
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
          <h1 className={styles.homePage2Header}>What is the NAECA?</h1>
          <div className={styles.homePage2Columns}>
            <div className={styles.homePage2Column}>
              <p className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum turpis ac nulla feugiat, et accumsan turpis molestie. Proin sagittis, felis at maximus interdum, lectus diam iaculis nibh, eu scelerisque arcu nunc eu enim. Quisque condimentum pretium mauris, non congue diam convallis id. Proin euismod nisl velit, ut bibendum est posuere eu. Donec laoreet lorem eget lectus cursus, quis hendrerit orci dapibus. Pellentesque pretium nibh eu ipsum venenatis, sed placerat diam dictum. Duis gravida, nunc nec rutrum pharetra, nulla risus volutpat tortor, eu tempus lacus magna at tortor. Sed lobortis, neque eget sagittis tempor, nisl velit porttitor magna, sit amet porta metus ligula mattis velit. Nulla facilisi. Integer in luctus orci.

                Phasellus tempus neque ac justo gravida ultricies. Fusce cursus dapibus dui nec sodales. Nunc semper dui tortor. Aliquam varius justo quis neque suscipit vestibulum. Integer eleifend vulputate metus eget consectetur. In sagittis hendrerit pretium. Aenean rutrum, ligula vitae gravida viverra, quam eros porttitor orci, a vestibulum ligula magna non quam. Sed tortor lacus, porttitor vel erat sed, tempor congue mi. Pellentesque mauris lectus, cursus eget iaculis sollicitudin, gravida in nisi. Nulla facilisi.
              </p>
            </div>
            <div className={styles.homePage2Column}>
              <p className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum turpis ac nulla feugiat, et accumsan turpis molestie. Proin sagittis, felis at maximus interdum, lectus diam iaculis nibh, eu scelerisque arcu nunc eu enim. Quisque condimentum pretium mauris, non congue diam convallis id. Proin euismod nisl velit, ut bibendum est posuere eu. Donec laoreet lorem eget lectus cursus, quis hendrerit orci dapibus. Pellentesque pretium nibh eu ipsum venenatis, sed placerat diam dictum. Duis gravida, nunc nec rutrum pharetra, nulla risus volutpat tortor, eu tempus lacus magna at tortor. Sed lobortis, neque eget sagittis tempor, nisl velit porttitor magna, sit amet porta metus ligula mattis velit. Nulla facilisi. Integer in luctus orci.

                Phasellus tempus neque ac justo gravida ultricies. Fusce cursus dapibus dui nec sodales. Nunc semper dui tortor. Aliquam varius justo quis neque suscipit vestibulum. Integer eleifend vulputate metus eget consectetur. In sagittis hendrerit pretium. Aenean rutrum, ligula vitae gravida viverra, quam eros porttitor orci, a vestibulum ligula magna non quam. Sed tortor lacus, porttitor vel erat sed, tempor congue mi. Pellentesque mauris lectus, cursus eget iaculis sollicitudin, gravida in nisi. Nulla facilisi.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.homePage3}>
          <h1 className={styles.homePage3Header}>Why the NAECA?</h1>
          <div className={styles.reasons}>
            <div className={styles.reason}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
            <div className={styles.reason}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
            <div className={styles.reason}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
            <div className={styles.reason}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
            <div className={styles.reason}>
              <p className={styles.reasonTitle}>Lorem ipsum</p>
              <span className="pi pi-lock"></span>
            </div>
          </div>
        </div>
        <div className={styles.homePage5}>
          <h1 className={styles.homePage5Header}>What's after</h1>
          <p className={styles.homePage5Content}>
            <ul>
              <li>Forming Nord Anglia Education Computing Association​</li>
              <li>Structure:</li>
              <ul>
                <li>Yearly elections</li>
                <li>Regional heads</li>
                <li>Event teams</li>
              </ul>
              <li>Yearly hackathons​</li>
              <li>Gamenights</li>
              <li>News sharing​</li>
              <li>Programing challenges​</li>
              <li>Teaching of skills</li>
              <li>Introducing courses</li>
              <li>Discussions</li>
              <li>Debates</li>
            </ul>
          </p>
        </div>
      </main>
    </Layout>
    );
}
