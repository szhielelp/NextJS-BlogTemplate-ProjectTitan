export type FooterTable = {
  attr: {
    text: string;
    link?: string;
  };
  value?: {
    text: string;
    link?: string;
  };
};

export type FooterDef = {
  [attr: string]: FooterTable[];
};
