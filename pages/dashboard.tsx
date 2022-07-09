import { useState } from 'react';
import type { NextPage } from 'next';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Labels from '@/components/Labels';
import Cards from '@/components/Cards';

const Dashboard: NextPage = () => {
  const [enabledLabel, setEnabledLabel] = useState(0);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        <Labels enabledLabel={enabledLabel} onClick={label => setEnabledLabel(label)}></Labels>
        <Cards label={enabledLabel}></Cards>
      </div>
    </DndProvider>
  );
};

export default Dashboard;
