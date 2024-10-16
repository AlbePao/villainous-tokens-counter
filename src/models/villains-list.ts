import { Villain } from './villain';

export const villains: Villain[] = [
  // The Worst Takes It All
  {
    image: '/Captain_Hook.png',
  },
  {
    image: '/Jafar.png',
  },
  {
    image: '/Maleficent.png',
  },
  {
    image: '/Prince_John.png',
  },
  {
    image: '/Queen_of_Hearts.png',
  },
  {
    image: '/Ursula.png',
  },

  // Wicked to the Core
  {
    image: '/Dr_Facilier.png',
  },
  {
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
    image: '/Hades.png',
  },

  // Evil Comes Prepared
  {
    image: '/Ratigan.png',
  },
  {
    image: '/Scar.png',
  },
  {
    image: '/Yzma.png',
  },

  // Perfectly Wretched
  {
    image: '/Cruella_De_Vil.png',
  },
  {
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
    image: '/Pete.png',
  },

  // Despicable Plots
  {
    image: '/Gaston.png',
  },
  {
    image: '/Horned_King.png',
  },
  {
    image: '/Lady_Tremaine.png',
  },

  // Bigger and Badder
  {
    image: '/Lotso.png',
  },
  {
    image: '/Madam_Mim.png',
  },
  {
    image: '/Syndrome.png',
  },

  // Filled With Fright
  {
    image: '/Oogie_Boogie.png',
  },

  // Sugar and Spite
  {
    image: '/King_Candy.png',
  },
  {
    image: '/Shere_Khan.png',
  },
];
