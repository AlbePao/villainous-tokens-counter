import '@fontsource/pirata-one';
import { useState } from 'react';
import { VillainCard } from './components/VillainCard';
import { VillainDashboard } from './components/VillainDashboard';
import { Villain } from './models/villain';
import { villains } from './models/villains-list';

function App() {
  const [villain, setVillain] = useState<Villain | null>(null);

  return (
    <>
      {villain ? (
        <VillainDashboard {...villain} onCancel={() => setVillain(null)} />
      ) : (
        <div className='w-full mx-auto md:max-w-[67.5rem] grid grid-cols-2  md:grid-cols-3'>
          {villains.map((villain) => (
            <VillainCard key={villain.name} {...villain} onClick={() => setVillain(villain)} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
