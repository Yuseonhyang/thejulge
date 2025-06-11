import clsx from 'clsx';
import Dropdown from '.';
import { defaultContainerStyle, defaultOptionStyle } from './style';
import { useState } from 'react';
import SelectDropdownIcon from '../../../assets/icons/SelectDropdownIcon';

interface Props {
  options: { label: string; value: string }[];
  onSelect: (option: string) => void;
  currentOption: string;

  label?: string;
  placement?: string;
}

export default function SortDropdown({
  label,
  options,
  onSelect,
  placement = 'right-0 top-[calc(100%+8px)]',
  currentOption,
}: Props) {
  const [selectedOption, setSelectedOption] = useState(currentOption || null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: { label: string; value: string }) => {
    setSelectedOption(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <Dropdown
      label={label}
      trigger={
        <div onClick={() => setIsOpen((prev) => !prev)}>
          <Trigger selectedOption={selectedOption} isOpen={isOpen} />
        </div>
      }
    >
      {({ close }) => (
        <ul className={clsx(defaultContainerStyle, placement, 'w-full bg-white')}>
          {options.map((option, idx) => (
            <li
              key={option.value}
              onClick={() => {
                handleSelectOption(option);
                close();
              }}
              className={clsx(
                defaultOptionStyle,
                idx !== 0 && 'border-gray20 border-t',
                'text-md-bold'
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </Dropdown>
  );
}

function Trigger({ ...props }: { selectedOption: string | null; isOpen: boolean }) {
  return (
    <div className="border-gray30 flex w-28 items-center justify-between rounded-md border-1 px-3 py-1.5">
      <p
        className={clsx(
          'text-md-bold text-left',
          props.selectedOption && 'text-black',
          !props.selectedOption && 'text-gray40'
        )}
      >
        {props.selectedOption || '선택'}
      </p>
      <SelectDropdownIcon direction={props.isOpen ? 'up' : 'down'} />
    </div>
  );
}
