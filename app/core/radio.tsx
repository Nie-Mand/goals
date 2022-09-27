import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

interface Option {
  value: string
  label: string
}

interface RadiosProps {
  defaultValue?: string
  options: Option[]
  name?: string
}

export const Radios = (props: RadiosProps) => (
  <RadioGroupPrimitive.Root
    defaultValue={props.defaultValue}
    name={props.name}
    className="flex items-center space-x-5"
  >
    {props.options.map(option => (
      <label
        htmlFor={option.value}
        key={option.value}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <RadioGroupPrimitive.Item
          className="bg-white w-5 h-5 rounded-full shadow-md"
          value={option.value}
          id={option.value}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center w-full h-full relative after:block after:w-3 after:h-3 after:rounded-full after:bg-red-500" />
        </RadioGroupPrimitive.Item>
        <span className="text-xs font-semibold">{option.label}</span>
      </label>
    ))}
  </RadioGroupPrimitive.Root>
)
