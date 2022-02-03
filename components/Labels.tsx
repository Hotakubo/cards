import { useState } from 'react';
import useSWR from 'swr';

export default function Labels() {
  const { data, error } = useSWR('/api/labels/read', async (url: string): Promise<string[]> => {
    const response = await fetch(url);

    return response.json();
  })
  if (error) return <li></li>
  if (!data) return <li></li>

  const renderLabels = data.map(label => <li key={label}>{label}</li>)

  return (
    <ul>{renderLabels}</ul>
  )
}
