import Image from "next/image";

const GameDetails = async ({ params }) => {
  const { game } = params;
  const res = await fetch(
    `https://gamespace-server.vercel.app/downloadGames/${game}`
  );
  const data = await res.json();

  return (
    <section className="grid grid-cols-4 gap-5 container my-10 mx-auto">
      <div className="col-span-1">
        <Image
          src={data?.img}
          width={`800`}
          height={`800`}
          alt={data?.title}
          className="rounded w-full h-[400px] object-cover border p-5 border-white/40"
          priority
        />
      </div>
      <div className="col-span-3 space-y-5 text-gray-200 place-self-end">
        <h1 className="text-2xl lg:text-4xl font-playfair">{data?.title}</h1>
        <h3 className="bg-sky-500/20 text-sky-500 inline-block p-2 rounded-full text-xs">
          Release date: {data?.releaseDate}
        </h3>
        <p>{data?.description}</p>
        <button className="px-3 py-2 bg-white/10 hover:bg-sky-500/10 hover:text-sky-500 rounded  hover:border-sky-500/50">
          Get Now!
        </button>
      </div>
    </section>
  );
};

export default GameDetails;
export async function generateStaticParams() {
  const res = await fetch(`https://gamespace-server.vercel.app/downloadGames`);
  const data = await res.json();
  return data?.map((hello) => ({
    game: hello?._id,
  }));
}
