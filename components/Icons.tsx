import React from 'react';
import { MdAccountBox, MdPhoto } from "react-icons/md";

const read = (icon: number) => {
  switch (icon) {
    case 23:
      return <MdAccountBox size={30}></MdAccountBox>

    case 88:
      return <MdPhoto size={30}></MdPhoto>

    default:
      return <div>{icon}</div>
  }
}

export default function Labels({ icon }: { icon: number }) {
  return (
    <>{read(icon)}</>
  );
}
