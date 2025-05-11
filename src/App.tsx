import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUP from './pages/signup';
import MyPage from './pages/myPage';
import MyStore from './pages/myStore';
import Post from './pages/myStore/post';
import CreatePost from './pages/myStore/post/create';
import PostList from './pages/post/index';
import PostId from './pages/postId';
import { Layout } from './components/common/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUP />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="mystore" element={<MyStore />}>
            <Route path="post" element={<Post />} />
            <Route path="post/create" element={<CreatePost />} />
          </Route>
          <Route path="posts" element={<PostList />} />
          <Route path="posts/:postId" element={<PostId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
