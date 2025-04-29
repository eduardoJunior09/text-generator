interface Props {
  text: string;
}

export default function TextArea({ text }: Props) {
  return (
    <div className="w-full h-auto max-h-96 overflow-auto  p-2 border-2 border-text-destaque rounded-md shadow-lg">
    {text}
  </div>
  );
}
