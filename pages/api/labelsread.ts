import type { NextApiRequest, NextApiResponse } from 'next';
import type { TypeLabel } from '@/database/labels';
import * as labels from '@/database/labels';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TypeLabel[]>
) {
  res.status(200).json(await labels.readLabels());
}
