import type { NextApiRequest, NextApiResponse } from 'next'
import type { TypeCards } from '@/database/cards'
import * as cards from '@/database/cards'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TypeCards[]>
) {
  const label = req.query.label as string

  res.status(200).json(await cards.readCards(label))
}
