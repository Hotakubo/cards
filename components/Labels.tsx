import { useState } from 'react';
import useSWR from 'swr';

export default function Labels() {
  const [labels, setLabels] = useState<string[]>([]);
  const { data } = useSWR('/api/labels/read', async (url: string): Promise<string[]> => {
    const response = await fetch(url);

    return response.json();
  })

  return (
    <div></div>
  )
}
