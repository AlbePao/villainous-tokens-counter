import '@fontsource/pirata-one';
import { useEffect, useState } from 'react';
import { VillainCard } from './components/VillainCard';
import { VillainDashboard } from './components/VillainDashboard';
import { Villain } from './models/villain';
import { villains } from './models/villains-list';

// TODO: read https://medium.com/@rakeshdhariwal61/converting-your-react-vite-app-into-pwa-d7211e9cd0c5
function App() {
  const [villain, setVillain] = useState<Villain | null>(null);

  // TODO: add fake spinner
  // TODO: get current villain from localStorage, if null, show villains list
  // TODO: if villain is selected, prevent reloading and tab close

  useEffect(() => {}, [villain]);

  useEffect(() => {}, []);

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
