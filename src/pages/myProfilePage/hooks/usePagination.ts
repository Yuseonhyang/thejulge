import { useState } from 'react';

export default function usePagination(totalPage: number) {
  const PAGES_SIZE = 7;

  const pagesArray = Array.from({ length: totalPage }, (_, i) => i + 1);

  const [startIndex, setStartIndex] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(1);

  const visiblePages = pagesArray.slice(startIndex, startIndex + PAGES_SIZE);

  const changePage = (page: number) => {
    setSelectedNumber(page);
  };

  const clickNavigationButton = (variant: string) => {
    if (variant === 'prev') {
      const newPage = selectedNumber - 1;
      if (newPage <= startIndex) {
        setStartIndex(newPage);
      }
      setSelectedNumber(newPage);
    }
    if (variant === 'next') {
      const newPage = selectedNumber + 1;
      if (newPage > startIndex + PAGES_SIZE - 1) {
        setStartIndex((prev) => Math.min(prev + 1, totalPage - PAGES_SIZE));
      }
      setSelectedNumber(newPage);
    }
  };

  return {
    visiblePages,
    selectedNumber,
    changePage,
    clickNavigationButton,
  };
}
