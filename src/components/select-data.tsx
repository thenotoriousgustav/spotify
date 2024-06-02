"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectData() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const type = searchParams.get("type") || "tracks";
  // const limit = searchParams.get("limit") || "5";

  const handleTypeChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set("type", value);
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  const handleLimitChange = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set("limit", value);
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams]
  );

  return (
    <div>
      <Select onValueChange={handleTypeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Type</SelectLabel>
            <SelectItem value="tracks">Tracks</SelectItem>
            <SelectItem value="artists">Artists</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={handleLimitChange}>
        <SelectTrigger className="w-[180px] mt-4">
          <SelectValue placeholder="Select limit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Limit</SelectLabel>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="15">15</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
