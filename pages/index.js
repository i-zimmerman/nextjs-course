import fs from "fs";
import path from "path";

function HomePage(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy.json");
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    // will render 404 page if set to true
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    // amt of seconds after which next page request
    // will regenerate the page on the server
    revalidate: 10,
  };
}

export default HomePage;
