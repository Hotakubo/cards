import React from 'react';
import { MdAccountBox } from "react-icons/md";

const read = (icon: number) => {
  switch (icon) {
    case 23:
      return <MdAccountBox></MdAccountBox>

    default:
      return <div>{icon}</div>
  }
}

export default function Labels({ icon }: { icon: number }) {
  return (
    <>{read(icon)}</>
  );
}
