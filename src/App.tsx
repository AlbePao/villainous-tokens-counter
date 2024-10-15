import '@fontsource/pirata-one';
import { useEffect, useState } from 'react';
import { useWakeLock } from 'react-screen-wake-lock';
import { VillainCard } from './components/VillainCard';
import { VillainDashboard } from './components/VillainDashboard';
import { Villain } from './models/villain';
import { villains } from './models/villains-list';

// TODO: read https://medium.com/@rakeshdhariwal61/converting-your-react-vite-app-into-pwa-d7211e9cd0c5
function App() {
  const { isSupported, released, request, release } = useWakeLock({
    onRequest: () => alert('Screen Wake Lock: requested!'),
    onError: () => alert('An error happened 💥'),
    onRelease: () => alert('Screen Wake Lock: released!'),
  });

  const [villain, setVillain] = useState<Villain | null>(null);

  // TODO: add fake spinner
  // TODO: get current villain from localStorage, if null, show villains list
  // TODO: if villain is selected, prevent reloading and tab close

  useEffect(() => {}, [villain]);

  useEffect(() => {}, []);

  return (
    <>
      <div className='text-white'>
        <p>
          Screen Wake Lock API supported: <b>{`${isSupported}`}</b>
          <br />
          Released: <b>{`${released}`}</b>
        </p>
        <button type='button' onClick={() => (released === false ? release() : request())}>
          {released === false ? 'Release' : 'Request'}
        </button>
      </div>

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
