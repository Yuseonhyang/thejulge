import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MyPage from './pages/myPage';
import PostId from './pages/postId';
import { AuthLayout } from './components/common/Layout/AuthLayout';
import { Layout } from './components/common/Layout';
import StoreRegisterPage from './pages/myStore/Store/StoreRegisterPage';
import MyStorePage from './pages/myStore';
import StoreEditPage from './pages/myStore/Store/StoreEditPage';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="mystore" element={<MyStorePage />}>
              <Route path="store/register" element={<StoreRegisterPage />} />
              <Route path="store/edit" element={<StoreEditPage />} />
              <Route path="posts/:postId" element={<PostId />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
