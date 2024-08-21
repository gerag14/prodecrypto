import PotCard from "@/components/card/potCard";

export default function Home() {
  return (
    <main className="flexflex-col items-center justify-between p-24">
      <div className="flex justify-center">
        <PotCard amount_uxd={"10.000"} amount_btc={"0.170000"} />
      </div>
    </main>
  );
}
