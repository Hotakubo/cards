import type { NextApiRequest, NextApiResponse } from 'next';
import type { TypeLabel } from '@/database/labels';
import { URLPath } from '@/shared/routes';
import * as labels from '@/database/labels';

const routes = [
  {
    method: 'GET',
    url: '/api/labels',
    handler: async (req: NextApiRequest, res: NextApiResponse<TypeLabel[]>) => {
      res.status(200).json(await labels.readLabels());
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
