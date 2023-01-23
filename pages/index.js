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
        <section className="px-10 lg:px-20 py-10 flex flex-row">
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <div className="mb-5">
              <h4 className={'text-5xl font-semibold'}>isaac gyamfi</h4>
            </div>
            <h1 className={'text-4xl lg:text-7xl font-semibold my-5'}>
              Everyday learner embracing change to build the next generation
            </h1>

            <p className={'text-xl lg:text-4xl'}>
              Software Engineer | Coding Instructor
            </p>
            <div
              className={'flex flex-row justify-center lg:justify-start mt-10'}
            >
              <div className="mr-5">
                <a href="https://linkedin.com/in/isaacgyamfi8" target="_blank">
                  <i className="text-4xl lg:text-5xl fab fa-linkedin" />
                </a>
              </div>
              <div className="mr-5">
                <a href="https://github.com/isaacgyamfi" target="_blank">
                  <i className="text-4xl lg:text-5xl fab fa-github" />
                </a>
              </div>
              <div className="mr-5">
                <a href="https://twitter.com/gyamisaac" target="_blank">
                  <i className="text-4xl lg:text-5xl fab fa-twitter" />
                </a>
              </div>
              <div className="mr-5">
                <a href="https://instagram.com/gyamisaac" target="_blank">
                  <i className="text-4xl lg:text-5xl fab fa-instagram" />
                </a>
              </div>
              <div className="mr-5">
                <a href="https://facebook.com/bohyeba.isaac7" target="_blank">
                  <i className="text-4xl lg:text-5xl fab fa-facebook-square" />
                </a>
              </div>
              <div className="mr-5">
                <a href="https://medium.com/@isaacgyamfi" target="_blank">
                  <i className="text-4xl lg:text-5xl fab fa-medium-m" />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:w-1/3 lg:flex justify-center items-center">
            <img
              className="object-cover"
              src="/assets/images/bg.jpg"
              alt="me"
            />
          </div>
        </section>
        {/* <div style={{ marginTop: 50 }}>
          <a href="#" className={styles.learnmore}>
            Learn more
          </a>
        </div> */}
        <section
          id="about"
          className="px-10 lg:px-32 py-16 lg:py-28 flex flex-col-reverse lg:flex-row lg:justify-center bg-black text-white"
        >
          <div className="w-full lg:w-2/3 mt-5 lg:m-0">
            <h4 className="text-3xl lg:text-4xl font-semibold">Meet me 👋</h4>
            <div>
              <p className="text-2xl lg:text-3xl">
                Hey there, welcome to my world!
              </p>
              <p className="text-xl lg:text-3xl">
                You can call me any of these names:{' '}
                <strong>Isaac, Frimpong, Gyamfi, Ike</strong>. I’m a senior at
                the University of Ghana, Legon, majoring in Computer Science. As
                a passionate engineer and innovator, I love to put my brain into
                thinking and work out solutions while delivering knowledge using
                computers. My goal is to help digitize Africa and enhance
                industries to better work efficiently and productively.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              className="object-cover h-60 lg:h-80 w-60 lg:w-80"
              src="/assets/images/personal-image.jpeg"
              alt="me"
            />
          </div>
        </section>
        <section className="px-10 lg:px-20 py-10 flex justify-center items-center text-center">
          <div className="w-full lg:w-1/2">
            <h5 className="text-4xl font-bold text-center">
              Technologies I work with 💻
            </h5>
            <div className="my-2">
              <h5 className="text-2xl font-semibold">Programming languages</h5>
              <div className="flex flex-row flex-wrap justify-center items-center">
                {[
                  'Java',
                  'C++',
                  'TypeScript',
                  'JavaScript',
                  'Python',
                  'Kotlin',
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="border-2 border-black px-3 py-1 m-1"
                  >
                    <h3 className="text-base md:text-xl">{tech}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-2">
              <h5 className="text-2xl font-semibold">Frameworks</h5>
              <div className="flex flex-row flex-wrap justify-center items-center">
                {[
                  'React',
                  'React Native',
                  'Vue',
                  'Node.js',
                  'Express',
                  'Spring',
                  'Apollo GraphQL',
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="border-2 border-black px-3 py-1 m-1"
                  >
                    <h3 className="text-base md:text-xl">{tech}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-2">
              <h5 className="text-2xl font-semibold">Databases</h5>
              <div className="flex flex-row flex-wrap justify-center items-center">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'].map(
                  (tech, index) => (
                    <div
                      key={index}
                      className="border-2 border-black px-3 py-1 m-1"
                    >
                      <h3 className="text-base md:text-xl">{tech}</h3>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="my-2">
              <h5 className="text-2xl font-semibold">Design tools</h5>
              <div className="flex flex-row flex-wrap justify-center items-center">
                {['Adobe XD', 'Figma', 'Balsamiq'].map((tech, index) => (
                  <div
                    key={index}
                    className="border-2 border-black px-3 py-1 m-1"
                  >
                    <h3 className="text-base md:text-xl">{tech}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="flex justify-center items-center px-10 lg:px-0 py-10"
        >
          <div className="w-full lg:w-1/2 text-center">
            <h4 className="text-4xl font-bold">Where I have worked 👨‍💻</h4>
            <div>
              <WorkExperiences />
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex justify-center items-center px-5 pt-10 pb-16"
        >
          <div className={'w-full md:w-1/2'}>
            <div className="text-center">
              <h2 className="text-5xl font-bold">Let's get in touch</h2>
              <p className="text-2xl md:text-3xl">
                I'm open to newer opportunities and would love to connect with
                you. Feel free to say hi 😉
              </p>
            </div>
            <div>
              <div className="flex flex-row flex-wrap justify-center items-center my-3">
                <a
                  className={
                    'border-2 border-black px-2 md:px-3 py-1 md:py-2 flex items-center m-1'
                  }
                  href="tel:+233576621657"
                >
                  <i className="text-lg lg:text-2xl fas fa-phone-alt" />
                  <span className="text-base md:text-xl ml-2">
                    +233576621657
                  </span>
                </a>
                <a
                  className={
                    'border-2 border-black px-2 md:px-3 py-1 md:py-2 flex items-center m-1'
                  }
                  href="https://wa.me/233576621657"
                >
                  <i className="text-lg lg:text-2xl fab fa-whatsapp" />
                  <span className="text-base md:text-xl ml-2">
                    +233576621657
                  </span>
                </a>
                <a
                  className={
                    'border-2 border-black px-2 md:px-3 py-1 md:py-2 flex items-center m-1'
                  }
                  href="https://t.me/isaacgyamfi8"
                >
                  <i className="text-lg lg:text-2xl fab fa-telegram-plane" />
                  <span className="text-base md:text-xl ml-2">
                    +233576621657
                  </span>
                </a>
                <a
                  className={
                    'border-2 border-black px-2 md:px-3 py-1 md:py-2 flex items-center'
                  }
                  href="mailto:frimpongi50@gmail.com"
                >
                  <i className="text-lg lg:text-2xl fas fa-envelope" />
                  <span className="text-base md:text-xl ml-2">
                    frimpongi50@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{ backgroundImage: `url(/assets/images/bg2.jpg)` }}
        className="h-40 object-contain"
      />
    </div>
  );
}
