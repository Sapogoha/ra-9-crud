import './App.css';

import NewPost from './components/NewPost';
import Home from './components/Home';
import PostOpened from './components/PostOpened';
import EditPost from './components/EditPost';

import PostsProvider from './contexts/PostsProvider';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="page">
        <PostsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/new" element={<NewPost />} />
            <Route path="/posts/:postId" element={<PostOpened />} />
            <Route path="/posts/:postId/edit" element={<EditPost />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PostsProvider>
      </div>
    </>
  );
}

export default App;
