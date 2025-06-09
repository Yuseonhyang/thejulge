import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../constants/path';

export default function useHeaderHandler() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState('');

  const handleChangeKeyword = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleSubmitKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`${PATHS.NOTICES}?search=${keyword}`);
  };

  return { handleChangeKeyword, keyword, handleSubmitKeyword };
}
