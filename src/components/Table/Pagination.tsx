import clsx from 'clsx';
import PaginationArrow from '../../assets/icons/PaginationArrow';
import usePagination from '../../pages/myPage/_myPage/hooks/usePagination';

interface Props {
  hasNext: boolean;
  count: number;
}
export default function Pagination({ hasNext, count: totalPage }: Props) {
  const { visiblePages, selectedNumber, changePage, clickNavigationButton } =
    usePagination(totalPage);

  return (
    <div className="flex items-center gap-5">
      {totalPage > 7 && (
        <button
          value="prev"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            clickNavigationButton(e.currentTarget.value)
          }
          disabled={selectedNumber === 1}
        >
          <PaginationArrow type="prev" navAvailability={selectedNumber !== 1} />
        </button>
      )}
      <div className="flex">
        {visiblePages.map((pageNumber) => {
          return (
            <NumberButton
              key={pageNumber}
              number={pageNumber}
              selectedNumber={selectedNumber}
              onClick={(page: number) => changePage(page)}
            />
          );
        })}
      </div>
      {totalPage > 7 && (
        <button
          value="next"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            clickNavigationButton(e.currentTarget.value)
          }
          disabled={hasNext}
        >
          <PaginationArrow type="next" navAvailability={selectedNumber !== totalPage} />
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
