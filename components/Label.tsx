import { useRef } from 'react'
import Icon from '@/components/Icon'

type Type = {
  index: number;
  label: number;
  icon: number;
  enabled: boolean;
  onClick: (label: number) => void;
  update: (dragIndex: number, hoverIndex: number) => void;
}

type TypeItem = {
  index: number;
  label: number;
  type: string;
}

const Label = ({ index, label, icon, enabled = false, onClick, update }: Type) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      key={label}
      className="cursor-pointer"
      onClick={() => onClick(label)}
    >
      <Icon icon={icon} enabled={enabled}></Icon>
    </div>
  )
}

export default Label
