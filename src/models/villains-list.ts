import { Villain } from './villain';

export const villains: Villain[] = [
  {
    name: 'Captain Hook',
    image: '/Captain_Hook.png',
  },
  {
    name: 'Jafar',
    image: '/Jafar.png',
  },
  {
    name: 'Maleficent',
    image: '/Maleficent.png',
  },
  {
    name: 'Prince John',
    image: '/Prince_John.png',
  },
  {
    name: 'Queen of Hearts',
    image: '/Queen_of_Hearts.png',
  },
  {
    name: 'Ursula',
    image: '/Ursula.png',
  },
  {
    name: 'Mother Gothel',
    image: '/Mother_Gothel.png',
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
