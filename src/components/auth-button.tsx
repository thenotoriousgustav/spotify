import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("spotify");
      }}
    >
      <Button type="submit">Sign In with Spotify</Button>
    </form>
  );
}

export default async function AuthButton() {
  const session = await auth();
  return <>{session && session.user ? <SignOut /> : <SignIn />}</>;
}
