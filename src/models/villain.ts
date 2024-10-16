export type CustomToken = {
  name: string;
  color: {
    border: string;
    shadow: string;
    text: string;
  };
};

export type Villain = {
  image: string;
  customToken?: CustomToken;
};
