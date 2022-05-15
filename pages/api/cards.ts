import type { NextApiRequest, NextApiResponse } from 'next';
import type { TypeCard } from '@/database/cards';
import { URLPath } from '@/shared/routes';
import * as cards from '@/database/cards';

const routes = [
  {
    method: 'GET',
    url: '/api/cards',
    handler: async (req: NextApiRequest, res: NextApiResponse<TypeCard[]>) => {
      const { label } = req.query;

      res.status(200).json(await cards.readCards(parseInt(label as string)));
    }
  }
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const route = routes.find(route => req.method === route.method && URLPath(req.url) === route.url)

  if (route) {
    await route.handler(req, res);
  } else {
    res.status(404);
  }
}
