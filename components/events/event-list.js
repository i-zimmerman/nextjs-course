import EventItem from "./event-item";

function EventList(props) {
  return (
    <ul>
      {props.items.map((item) => {
        return <EventItem key={item.id} item={item} />;
      })}
    </ul>
  );
}
export default EventList;
