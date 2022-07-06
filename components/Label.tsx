import Icon from '@/components/Icon';

type Type = {
  label: number;
  icon: number;
  enabled: boolean;
  onClick: (label: number) => void;
}

const Label = ({ label, icon, enabled = false, onClick }: Type) => {
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

export default Label
