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
import SignupPage from '../../pages/signup';
import { AUTH_BUTTON } from '../../constants/button';

test('사용자는 이메일,비번, 비번확인, 유저타입을 지정하여 회원가입 할수 있다', async () => {
  mockAxiosInstance.post.mockResolvedValue({
    data: { accessToken: 'fake-token' },
  });

  render(
    <MemoryRouter>
      <SignupPage />
    </MemoryRouter>
  );

  const randomEmail = `user${Math.floor(Math.random() * 10000)}@test.com`;

  userEvent.type(screen.getByPlaceholderText('이메일을 입력해주세요'), randomEmail);
  userEvent.type(screen.getByPlaceholderText('비밀번호를 입력해주세요'), '1234abcd');
  userEvent.type(screen.getByPlaceholderText('비밀번호를 다시 입력해주세요'), '1234abcd');

  userEvent.click(screen.getByRole('button', { name: AUTH_BUTTON.signup }));

  await waitFor(() => {
    expect(localStorage.setItem('accessToken', 'fake-token'));
  });
});
