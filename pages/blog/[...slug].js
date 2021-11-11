import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();
  // catch all file
  // router will catch anything after blog
  // and made available as array on the router.query[slugName]

  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
}

export default BlogPostPage;
