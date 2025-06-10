import clsx from 'clsx';
import Dropdown from '.';
import { defaultContainerStyle, defaultOptionStyle } from './style';
import { useEffect, useState } from 'react';
import SelectDropdownIcon from '../../../assets/icons/SelectDropdownIcon';

interface Props {
  options: string[];
  onSelect: (option: string) => void;

  label?: string;
  currentOption?: string;
  containerWidth?: string;
  placement?: string;
  optionStyle?: string;
}

export default function SelectDropdown({
  label,
  options,
  onSelect,
  placement = 'right-0 top-[calc(100%+8px)]',
  currentOption,
  ...props
}: Props) {
  const [selectedOption, setSelectedOption] = useState(currentOption || null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (currentOption) setSelectedOption(currentOption);
  }, [currentOption]);

  return (
    <Dropdown
      label={label}
      trigger={
        <div className="w-full" onClick={() => setIsOpen((prev) => !prev)}>
          <Trigger selectedOption={selectedOption} isOpen={isOpen} />
        </div>
      }
    >
      {({ close }) => (
        <ul className={clsx(defaultContainerStyle, placement, 'w-full bg-white')}>
          {options.map((option, idx) => (
            <li
              key={option + idx}
              onClick={() => {
                handleSelectOption(option);
                close();
              }}
              className={clsx(
                defaultOptionStyle,
                idx !== 0 && 'border-gray20 border-t',
                'text-md-rg',
                props.optionStyle
              )}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </Dropdown>
  );
}

function Trigger({ ...props }: { selectedOption: string | null; isOpen: boolean }) {
  return (
    <div className="border-gray30 flex w-full items-center justify-between rounded-md border-1 px-5 py-4">
      <p
        className={clsx(
          'w-full text-left',
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
