import * as base from './base'

export type TypeCard = {
  header: string;
  anchor: string;
  label: string;
  createDate: string;
  updateDate: string;
}

export const readCards = async (label: string) => {
  const cards = await base.read()

  return cards.filter(body => body.label === label)
}
