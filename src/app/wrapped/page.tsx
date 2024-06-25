import { Suspense } from "react";

import { GET } from "@/lib/useFetchData";

import { TProfile } from "@/types/profile";
import { TTopTracks } from "@/types/topTrack";
import { TTopArtist } from "@/types/topArtist";

import Profile from "@/components/profile";
import TopTracks from "@/components/top-tracks";
import TopArtists from "@/components/top-artists";
import SelectData from "@/components/select-data";

export default async function WrappedPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const type = searchParams?.type || "tracks";
  const limit = searchParams?.limit || "5";

  const profileData = await GET<TProfile>("/me");
  const topItemsData = await GET<TTopTracks | TTopArtist>(
    `/me/top/${type}?limit=${limit}`
  );

  const [profile, topItems] = await Promise.all([profileData, topItemsData]);

  return (
    <section className="px-4 lg:px-6">
      <Suspense fallback="loading">
        {profile && <Profile profile={profile} />}
      </Suspense>
      <div className="">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-x-10">
          <div className="w-full lg:w-96">
            <Suspense fallback="loading">
              <div>
                {type === "tracks" &&
                  (topItems as TTopTracks)?.items.map((track) => (
                    <TopTracks track={track} key={track.id} />
                  ))}

                {type === "artists" &&
                  (topItems as TTopArtist)?.items.map((artist) => (
                    <TopArtists artist={artist} key={artist.id} />
                  ))}
              </div>
            </Suspense>
          </div>
          <div className="py-6 lg:p-10">
            <SelectData />
          </div>
        </div>
      </div>
    </section>
  );
}
