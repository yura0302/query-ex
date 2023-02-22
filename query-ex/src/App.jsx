import "./App.css";
import { useQuery, useMutation } from "react-query";
const POSTS = [
  { id: 1, title: "POST 1" },
  { id: 2, title: "POST 2" },
];

function App() {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  if (postsQuery.isLoading) return <h1>Loading...</h1>;
  if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return <h1>TanStack Query</h1>;
}

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
