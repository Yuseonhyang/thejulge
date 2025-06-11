import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MyPage from './pages/myPage';
import { AuthLayout } from './components/common/Layout/AuthLayout';
import { Layout } from './components/common/Layout';
import MyStorePage from './pages/myStore';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import StoreUpsertPage from './pages/myStore/storeUpsertPage';
import NoticePage from './pages/noticeIdPage';
import NoticeUpsertPage from './pages/myStore/noticeUpsertPage';
import NoticeListPage from './pages/noticeListPage';

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
            <Route path="myprofile" element={<MyPage />} />
            <Route path="mystore" element={<MyStorePage />} />
            <Route path="mystore/register" element={<StoreUpsertPage />} />
            <Route path="mystore/edit" element={<StoreUpsertPage />} />
            <Route path="mystore/notice/register" element={<NoticeUpsertPage />} />
            <Route path="mystore/notice/edit" element={<NoticeUpsertPage />} />
            <Route path="mystore/notices/:noticeId" element={<NoticePage />} />

            <Route path="notices" element={<NoticeListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
