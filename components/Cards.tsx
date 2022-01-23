import { useState } from 'react';
import useSWR from 'swr';
import type { TypeCards } from '@/database/cards'

export default function Cards() {
  const [cards, setCards] = useState<TypeCards[]>([]);
  const { data } = useSWR('/api/cards/read', async (url: string): Promise<TypeCards[]> => {
    const response = await fetch(url);

    return response.json();
  })

  return (
    <div></div>
  )
}
