import EventItem from "./event-item";
import styles from "./event-list.module.css";

function EventList(props) {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => {
        return <EventItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
export default EventList;
