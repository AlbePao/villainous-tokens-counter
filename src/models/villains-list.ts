import { Villain } from './villain';

export const villains: Villain[] = [
  {
    name: 'Captain Hook',
    image: '/src/assets/Captain_Hook.png',
  },
  {
    name: 'Jafar',
    image: '/src/assets/Jafar.png',
  },
  {
    name: 'Maleficent',
    image: '/src/assets/Maleficent.png',
  },
  {
    name: 'Prince John',
    image: '/src/assets/Prince_John.png',
  },
  {
    name: 'Queen of Hearts',
    image: '/src/assets/Queen_of_Hearts.png',
  },
  {
    name: 'Ursula',
    image: '/src/assets/Ursula.png',
  },
  {
    name: 'Mother Gothel',
    image: '/src/assets/Mother_Gothel.png',
    customToken: {
      name: 'Fiducia',
      color: {
        border: 'border-rose-600/40 active:border-rose-600/60',
        shadow: 'active:shadow-rose-500/60',
        text: 'text-rose-500/60',
      },
    },
  },
];
