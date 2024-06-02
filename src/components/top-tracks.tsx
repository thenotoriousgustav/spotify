import { Item } from "@/types/topTrack";

export default function TopTracks({ track }: { track: Item }) {
  return (
    <div>
      <div className="my-8">
        <h2 className="font-medium">{track.name}</h2>
        {track.artists.map((artist) => (
          <div key={artist.id}>
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
