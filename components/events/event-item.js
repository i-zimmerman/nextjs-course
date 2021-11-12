import Link from "next/link";
import Button from "../ui/button";

import styles from "./event-item.module.css";

function EventItem({ item }) {
  const humanReadableDate = new Date(item.date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedLocation = item.location.replace(", ", "\n");

  const exploreLink = `/events/${item.id}`;

  // it is the CONTENT of the public folder will be served by next js
  // so we dont need to prepend / with public
  return (
    <li className={styles.item}>
      <img src={"/" + item.image} alt={item.title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{item.title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>Explore event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
