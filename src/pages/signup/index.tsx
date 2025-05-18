import AuthForm from '../../components/AuthForm';

export default function SignupPage() {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <img src="src/public/images/logo.png" className="h-9.5 w-52 md:h-[45px] md:w-62" />
      <AuthForm type="signup" />
    </div>
  );
}
