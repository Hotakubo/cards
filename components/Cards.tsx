import useSWR from 'swr';
import type { TypeCard } from '@/database/cards';

const CardsRead = (label: number) => {
  const { data, error } = useSWR(`/api/cardsread?label=${label}`, async (url: string): Promise<TypeCard[]> => {
    const response = await fetch(url);

    return response.json();
  });

  return { cards: data, error };
};

export default function Cards({ label }: { label: number }) {
  if (!label) return <div></div>;

  const { cards } = CardsRead(label);

  if (!cards) return <div></div>;

  const renderCards = cards.map(card => <div key={card.id}><a href={card.anchor} target="_blank">{card.header}</a></div>);

  return (
    <div className="m-4">{renderCards}</div>
  );
}
