import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useHeaderHandler() {
  const [keyword, setKeyword] = useState('');

  const handleChangeKeyword = (keyword: string) => {
    setKeyword(keyword);
  };
  const handleSubmitKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    const navigate = useNavigate();
    navigate('/notices');
  };

  return { handleChangeKeyword, keyword, handleSubmitKeyword };
}
