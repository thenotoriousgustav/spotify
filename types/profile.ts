type Image = {
  url: string;
  height: number;
  width: number;
};

export type TProfile = {
  display_name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
  followers: { href: null; total: number };
  email: string;
};
