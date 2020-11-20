import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ISAAC GYAMFI</title>
        <link rel="icon" href="/assets/images/personal-image.jpeg" />
      </Head>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.brand}>
            <Image
              src="/assets/images/personal-image.jpeg"
              width={70}
              height={70}
              alt="me"
            />
            <h4>ISAAC GYAMFI</h4>
          </div>
          <h1 className={styles.title}>
            Everyday learner embracing change to build the next generation
          </h1>

          <p className={styles.description}>
            Software Engineer | Coding Instructor
          </p>
          <div className={styles.social}>
            <div>
              <a
                className={styles.linkedin}
                href="https://linkedin.com/in/isaacgyamfi8"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
                <span> LinkedIn</span>
              </a>
            </div>
            <div>
              <a
                className={styles.github}
                href="https://github.com/isaacgyamfi"
                target="_blank"
              >
                <i className="fab fa-github"></i>
                <span> GitHub</span>
              </a>
            </div>
            <div>
              <a
                className={styles.twitter}
                href="https://twitter.com/gyamisaac"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
                <span> Twitter</span>
              </a>
            </div>
            <div>
              <a
                className={styles.medium}
                href="https://medium.com/@isaacgyamfi"
                target="_blank"
              >
                <i className="fab fa-medium-m"></i>
                <span> Medium</span>
              </a>
            </div>
          </div>
        </section>
        {/* <div style={{ marginTop: 50 }}>
          <a href="#" className={styles.learnmore}>
            Learn more
          </a>
        </div> */}
        <section className={styles.about}>
          <div>
            <h4>Meet me 👋</h4>
            <div className={styles.row}>
              <div className={styles.text}>
                <p>Hey there, welcome to my world!</p>
                <p>
                  You can call me any of these names: Isaac, Frimpong, Gyamfi,
                  Ike. I’m a rising senior at the University of Ghana majoring
                  in Computer Science. As a passionate engineer and innovator, I
                  love to put my brain into thinking and work out solutions
                  while delivering knowledge using computers. My goal is to help
                  digitize Africa and enhance industries to better work
                  efficiently and productively.
                </p>
              </div>
              <div className={styles.profile}>
                <img src="/assets/images/personal-image.jpeg" alt="me" />
              </div>
            </div>
            <div className={styles.tech}>
              <h5>Technologies I work with 💻</h5>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ color: '#ffffff', margin: 10 }}>
                  <i className="fab fa-python"></i> Python
                </span>
                <span style={{ color: '#ffffff', margin: 10 }}>
                  <i className="fab fa-java"></i> Java
                </span>
                <span style={{ color: '#ffffff', margin: 10 }}>
                  <i className="fab fa-js"></i> JavaScript
                </span>
                <span style={{ color: '#ffffff', margin: 10 }}>
                  <i className="fab fa-html5"></i> HTML & (S)CSS
                </span>
                <span style={{ color: '#ffffff', margin: 10 }}>
                  <i className="fab fa-react"></i> React (Native)
                </span>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </main>

      <footer className={styles.footer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>Get in touch</h3>
          <div>
            <a href="mailto:frimpongi50@gmail.com">frimpongi50@gmail.com</a> |
            <a href="tel:+233576621657"> +233576621657</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
