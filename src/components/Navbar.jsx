import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "@/styles/components/navbar.module.scss";

function Navbar() {
  const router = useRouter()
  return (
    <div className={styles.navbar}>
      <div className={styles.main}>
        <Image
        onClick={()=> {router.push("/")}}
          className={styles.logo}
          width={52}
          height={52}
          src="/icons/logo.svg"
        />
        <div className={styles.pname}>
          <p>Whatsapp</p>
          <p>Wrapped</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
