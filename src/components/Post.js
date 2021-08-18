import React from "react";
import "./Post.scss";

const formatDateTime = (date, timezone) => {
  const dateTimeByTimeZone = new Date(
    new Date(date).toLocaleString("en-us", { timeZone: timezone })
  );
  const dateString = dateTimeByTimeZone.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // hourCycle: "h24",
  });
  const hours = addZero(dateTimeByTimeZone.getHours());
  const minutes = addZero(dateTimeByTimeZone.getMinutes());
  return `${dateString}, ${hours}:${minutes}`;
};

const addZero = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

function Post({ post, timezone }) {
  return (
    <div className="post">
      <div className="post__author">
        <img src={post.avatar_url} alt={post.name} />
        <div className="post__author__name">{post.name}</div>
        <div className="post__author__iat">
          posted on {formatDateTime(post.created_at, timezone)}
        </div>
      </div>
      <div className="post__content">
        <img src={post.image_url} alt={post.title} />
        <div className="post__detail">
          <div className="post__title">{post.title}</div>
          <p className="post__description">{post.body}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
