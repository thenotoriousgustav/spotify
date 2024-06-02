type Artist = {
  external_urls: { spotify: string };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type Item = {
  album: [];
  artists: Artist[];
  available_markets: [];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: [];
  external_urls: [];
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type TTopTracks = {
  items: Item[];
  total: number;
  limit: number;
  offset: number;
  href: string;
  next: string | null;
  previous: string | null;
};
