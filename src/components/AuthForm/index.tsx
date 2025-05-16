import InputField from '../../components/common/InputField';
import { AUTH_BUTTON } from '../../constants/button';
import { PLACEHOLDERS } from '../../constants/placeholders';
import Button from '../common/Button';

interface Props {
  type: 'login' | 'signup';
}

export default function AuthForm({ type }: Props) {
  const footerText = type === 'login' ? '회원이 아니신가요? ' : '이미 가입하셨나요? ';
  const href = type === 'login' ? '/signup' : '/login';
  const hrefText = type === 'login' ? '회원가입하기' : '로그인하기';

  return (
    <section className="flex w-full flex-col items-center gap-5">
      <form className="flex w-full flex-col gap-7">
        <InputField
          label="이메일"
          inputType="input"
          onChange={() => {}}
          placeholder={PLACEHOLDERS.default}
        />
        <InputField
          label="비밀번호"
          inputType="input"
          onChange={() => {}}
          placeholder={PLACEHOLDERS.default}
        />
        <Button variant="primary" size="fullWidth">
          {AUTH_BUTTON.login}
        </Button>
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
