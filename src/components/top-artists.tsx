import { Item } from "@/types/topArtist";

export default function TopArtists({ artist }: { artist: Item }) {
  return (
    <div>
      <div className="my-8">
        <h1>{artist.name}</h1>
      </div>
    </div>
  );
}
