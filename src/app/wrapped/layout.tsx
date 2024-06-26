import type { Metadata } from "next";
import AuthButton from "@/components/auth-button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function WrappedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="w-full p-6">
        <nav className="flex justify-between items-center">
          <Link href="/wrapped" className="font-medium">
            Spotify Wrapped
          </Link>
          <AuthButton />
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
