import * as base from './base'

export type TypeCard = {
  id: number;
  label: number;
  icon: number;
  header: string;
  anchor: string;
  createDate: string;
  updateDate: string;
}

export const readCards = async (label: number) => {
  const cards = await base.read()

  return cards.filter(body => body.label === label)
}
