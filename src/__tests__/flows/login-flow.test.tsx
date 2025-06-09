import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { PLACEHOLDERS } from '../../constants/placeholders';
import LoginPage from '../../pages/login';

test('사용자는 이메일과 비밀번호로 로그인할 수 있다', async () => {
  render(<LoginPage />);

  userEvent.type(screen.getByPlaceholderText(PLACEHOLDERS.EMAIL), 'test00@test.com');
  userEvent.type(screen.getByPlaceholderText(PLACEHOLDERS.PASSWORD), '1234abcd');
  userEvent.click(screen.getByText('로그인'));

  await waitFor(() => {
    expect(localStorage.getItem('accessToken')).toBeTruthy();
  });
});
