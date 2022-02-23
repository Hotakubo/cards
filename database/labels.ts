import type { TypeCard } from '@/database/cards'
import * as base from './base'

const _reduceLabels = (pureBody: Map<number, TypeLabel>, { label: label, icon: icon }: TypeCard) => {
  return pureBody.set(label, { label: label, icon: icon })
}

const _readLabels = (cards: TypeCard[]) => {
  const reduceLabels = cards.reduce(_reduceLabels, new Map())

  return Array.from(reduceLabels.values())
}

export type TypeLabel = {
  label: number;
  icon: number;
}

export const readLabels = async () => {
  const cards = await base.read()

  return _readLabels(cards)
}
