import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <a href="/portfolio"> Portfolio </a>
          {/* redux state would be lost, send brand new request, new html page */}
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/clients/[id]",
              query: {
                id: 123,
              },
            }}
          >
            Clients
          </Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default HomePage;
