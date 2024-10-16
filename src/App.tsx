import '@fontsource/pirata-one';
import { useState } from 'react';
import { useWakeLock } from 'react-screen-wake-lock';
import { VillainCard } from './components/VillainCard';
import { VillainDashboard } from './components/VillainDashboard';
import { Villain } from './models/villain';
import { villains } from './models/villains-list';

function App() {
  const { isSupported, released, request, release } = useWakeLock({
    onRequest: () => alert('Screen Wake Lock: requested!'),
    onError: () => alert('An error happened 💥'),
    onRelease: () => alert('Screen Wake Lock: released!'),
  });
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
    <div className='w-screen h-lvh'>
      {villain ? (
        <VillainDashboard {...villain} onCancel={() => setVillain(null)} />
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
