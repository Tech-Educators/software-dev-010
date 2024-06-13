// useEffect is a function that runs whenever the page loads
// we can also make it run whenever state changes
import { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // inside the CBF of my useEffect, anything I write will happen ONCE when the page loads
    getPosts();
  }, []);

  async function getPosts() {
    console.log("I just ran once (twice in dev mode)");
    // here we are asking for the response from the jsonplaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // because fetch doesn't directly return the data, we need to get it with the .JSON method
    const json = await response.json();

    setPosts(json);
  }

  return (
    <div>
      <h1>useEffect & fetch</h1>
      <p>Our getPosts function is called inside our useEffect</p>
      <p>
        This means it will run ONCE and the changing of posts state will not
        cause the function to run again
      </p>
      <p>
        Think of useEffect in this instance as a bubble around our function,
        pretecting it from infinite loops
      </p>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
