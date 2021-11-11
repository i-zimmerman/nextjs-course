import { useRouter } from "next/router";

// withRouter - HOC for classes

function PortfolioProjectPage() {
  const router = useRouter();

  // console.log(router.pathname); inferred path
  // console.log(router.query); access to the concrete data that is encoded in the url

  return <div>Project</div>;
}
export default PortfolioProjectPage;
