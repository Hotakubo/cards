import type { TypeLabel } from '@/database/labels';

type Type = {
  labels: TypeLabel[];
  onLabel: (label: number) => void;
}

export default function Labels({ labels, onLabel }: Type) {
  const renderLabels = labels.map(body => <div
    key={body.label}
    onClick={() => onLabel(body.label)}
    className="cursor-pointer"
  >
    {body.icon}
  </div>);

  return (
    <div className="w-8">{renderLabels}</div>
  );
}
