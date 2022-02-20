import type { NextApiRequest, NextApiResponse } from 'next';
import type { TypeCard } from '@/database/cards';
import * as cards from '@/database/cards';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TypeCard[]>
) {
  const { label } = req.query;

  res.status(200).json(await cards.readCards(parseInt(label as string)));
}
