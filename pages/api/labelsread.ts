import type { NextApiRequest, NextApiResponse } from 'next'
import * as labels from '@/database/labels'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[]>
) {
  res.status(200).json(await labels.readLabels())
}