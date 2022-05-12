import type { TypeLabel } from '@/database/labels';
import Icons from '@/components/Icons';

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
    <Icons icon={body.icon}></Icons>
  </div>);

  return (
    <div className="grid gap-2 grid-cols-4 auto-rows-min m-4">{renderLabels}</div>
  );
}
