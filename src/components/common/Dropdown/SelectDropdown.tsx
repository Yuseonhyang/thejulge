import clsx from 'clsx';
import Dropdown from '.';
import { defaultContainerStyle, defaultOptionStyle } from './style';
import { useState } from 'react';
import SelectDropdownIcon from '../../../assets/icons/SelectDropdownIcon';

interface Props {
  options: string[];
  onSelect: (option: string) => void;

  currentOption?: string;
  triggerWidth?: string;
  containerWidth?: string;
  statement?: string;
  optionStyle?: string;
}

export default function SelectDropdown({
  options,
  onSelect,
  statement = 'right-0 left-0',
  ...props
}: Props) {
  const [selectedOption, setSelectedOption] = useState(props.currentOption || null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div>
      <Dropdown
        trigger={
          <div className={`w-[${props.triggerWidth}px]`} onClick={() => setIsOpen((prev) => !prev)}>
            <Trigger selectedOption={selectedOption} isOpen={isOpen} />
          </div>
        }
      >
        {({ close }) => (
          <ul
            className={clsx(defaultContainerStyle, statement, 'bg-white')}
            style={{ width: `${props.containerWidth}px` }}
          >
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
    </div>
  );
}

function Trigger({ ...props }: { selectedOption: string | null; isOpen: boolean }) {
  return (
    <div className="flex w-full items-center justify-between px-5 py-4">
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
