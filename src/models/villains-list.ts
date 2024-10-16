import { Villain } from './villain';

export const villains: Villain[] = [
  // The Worst Takes It All
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

  // Wicked to the Core
  {
    name: 'Dr Facilier',
    image: '/Dr_Facilier.png',
  },
  {
    name: 'Evil Queen',
    image: '/Evil_Queen.png',
    customToken: {
      name: 'Veleno',
      color: {
        border: 'border-purple-600/40 active:border-purple-600/60',
        shadow: 'active:shadow-purple-500/60',
        text: 'text-purple-500/60',
      },
    },
  },
  {
    name: 'Hades',
    image: '/Hades.png',
  },

  // Evil Comes Prepared
  {
    name: 'Ratigan',
    image: '/Ratigan.png',
  },
  {
    name: 'Scar',
    image: '/Scar.png',
  },
  {
    name: 'Yzma',
    image: '/Yzma.png',
  },

  // Perfectly Wretched
  {
    name: 'Cruella De Vil',
    image: '/Cruella_De_Vil.png',
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
  {
    name: 'Pete',
    image: '/Pete.png',
  },

  // Despicable Plots
  {
    name: 'Gaston',
    image: '/Gaston.png',
  },
  {
    name: 'Horned King',
    image: '/Horned_King.png',
  },
  {
    name: 'Lady Tremaine',
    image: '/Lady_Tremaine.png',
  },

  // Bigger and Badder
  {
    name: 'Lotso',
    image: '/Lotso.png',
  },
  {
    name: 'Madam Mim',
    image: '/Madam_Mim.png',
  },
  {
    name: 'Syndrome',
    image: '/Syndrome.png',
  },

  // Filled With Fright
  {
    name: 'Oogie Boogie',
    image: '/Oogie_Boogie.png',
  },

  // Sugar and Spite
  {
    name: 'King Candy',
    image: '/King_Candy.png',
  },
  {
    name: 'Shere Khan',
    image: '/Shere_Khan.png',
  },
];
