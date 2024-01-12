import Head from "next/head";
import Navbar from "@/components/Navbar";
import Steps from "@/components/Steps";

import styles from "@/styles/home.module.scss"

export default function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp Wrapped</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <p className={styles.tagline}>
          Whatsapp Wrapped gives a summary <br />
          of your chats!
        </p>
        <Steps/>
      </main>
    </>
  );
}
