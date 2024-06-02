import AuthButton from "@/components/auth-button";

export default async function Page() {
  return (
    <section className="w-full h-96 flex flex-col justify-center items-center">
      <div className="w-5/12">
        <h1 className="text-5xl font-semibold">Spotify Wrapped</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          assumenda tenetur culpa alias magni dolores quo autem laboriosam eaque
          sit.
        </p>
        <div className="mt-6">
          <AuthButton />
        </div>
      </div>
    </section>
  );
}
