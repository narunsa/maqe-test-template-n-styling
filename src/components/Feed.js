import React from "react";
import "./Feed.scss";
import Post from "./Post";

function Feed({ posts }) {
  return (
    <div className="feed">
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div>
  );
}

export default Feed;
