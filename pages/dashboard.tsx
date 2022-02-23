import { useState } from 'react';
import type { NextPage } from 'next';
import type { TypeLabel } from '@/database/labels';
import useSWR from 'swr';
import Labels from '@/components/Labels';
import Cards from '@/components/Cards';

const LabelsRead = () => {
  const { data, error } = useSWR('/api/labelsread', async (url: string): Promise<TypeLabel[]> => {
    const response = await fetch(url);

    return response.json();
  });

  return { labels: data, error };
};

const Dashboard: NextPage = () => {
  const [label, setLabel] = useState(0);
  const { labels } = LabelsRead();

  return (
    <div className="flex">
      <Labels labels={labels ? labels : []} onLabel={label => setLabel(label)}></Labels>
      <Cards label={label}></Cards>
    </div>
  );
};

export default Dashboard;
