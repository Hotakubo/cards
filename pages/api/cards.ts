import type { NextApiRequest, NextApiResponse } from 'next';
import type { TypeCard } from '@/database/cards';
import shared from '@/shared';
import database from '@/database';

const routes = [
  {
    method: 'GET',
    url: '/api/cards',
    handler: async (req: NextApiRequest, res: NextApiResponse<TypeCard[]>) => {
      const { label } = req.query;

      res.status(200).json(await database.cards.readCards(parseInt(label as string)));
    }
  }
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const route = shared.routes.route(req, res, routes)

  if (route) {
    await route.handler(req, res);
  } else {
    res.status(404);
  }
}
