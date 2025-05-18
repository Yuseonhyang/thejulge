import clsx from 'clsx';
import { useState } from 'react';
import PaginationArrow from '../../../../../assets/icons/PaginationArrow';

export default function Pagination({}) {
  const totalPage = 21;
  const pagesArray = Array.from({ length: totalPage }, (_, i) => i + 1);

  const [visiblePages, setVisiblePages] = useState(
    pagesArray.length > 7 ? [1, 2, 3, 4, 5, 6, 7] : pagesArray
  );
  const [selectedNumber, setSelectedNumber] = useState(1);

  const changePage = (page: number) => {
    // if (selectedNumber === visiblePages[-1]) {
    //   setVisiblePages((prev) => [...prev, page]);
    // }
    // if (selectedNumber === visiblePages[0]) {
    //   setVisiblePages((prev) => [...prev, page]);
    // }
    setSelectedNumber(page);
  };

  return (
    <div className="flex items-center gap-5">
      {pagesArray.length > 5 && (
        <button>
          <PaginationArrow type="prev" navAvailability={false} />
        </button>
      )}
      <div className="flex">
        {visiblePages.map((pageNumber) => {
          return (
            <NumberButton
              number={pageNumber}
              selectedNumber={selectedNumber}
              onClick={(page: number) => changePage(page)}
            />
          );
        })}
      </div>
      {pagesArray.length > 5 && (
        <button>
          <PaginationArrow type="next" navAvailability={true} />
        </button>
      )}
    </div>
  );
}

interface PaginationButtonProps {
  number: number;
  selectedNumber: number;
  onClick: (page: number) => void;
}
function NumberButton({ number, selectedNumber, onClick }: PaginationButtonProps) {
  const isSelected = selectedNumber === number;
  return (
    <button
      value={number}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        onClick(Number(e.currentTarget.value));
      }}
      className={clsx(
        'text-md-rg flex size-8 items-center justify-center rounded-md md:size-10',
        isSelected ? 'bg-red30 text-white' : 'bg-white text-black'
      )}
    >
      {number}
    </button>
  );
}
