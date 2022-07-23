import type { NextApiRequest, NextApiResponse } from 'next'
import type { TypeLabel } from '@/database/labels'
import shared from '@/shared'
import database from '@/database'

const routes = [
  {
    method: 'GET',
    url: '/api/labels',
    handler: async (_req: NextApiRequest, res: NextApiResponse<TypeLabel[]>) => {
      res.status(200).json(await database.labels.readLabels())
    }
  }
]

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const route = shared.routes.route(req, res, routes)

  if (route) {
    await route.handler(req, res)
  } else {
    res.status(404)
  }
}

export default handler
