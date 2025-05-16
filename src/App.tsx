import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUP from './pages/signup';
import MyPage from './pages/myPage';
import PostList from './pages/post/index';
import PostId from './pages/postId';
import { AuthLayout } from './components/common/Layout/AuthLayout';
import { Layout } from './components/common/Layout';
import StoreRegisterPage from './pages/myStore/Store/StoreRegisterPage';
import MyStorePage from './pages/myStore';
import StoreEditPage from './pages/myStore/Store/StoreEditPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUP />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="mystore" element={<MyStorePage />}>
            <Route path="store/register" element={<StoreRegisterPage />} />
            <Route path="store/edit" element={<StoreEditPage />} />
          </Route>
          <Route path="posts" element={<PostList />} />
          <Route path="posts/:postId" element={<PostId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
