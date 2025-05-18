import { LoginFormData, SignupFormData } from './types/auth';

export const INITIAL_LOGIN_VALUE: LoginFormData = {
  email: '',
  password: '',
};

export const INITIAL_SIGNUP_VALUE: SignupFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  type: 'employee',
};
