import { JSX } from "react";

interface Props {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
}

export default function Buttontext({ icon, label, onClick }: Props) {
  return (
    <button className="flex items-center justify-center flex-col text-sm cursor-pointer transition duration-300 ease-in-out hover:text-text-destaque"
    onClick={onClick}>
      {icon}
      {label}
    </button>
  );
}
