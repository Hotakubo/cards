import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import type { TypeLabel } from '@/database/labels'
import Label from '@/components/Label'

type Type = {
  enabledLabel: number;
  onClick: (label: number) => void;
}

const LabelsRead = () => {
  const { data, error } = useSWR('/api/labels', async (url: string): Promise<TypeLabel[]> => {
    const response = await fetch(url)

    return response.json()
  })

  return { data, error }
}

const Labels = ({ enabledLabel, onClick }: Type) => {
  const [labels, setLabels] = useState<TypeLabel[]>([])
  const { data } = LabelsRead()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (data) setLabels(data)
  })

  const update = (dragIndex: number, hoverIndex: number) => {
    setLabels((prevCards: TypeLabel[]) => {
      const addLabel = prevCards[hoverIndex]

      prevCards.splice(hoverIndex, 1)
      prevCards.splice(dragIndex, 0, addLabel)

      return [ ...prevCards ]
    })
  }

  return (
    <div className="grid gap-2 grid-cols-4 auto-rows-min m-4">
      {labels.map(({ label, icon }, index: number) => <Label
        key={label}
        index={index}
        label={label}
        icon={icon}
        enabled={label === enabledLabel}
        onClick={onClick}
        update={update}
      ></Label>)}
    </div>
  )
}

export default Labels
