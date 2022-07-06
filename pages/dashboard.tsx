import { useState } from 'react';
import type { NextPage } from 'next';
import Labels from '@/components/Labels';
import Cards from '@/components/Cards';

const Dashboard: NextPage = () => {
  const [enabledLabel, setEnabledLabel] = useState(0);

  return (
    <div className="flex">
      <Labels enabledLabel={enabledLabel} onClick={label => setEnabledLabel(label)}></Labels>
      <Cards label={enabledLabel}></Cards>
    </div>
  );
};

export default Dashboard;
