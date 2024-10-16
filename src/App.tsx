import '@fontsource/pirata-one';
import { useEffect, useState } from 'react';
import { useWakeLock } from 'react-screen-wake-lock';
import { VillainCard } from './components/VillainCard';
import { VillainDashboard } from './components/VillainDashboard';
import { Villain } from './models/villain';
import { villains } from './models/villains-list';

function App() {
  const wakeAutoLock = useWakeLock();
  const [villain, setVillain] = useState<Villain | null>(null);

  useEffect(() => {
    const { request, release } = wakeAutoLock;

    if (villain) {
      request();
    } else {
      release();
    }
  }, [villain, wakeAutoLock]);

  return (
    <div className='w-screen h-svh'>
      {villain ? (
        <VillainDashboard {...villain} onCancel={() => setVillain(null)} />
      ) : (
        <div className='w-full mx-auto md:max-w-[67.5rem] grid grid-cols-2  md:grid-cols-3'>
          {villains.map((villain) => (
            <VillainCard key={villain.name} {...villain} onClick={() => setVillain(villain)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
