import React from "react";
import'./userPost.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const UserPost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [id]);

  return (
    <Container className="bg-secondary post_wrapper m-5 p-5 mx-auto">
      <h3 > Posts </h3>
      {posts.map((post, index) => (
        <p key={index}>{post.title}</p>
      ))}
    </Container>
  );
};

export default UserPost;
