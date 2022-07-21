import React from 'react';
import { Link } from 'react-router-dom';

import AllPosts from '../AllPosts';

function Home() {
  return (
    // <PostsContext.Provider value={data}>
    <div className="home">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to={'/posts/new'}>
          <button className="btn btn-primary me-md-2 add" type="button">
            Add new Post
          </button>
        </Link>
      </div>
      <AllPosts />
    </div>
    // </PostsContext.Provider>
  );
}

export default Home;
