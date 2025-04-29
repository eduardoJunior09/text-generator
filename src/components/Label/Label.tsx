interface Props {
  label: string;
}

export default function Label({ label }: Props) {
  return <p className="font-semibold">{label}</p>;
}
