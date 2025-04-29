interface Option {
  label: string;
  value: string;
}

interface Props {
  name: string;
  options: Option[];
}

export default function InputSelect({ name, options }: Props) {
  return (
    <select
      name={name}
      className="bg-background-10 border border-text text-text text-sm rounded-md focus:bg-background-10 focus:border-text block w-full p-1 outline-none transition duration-300 ease-in-out"
    >
      {options.map((opt: Option) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
