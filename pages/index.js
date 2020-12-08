import Head from 'next/head';
import Image from 'next/image';
import WorkExperiences from '../components/experience';
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
                  justifyContent: 'center',
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
                <span style={{ color: '#ffffff', margin: 10 }}>
                  <i className="fab fa-node-js"></i> Node.js
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.work}>
          <div>
            <h4>Where I have worked</h4>
            <div>
              <WorkExperiences />
            </div>
          </div>
        </section>
        {/* <section className={styles.methodogy}>
          <div>
            <h4>My work methodology</h4>
            <p>Customer is alway right...yeah but customers to not always know what they want.</p>
            <p>To bring my clients with throughout the project, here is the methodogy I use</p>
          </div>
          <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
            <span></span>
          </div>
        </section> */}
        {/* <section>
          <div>
            <h4>What I do</h4>
          </div>
          <div>
            <div>
              <h5>Full Stack Web Development</h5>
            </div>
            <div>
              <h5></h5>
            </div>
          </div>
        </section> */}
        <section className={styles.contact}>
          <div>
            <div>
              <h2>Let's get in touch</h2>
              <p>
                I'm open to newer opportunities and would love to connect with
                you. Feel free to say hi 😉
              </p>
            </div>
            <div className={styles.contactlinks}>
              <a className={styles.phone} href="tel:+233576621657">
                <i className="fas fa-phone-alt"></i>
                <span>+233576621657</span>
              </a>
              <a className={styles.whatsapp} href="https://wa.me/233576621657">
                <i className="fab fa-whatsapp"></i>
                <span>+233576621657</span>
              </a>
              <a className={styles.telegram} href="https://t.me/isaacgyamfi8">
                <i className="fab fa-telegram-plane"></i>
                <span>+233576621657</span>
              </a>
              <a className={styles.email} href="mailto:frimpongi50@gmail.com">
                <i className="fas fa-envelope"></i>
                <span>frimpongi50@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
