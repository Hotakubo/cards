import type { TypeLabel } from '@/database/labels';

type Type = {
  labels: TypeLabel[];
  onLabel: (label: number) => void;
}

export default function Labels({ labels, onLabel }: Type) {
  const renderLabels = labels.map(body => <li
    key={body.label}
    onClick={() => onLabel(body.label)}
    className="cursor-pointer"
  >
    {body.icon}
  </li>);

  return (
    <ul className="w-8">{renderLabels}</ul>
  );
}
