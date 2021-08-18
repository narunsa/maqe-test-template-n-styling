import { useState, useEffect } from "react";
import Feed from "./components/Feed";

const sortByDate = (data) => {};

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://maqe.github.io/json/authors.json"),
      fetch("http://maqe.github.io/json/posts.json"),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then((data) => {
        const authors = data[0];
        const newPosts = data[1];
        console.log(newPosts);
        newPosts.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
        setPosts(
          newPosts.map((post) => {
            const author = authors.find((data) => {
              return data.id === post.author_id;
            });
            // authors.foreach((author) => {
            //   if (author.id === post.author_id) {
            //     return {
            //       name: author.name,
            //       avatar_url: author.avatar_url,
            //       ...post,
            //     };
            //   }
            // });
            return {
              name: author?.name,
              avatar_url: author?.avatar_url,
              ...post,
            };
          })
        );
      });
  }, []);

  return (
    <div>
      <h1>MAQE Forum</h1>
      <span>Your current timezome is: Asia/Bangkok</span>
      <Feed posts={posts} />
    </div>
  );
}

export default App;
