import React, { useState } from 'react';
import { PostsContext } from './PostsContext';

function PostsProvider(props) {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    fetch(process.env.REACT_APP_URL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <PostsContext.Provider value={{ posts, getPosts }}>
      {props.children}
    </PostsContext.Provider>
  );
}

export default PostsProvider;
