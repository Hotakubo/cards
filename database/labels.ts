import * as base from './base'

export const readLabels = async () => {
  const cards = await base.read()
  const labels = cards.map(body => body.label)

  return Array.from(new Set(labels))
}
