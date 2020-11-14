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
      <main className={styles.main}>
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
              LinkedIn
            </a>
          </div>
          <div>
            <a
              className={styles.github}
              href="https://github.com/isaacgyamfi"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div>
            <a
              className={styles.twitter}
              href="https://twitter.com/gyamisaac"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
