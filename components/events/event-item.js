import Link from "next/link";

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
    <li>
      <img src={"/" + item.image} alt={item.title} />
      <div>
        <div>
          <h2>{item.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedLocation}</address>
          </div>
          <Link href={exploreLink}>Explore event</Link>
        </div>
        <div></div>
      </div>
    </li>
  );
}

export default EventItem;
