import Image from "next/image";
import Link from "next/link";

const GamesCard = ({ game }) => {
  const { title, img, _id } = game;
  return (
    <Link href={`/game/${_id}`}>
      <div className="border border-white/10 p-5 space-y-5 hover:border-sky-500/30 rounded">
        <Image
          src={img}
          width="500"
          height="500"
          className="w-full h-64 object-cover border border-white/30"
          alt={title}
        />
        <h2>{title}</h2>
        <button className="bg-white/10 rounded py-2 px-3 hover:bg-sky-500/20 hover:text-sky-500">
          Play now
        </button>
      </div>
    </Link>
  );
};

export default GamesCard;
