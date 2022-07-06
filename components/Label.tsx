import Icon from '@/components/Icon';

type TypeLabel = {
  label: number;
  icon: number;
  enabled: boolean;
  onClick: (label: number) => void;
}

export default function Label({ label, icon, enabled = false, onClick }: TypeLabel) {
  return (
    <div
      key={label}
      className="cursor-pointer"
      onClick={() => onClick(label)}
    >
      <Icon icon={icon} enabled={enabled}></Icon>
    </div>
  );
}
