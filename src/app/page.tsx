import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
export default function Home() {
  return (
    <main className="bg-zinc-800 min-h-screen">
      <Banner />
      <CardPanel />
    </main>
  );
}