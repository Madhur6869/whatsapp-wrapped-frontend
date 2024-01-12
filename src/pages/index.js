import Head from "next/head";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Steps from "@/components/Steps";

import styles from "@/styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp Wrapped</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <p className={styles.tagline}>
          Whatsapp Wrapped gives a summary <br />
          of your chats!
        </p>
        <Steps />
        <section className={styles.upload}>
          <Image className={styles.icon} src="/icons/upload.svg" height={128} width={128} />
        <p className={styles.info}>Drag and drop or click to upload a file</p>
        </section>
      </main>
    </>
  );
}
