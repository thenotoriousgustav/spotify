import { TItem } from "@/types/topTrack";
import Image from "next/image";

export default function TopTracks({ track }: { track: TItem }) {
  return (
    <div className="flex items-center gap-x-4 my-10">
      <div>
        {track.album.images[0] && (
          <Image
            src={track.album.images[0].url}
            alt={track.album.name}
            height={80}
            width={80}
          />
        )}
      </div>
      <div>
        <h2 className="font-medium">{track.name}</h2>
        <div>
          {track.artists.map((artist) => (
            <div key={artist.id}>
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
