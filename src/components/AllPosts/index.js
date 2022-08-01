import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PostsContext } from '../../contexts/PostsContext';

import PostItem from '../PostItem';

function AllPosts() {
  const { posts, getPosts } = useContext(PostsContext);

  useEffect(() => {
    getPosts();
  }, []);

  if (posts?.length < 1)
    return (
      <div className="card">
        <div className="card-body">
          <p className="card-text">It's time to add your first post</p>
        </div>
      </div>
    );

  return (
    <ul>
      {posts?.map((post) => (
        <li className="post" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <PostItem
              id={post.id}
              content={post.content}
              created={post.created}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AllPosts;
