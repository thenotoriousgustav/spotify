import { TProfile } from "@/types/profile";
import Image from "next/image";

export default async function Profile({ profile }: { profile: TProfile }) {
  const image = profile.images[0];

  return (
    <div className="flex items-center gap-x-4">
      <Image
        src={image.url}
        alt="gustam"
        height={image.height}
        width={image.width}
        className="rounded-full"
      />
      <h1 className="text-4xl font-medium">{profile.display_name}</h1>
    </div>
  );
}
