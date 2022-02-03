import { useState } from 'react';
import useSWR from 'swr';

export default function Labels() {
  const { data } = useSWR('/api/labels/read', async (url: string): Promise<string[]> => {
    const response = await fetch(url);

    return response.json();
  })
  if (!data) return <li></li>

  const renderLabels = data.map(label => <li key={label}>{label}</li>)

  return (
    <ul>{renderLabels}</ul>
  )
}
