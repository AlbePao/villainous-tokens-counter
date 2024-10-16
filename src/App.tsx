import '@fontsource/pirata-one';
import { useState } from 'react';
import { useWakeLock } from 'react-screen-wake-lock';
import { VillainCard } from './components/VillainCard';
import { VillainDashboard } from './components/VillainDashboard';
import { Villain } from './models/villain';
import { villains } from './models/villains-list';

function App() {
  const { isSupported, request, release } = useWakeLock();
  const [villain, setVillain] = useState<Villain | null>(null);

  const onChange = (villain: Villain | null) => {
    if (isSupported) {
      if (villain) {
        request();
      } else {
        release();
      }
    }

    setVillain(villain);
  };

  return (
    <div className='flex flex-1 w-screen p-safe'>
      {villain ? (
        <VillainDashboard {...villain} onCancel={() => onChange(null)} />
      ) : (
        <div className='w-full mx-auto md:max-w-[67.5rem] grid grid-cols-2  md:grid-cols-3'>
          {villains.map((villain) => (
            <VillainCard key={villain.name} {...villain} onClick={() => onChange(villain)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
