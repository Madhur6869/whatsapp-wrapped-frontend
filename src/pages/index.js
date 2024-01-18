import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import Navbar from "@/components/Navbar";
import Steps from "@/components/Steps";

import styles from "@/styles/home.module.scss";

export default function Home() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    
  };

  const testBackend = async () => {
    await fetch('http://localhost:8000/test')
  }

  const backendFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', uploadedFile);
    try {
      const response = await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        console.error('File upload failed:', response.statusText);
      } else {
        console.log('File uploaded successfully');
      }
    } catch (error) {
      console.error('Error in upload backend API call:', error);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
    
  };

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
        {!uploadedFile && <Steps />}
        <section
          className={styles.upload}
          onDragOver={(event) => {
            if (!uploadedFile) handleDragOver(event);
          }}
          onDrop={handleDrop}
        >
          {!uploadedFile && (
            <>
              <label htmlFor="fileInput">
                <Image
                  className={styles.icon}
                  src="/icons/upload.svg"
                  height={64}
                  width={64}
                />
              </label>
              <p className={styles.info}>
                Drag and drop or click to upload a txt file
              </p>
              <input
                type="file"
                id="fileInput"
                accept=".txt"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
            </>
          )}
          {uploadedFile && (
            <div className={styles.uploaded}>
              <Image src="/icons/file.svg" width={200} height={200} />
              <p className={styles.filename}>{uploadedFile.name}</p>
              <button 
                className={styles.submit}
                onClick={() => backendFileUpload()}> 
                Submit
              </button>
              <button
                className={styles.remove}
                onClick={() => setUploadedFile(null)}
              >
                Remove
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
