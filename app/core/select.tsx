import * as RadixSelect from '@radix-ui/react-select'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'

interface Option {
  value: string
  label: string
  onClick?: () => void
}

interface GroupOfOptions {
  label?: string
  options: Option[]
}

interface SelectProps {
  placeholder?: string
  options?: Option[]
  groupedOptions?: GroupOfOptions[]
  contentClassName?: string
}

function Options({ options }: { options: Option[] }) {
  return (
    <>
      {options.map(option => (
        <RadixSelect.Item
          value={option.value}
          key={option.value}
          className={`
                text-sm rounded-sm dark:text-white text-gray-600 flex items-center px-8 h-9 relative select-none
                outline-none focus:outline-none cursor-pointer hover:bg-gray-100 hover:dark:bg-[#444] duration-200
                `}
          onClick={option.onClick}
        >
          <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
          <RadixSelect.ItemIndicator
            className={`
                absolute left-0 w-6 inline-flex items-center justify-center
                `}
          >
            <CheckIcon />
          </RadixSelect.ItemIndicator>
        </RadixSelect.Item>
      ))}
    </>
  )
}

function GroupedOptions({ groups }: { groups: GroupOfOptions[] }) {
  return (
    <>
      {groups.map((group, idx) => (
        <span key={group.label + idx.toString()}>
          <RadixSelect.Group>
            {group.label ? (
              <RadixSelect.Label className={`text-xs px-4 py-2 text-gray-400`}>
                {group.label}
              </RadixSelect.Label>
            ) : null}
            <Options options={group.options} />
          </RadixSelect.Group>
          {idx !== groups.length - 1 && (
            <RadixSelect.Separator
              className={`h-px bg-gray-100 dark:bg-white/10 m-1`}
            />
          )}
        </span>
      ))}
    </>
  )
}

export function Select({
  contentClassName,
  placeholder,
  options,
  groupedOptions,
}: SelectProps) {
  return (
    <Dropdown
      groupedOptions={groupedOptions}
      options={options}
      contentClassName={contentClassName}
    >
      <span
        className={`
        inline-flex items-center justify-center rounded-md px-4 h-9 text-sm
        gap-2 bg-white dark:bg-[#333] border dark:border-white/10 text-gray-400 dark:text-[#777] duration-200 
        focus:!outline-none
      `}
      >
        <RadixSelect.Value placeholder={placeholder ?? 'Select something…'} />
        <RadixSelect.Icon className="text-[10px]">
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </span>
    </Dropdown>
  )
}

interface DropdownProps {
  children: React.ReactNode
  options?: Option[]
  groupedOptions?: GroupOfOptions[]
  contentClassName?: string
}

export function Dropdown({
  contentClassName,
  children,
  options,
  groupedOptions,
}: DropdownProps) {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="focus:!outline-none">
        <RadixSelect.Value>{children}</RadixSelect.Value>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className={contentClassName ?? ''}>
          <RadixSelect.ScrollUpButton>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="bg-white dark:bg-[#333] py-1 shadow rounded-md">
            {options ? <Options options={options} /> : null}
            {groupedOptions ? <GroupedOptions groups={groupedOptions} /> : null}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton>
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}
