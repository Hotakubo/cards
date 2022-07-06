import React from 'react';
import useSWR from 'swr';
import type { TypeLabel } from '@/database/labels';
import Label from '@/components/Label';

type Type = {
  enabledLabel: number;
  onClick: (label: number) => void;
}

const LabelsRead = () => {
  const { data, error } = useSWR('/api/labels', async (url: string): Promise<TypeLabel[]> => {
    const response = await fetch(url);

    return response.json();
  });

  return { labels: data, error };
};

const Labels = ({ enabledLabel, onClick }: Type) => {
  const { labels } = LabelsRead();

  if (!labels) return <div></div>;

  return (
    <div className="grid gap-2 grid-cols-4 auto-rows-min m-4">
      {labels.map(({ label, icon }) => <Label
        key={label}
        label={label}
        icon={icon}
        enabled={label === enabledLabel}
        onClick={onClick}
      ></Label>)}
    </div>
  );
};

export default Labels;
