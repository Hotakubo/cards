import React from 'react';
import {
  MdAccountBox,
  MdPhoto,
  MdOutlineLanguage,
  MdOutlineMenuBook,
  MdOutlineBookmark,
  MdOutlineBuild,
  MdPerson,
  MdCamera,
  MdShoppingCart,
  MdStore,
  MdError
} from "react-icons/md";

const read = (icon: number) => {
  switch (icon) {
    case 20:
      return <MdOutlineBuild size={30}></MdOutlineBuild>;

    case 23:
      return <MdAccountBox size={30}></MdAccountBox>;

    case 26:
      return <MdCamera size={30}></MdCamera>;

    case 27:
      return <MdStore size={30}></MdStore>;

    case 39:
      return <MdOutlineLanguage size={30}></MdOutlineLanguage>;

    case 44:
      return <MdOutlineBookmark size={30}></MdOutlineBookmark>;

    case 47:
      return <MdPerson size={30}></MdPerson>;

    case 64:
      return <MdError size={30}></MdError>;

    case 74:
      return <MdShoppingCart size={30}></MdShoppingCart>;

    case 81:
      return <MdOutlineMenuBook size={30}></MdOutlineMenuBook>;

    case 88:
      return <MdPhoto size={30}></MdPhoto>;

    default:
      return <div>{icon}</div>;
  }
};

export default function Labels({ icon }: { icon: number }) {
  return (
    <>{read(icon)}</>
  );
}
