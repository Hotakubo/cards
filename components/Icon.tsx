import React from 'react'
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
} from "react-icons/md"

const read = (icon: number) => {
  const size = 30

  switch (icon) {
    case 20:
      return <MdOutlineBuild size={size}></MdOutlineBuild>

    case 23:
      return <MdAccountBox size={size}></MdAccountBox>

    case 26:
      return <MdCamera size={size}></MdCamera>

    case 27:
      return <MdStore size={size}></MdStore>

    case 39:
      return <MdOutlineLanguage size={size}></MdOutlineLanguage>

    case 44:
      return <MdOutlineBookmark size={size}></MdOutlineBookmark>

    case 47:
      return <MdPerson size={size}></MdPerson>

    case 64:
      return <MdError size={size}></MdError>

    case 74:
      return <MdShoppingCart size={size}></MdShoppingCart>

    case 81:
      return <MdOutlineMenuBook size={size}></MdOutlineMenuBook>

    case 88:
      return <MdPhoto size={size}></MdPhoto>

    default:
      return <div>{icon}</div>
  }
}

const Icon = ({ icon, enabled = false }: { icon: number, enabled: boolean }) => {
  if (enabled) {
    return (
      <div className="bg-blue-500">
        {read(icon)}
      </div>
    )
  }

  return (
    <>{read(icon)}</>
  )
}

export default Icon
