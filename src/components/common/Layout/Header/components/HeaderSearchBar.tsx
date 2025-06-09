import { PLACEHOLDERS } from '../../../../../constants/placeholders';
import useHeaderHandler from '../../../../../hooks/useSearchBar';
import InputField from '../../../InputField';

export function HeaderSearchBar() {
  const { handleChangeKeyword, keyword, handleSubmitKeyword } = useHeaderHandler();

  return (
    <form onSubmit={(e: React.FormEvent) => handleSubmitKeyword(e)}>
      <InputField
        inputType="search"
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          handleChangeKeyword(e.target.value)
        }
        value={keyword}
        leftSlot={<img src="/src/public/icons/search-icon.svg" />}
        placeholder={PLACEHOLDERS.search}
        id="search"
        className="placeholder:text-gray50"
      />
    </form>
  );
}
