import { Villain } from './villain';

export const villains: Villain[] = [
  // The Worst Takes It All
  {
    name: 'Captain Hook',
    image: '/villains/Captain_Hook.webp',
  },
  {
    name: 'Jafar',
    image: '/villains/Jafar.webp',
  },
  {
    name: 'Maleficent',
    image: '/villains/Maleficent.webp',
  },
  {
    name: 'Prince John',
    image: '/villains/Prince_John.webp',
  },
  {
    name: 'Queen of Hearts',
    image: '/villains/Queen_of_Hearts.webp',
  },
  {
    name: 'Ursula',
    image: '/villains/Ursula.webp',
  },

  // Wicked to the Core
  {
    name: 'Dr Facilier',
    image: '/villains/Dr_Facilier.webp',
  },
  {
    name: 'Evil Queen',
    image: '/villains/Evil_Queen.webp',
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
    image: '/villains/Hades.webp',
  },

  // Evil Comes Prepared
  {
    name: 'Ratigan',
    image: '/villains/Ratigan.webp',
  },
  {
    name: 'Scar',
    image: '/villains/Scar.webp',
    customToken: {
      name: 'Successione',
      color: {
        border: 'border-orange-600/40 active:border-orange-600/60',
        shadow: 'active:shadow-orange-500/60',
        text: 'text-orange-500/60',
      },
    },
  },
  {
    name: 'Yzma',
    image: '/villains/Yzma.webp',
  },

  // Perfectly Wretched
  {
    name: 'Cruella De Vil',
    image: '/villains/Cruella_De_Vil.webp',
  },
  {
    name: 'Mother Gothel',
    image: '/villains/Mother_Gothel.webp',
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
    image: '/villains/Pete.webp',
  },

  // Despicable Plots
  {
    name: 'Gaston',
    image: '/villains/Gaston.webp',
  },
  {
    name: 'Horned King',
    image: '/villains/Horned_King.webp',
  },
  {
    name: 'Lady Tremaine',
    image: '/villains/Lady_Tremaine.webp',
  },

  // Bigger and Badder
  {
    name: 'Lotso',
    image: '/villains/Lotso.webp',
  },
  {
    name: 'Madam Mim',
    image: '/villains/Madam_Mim.webp',
  },
  {
    name: 'Syndrome',
    image: '/villains/Syndrome.webp',
  },

  // Filled With Fright
  {
    name: 'Oogie Boogie',
    image: '/villains/Oogie_Boogie.webp',
  },

  // Sugar and Spite
  {
    name: 'King Candy',
    image: '/villains/King_Candy.webp',
  },
  {
    name: 'Shere Khan',
    image: '/villains/Shere_Khan.webp',
  },
];
