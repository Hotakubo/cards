import React from 'react';
import { MdAccountBox } from "react-icons/md";

const read = (label: number) => {
  switch (label) {
    case 23:
      return <MdAccountBox></MdAccountBox>

    default:
      return <div>{label}</div>
  }
}

export default function Labels({ label }: { label: number }) {
  return (
    <>{read(label)}</>
  );
}
