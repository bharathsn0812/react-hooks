import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState("");

  useEffect(() => {
    const url = postId
      ? `https://jsonplaceholder.typicode.com/posts/${postId}`
      : "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(Array.isArray(data) ? data : [data]))
      .catch((err) => console.log(err));
  }, [postId]);

  const handleInputChange = (e) => {
    setPostId(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={postId}
        onChange={handleInputChange}
        placeholder="Enter post ID"
      />
      
      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;