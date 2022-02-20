import useSWR from 'swr';
import type { TypeCard } from '@/database/cards';

const CardsRead = (label: string) => {
  const { data, error } = useSWR(`/api/cardsread?label=${label}`, async (url: string): Promise<TypeCard[]> => {
    const response = await fetch(url);

    return response.json();
  });

  return { cards: data, error };
};

export default function Cards({ label }: { label: string }) {
  if (!label) return <ul></ul>;

  const { cards } = CardsRead(label);

  if (!cards) return <ul></ul>;

  const renderCards = cards.map(card => <li key={card.id}>{card.header}</li>);

  return (
    <ul>{renderCards}</ul>
  );
}
