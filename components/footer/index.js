import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link
        href="https://harun-hatiboglu-portfolio.netlify.app/"
        target="_blank"
      >
        Harun Hatiboglu
      </Link>
    </footer>
  );
}

export { Footer };
