import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

// we dont set href on <a></a>
// will be automatically added by Link
const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
