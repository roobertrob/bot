import { RadioGroup } from '@headlessui/react';
import { RadioGroupProps } from 'types';

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

const RadioGroupComponent = ({
  options,
  selected,
  onChange,
}: RadioGroupProps) => (
  <RadioGroup
    value={selected}
    onChange={() => onChange}
    data-testid="radio-group-component"
  >
    <div className="space-y-2">
      {options.map((option) => (
        <RadioGroup.Option
          key={option.name}
          value={option.id}
          className={({ checked, active }) =>
            classNames(
              checked ? 'bg-orangeWarning text-gray2' : 'border-transparent ',
              active ? 'bg-orangeWarning text-gray2' : 'bg-white border-gray2',
              'relative block border rounded-sm shadow-sm px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none h-[66px] hover:opacity-80',
            )
          }
        >
          {({ active, checked }) => (
            <span className="flex items-center ">
              <span
                className={classNames(
                  active ? 'text-white' : 'text-body2',
                  checked ? 'text-white' : 'text-body-2',
                  'text-sm flex flex-col',
                )}
              >
                <RadioGroup.Label as="span" className="font-medium">
                  {option.name}
                </RadioGroup.Label>
              </span>
            </span>
          )}
        </RadioGroup.Option>
      ))}
    </div>
  </RadioGroup>
);

export { RadioGroupComponent };
