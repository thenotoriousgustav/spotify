"use server";

import { auth } from "@/auth";

const BASE_URL: string = process.env.SPOTIFY_BASE_URL ?? "";

export async function GET<T>(
  endpoint: string,
  cache?: RequestCache
): Promise<T | null> {
  const session = await auth();

  if (!session || !session.accessToken) {
    console.error("No valid session or access token found");
    return null;
  }

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      cache: cache,
    });

    if (!res.ok) {
      console.error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    return data as T;
    // return res.json();
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return null;
  }
}
