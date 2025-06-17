import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../constants/path';
import Button from '../../../components/common/Button';
import { ProfileType } from '../types/profile';

interface Props {
  profile: ProfileType;
}

export default function ProfileCard({ profile }: Props) {
  const navigate = useNavigate();
  const { name, phone, address, bio } = profile;

  return (
    <div className="bg-red10 flex h-fit min-h-49 w-full rounded-xl border-1 border-none p-5 md:min-h-64 md:p-8">
      <div className="flex w-full flex-col gap-5 md:gap-7">
        <div className="flex flex-col gap-2 md:gap-3">
          <p className="text-md-bold text-primary md:text-lg-bold">이름</p>
          <p className="text-2xl-bold md:text-3xl-bold">{name}</p>
          <div className="flex items-center gap-1.5">
            <img src="src/public/icons/phone.svg" className="size-4" />
            <p className="text-gray50 text-md-rg md:text-lg-rg">{phone}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <img src="src/public/icons/address.svg" className="size-4" />
            <p className="text-gray50 text-md-rg md:text-lg-rg">선호 지역: {address}</p>
          </div>
        </div>
        <p className="text-md-rg md:text-lg-rg">{bio}</p>
      </div>
      <div className="h-9.5 w-27 md:h-12 md:w-42">
        <Button
          variant="secondary-red"
          size="parent-dependent"
          onClick={() => navigate(PATHS.PROFILE_EDIT)}
        >
          편집하기
        </Button>
      </div>
    </div>
  );
}
