type TTopArtist = {
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string | null;
  previous: string | null;
  items: Item[];
};

type Item = {
  external_urls: [];
  followers: [];
  genres: [];
  href: string;
  id: string;
  images: [];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type { TTopArtist, Item };
