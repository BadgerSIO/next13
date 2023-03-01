import GamesCard from "./GamesCard";
import styles from "./page.module.css";

export default async function Home() {
  const res = await fetch(`https://gamespace-server.vercel.app/downloadGames`);
  const data = await res.json();
  return (
    <main className="container mx-auto my-5">
      <h1 className={`font-playfair text-4xl lg:text-7xl text-center`}>
        Next <span className={styles.coloredTxt}>13</span>
      </h1>
      <div className="grid gap-6 grid-cols-fluid mt-5">
        {data.map((game) => (
          <GamesCard key={game._id} game={game} />
        ))}
      </div>
    </main>
  );
}
