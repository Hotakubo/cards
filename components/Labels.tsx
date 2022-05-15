import type { TypeLabel } from '@/database/labels';
import Icon from '@/components/Icon';

type Type = {
  labels: TypeLabel[];
  label: number;
  onLabel: (label: number) => void;
}

export default function Labels({ labels, label, onLabel }: Type) {
  const renderLabels = labels.map(body => {
    if (label === body.label) {
      return (
        <div
          key={body.label}
          onClick={() => onLabel(body.label)}
          className="cursor-pointer"
        >
          <div className="bg-blue-500">
            <Icon icon={body.icon}></Icon>
          </div>
        </div>
      );
    }

    return (
      <div
        key={body.label}
        onClick={() => onLabel(body.label)}
        className="cursor-pointer"
      >
        <Icon icon={body.icon}></Icon>
      </div>
    );
});

  return (
    <div className="grid gap-2 grid-cols-4 auto-rows-min m-4">{renderLabels}</div>
  );
}
