import type { Identifier, XYCoord } from 'dnd-core'
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Icon from '@/components/Icon';

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

  const [{ isDragging }, drag] = useDrag({
    type: 'LABEL',
    item: () => {
      return {
        index: index,
        label: label
      }
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      }
    }
  })

  const [{ handlerId }, drop] = useDrop<TypeItem, void, { handlerId: Identifier | null }>({
    accept: 'LABEL',
    collect: (monitor) => {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover: (item, monitor) => {
      if (!ref.current) return

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      const { top, bottom } = ref.current.getBoundingClientRect()

      const hoverMiddleY = (bottom - top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

      update(dragIndex, hoverIndex)

      item.index = hoverIndex
    }
  })

  drag(drop(ref))

  return (
    <div
      ref={ref}
      key={label}
      className="cursor-pointer"
      onClick={() => onClick(label)}
      data-handler-id={handlerId}
    >
      <Icon icon={icon} enabled={enabled}></Icon>
    </div>
  );
};

export default Label;
