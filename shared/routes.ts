import type { NextApiRequest, NextApiResponse } from 'next';

type TypeRoute = {
  method: string;
  url: string;
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}

const ORIGIN = 'http://localhost'

const URLPath = (url: string | undefined) => {
  if (!url) return ''

  const { pathname } = new URL(ORIGIN.concat(url))

  return pathname
}

export const route = (req: NextApiRequest, _res: NextApiResponse, routes: TypeRoute[]) => {
  return routes.find(route => req.method === route.method && URLPath(req.url) === route.url)
}
