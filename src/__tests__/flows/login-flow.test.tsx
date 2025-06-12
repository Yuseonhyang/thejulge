jest.resetModules();
jest.mock('axios');

jest.mock('../../lib/instance.ts', () => ({
  BASE_URL: 'https://mock-api.test',
}));

import axios, { AxiosInstance } from 'axios';
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockAxiosInstance = {
  interceptors: {
    request: {
      use: jest.fn(),
    },
    response: {
      use: jest.fn(),
    },
  },
  post: jest.fn(),
  get: jest.fn(),
} as unknown as jest.Mocked<AxiosInstance>;
mockedAxios.create.mockReturnValue(mockAxiosInstance);

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../../pages/login';
import { AUTH_BUTTON } from '../../constants/button';

test('사용자는 이메일과 비밀번호로 로그인할 수 있다', async () => {
  mockAxiosInstance.post.mockResolvedValue({
    data: { accessToken: 'fake-token' },
  });

  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

  userEvent.type(screen.getByPlaceholderText('이메일을 입력해주세요'), 'test00@test.com');
  userEvent.type(screen.getByPlaceholderText('비밀번호를 입력해주세요'), '1234abcd');

  userEvent.click(screen.getByRole('button', { name: AUTH_BUTTON.login }));

  await waitFor(() => {
    expect(localStorage.setItem('accessToken', 'fake-token'));
  });
});
