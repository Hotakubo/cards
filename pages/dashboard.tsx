import { useState } from 'react';
import type { NextPage } from 'next';
import useSWR from 'swr';
import Labels from '@/components/Labels';
import Cards from '@/components/Cards';

const LabelsRead = () => {
  const { data, error } = useSWR('/api/labelsread', async (url: string): Promise<string[]> => {
    const response = await fetch(url);

    return response.json();
  });

  return { labels: data, error };
};

const Dashboard: NextPage = () => {
  const [label, setLabel] = useState('');
  const { labels } = LabelsRead();

  return (
    <div>
      <Labels labels={labels ? labels : []} onLabel={label => setLabel(label)}></Labels>
      <Cards label={label}></Cards>
    </div>
  );
};

export default Dashboard;
