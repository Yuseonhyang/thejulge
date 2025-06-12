import { clsx } from 'clsx';
import UserTypeCheckIcon from '../../assets/icons/UserTypeCheckIcon';
import InputField from '../../components/common/InputField';
import { AUTH_BUTTON } from '../../constants/button';
import { PLACEHOLDERS } from '../../constants/placeholders';
import Button from '../common/Button';
import useAuth from './hooks/useAuth';
import { useState } from 'react';

interface Props {
  type: 'login' | 'signup';
}

export default function AuthForm({ type }: Props) {
  const footerText = type === 'login' ? '회원이 아니신가요? ' : '이미 가입하셨나요? ';
  const href = type === 'login' ? '/signup' : '/login';
  const hrefText = type === 'login' ? '회원가입하기' : '로그인하기';

  const { handleChangeAuthForm, loginUser, signupUser } = useAuth(type);

  return (
    <section className="flex w-full flex-col items-center gap-5">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          {
            e.preventDefault();
            type === 'login' ? loginUser() : signupUser();
          }
        }}
        className="flex w-full flex-col gap-7"
      >
        <InputField
          label="이메일"
          inputType="input"
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            handleChangeAuthForm('email', e.target.value)
          }
          placeholder={PLACEHOLDERS.EMAIL}
        />
        <InputField
          label="비밀번호"
          inputType="input"
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            handleChangeAuthForm('password', e.target.value)
          }
          placeholder={PLACEHOLDERS.PASSWORD}
        />
        {type === 'signup' && (
          <>
            <InputField
              label="비밀번호 확인"
              inputType="input"
              onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                handleChangeAuthForm('confirmPassword', e.target.value)
              }
              placeholder={PLACEHOLDERS.CONFIRM_PASSWORD}
            />
            <SignupUserTypeField onChange={(value) => handleChangeAuthForm('type', value)} />
          </>
        )}
        <div className="h-12 w-full">
          <Button
            variant="primary"
            type="submit"
            name="action"
            value="submit"
            size="parent-dependent"
          >
            {AUTH_BUTTON[type]}
          </Button>
        </div>
      </form>
      <p>
        {footerText}
        <a href={href} className="underline">
          {hrefText}
        </a>
      </p>
    </section>
  );
}

function SignupUserTypeField({ onChange }: { onChange: (value: string) => void }) {
  const [userType, setUserType] = useState('employee');

  const changeUserType = (value: string) => {
    setUserType(value);
    onChange(value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label>회원 유형</label>
      <div className="flex gap-4">
        <div
          className={clsx(
            'flex h-[50px] w-[167px] items-center justify-center rounded-[30px] border-1',
            userType === 'employee' ? 'border-primary' : 'border-gray30'
          )}
        >
          <Button
            type="button"
            value="employee"
            onClick={() => changeUserType('employee')}
            className="text-md-rg flex gap-2"
          >
            <UserTypeCheckIcon isChecked={userType === 'employee'} />
            알바님
          </Button>
        </div>
        <div
          className={clsx(
            'flex h-[50px] w-[167px] items-center justify-center rounded-[30px] border-1',
            userType === 'employer' ? 'border-primary' : 'border-gray30'
          )}
        >
          <Button
            type="button"
            value="employer"
            onClick={() => changeUserType('employer')}
            className="text-md-rg flex gap-2"
          >
            <UserTypeCheckIcon isChecked={userType === 'employer'} />
            사장님
          </Button>
        </div>
      </div>
    </div>
  );
}
