import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex-center-col gap-2 mobile-sm:gap-5">
      <Card className="p-5 mobile-sm:p-10 flex-center-col bg-[var(--content-inverted)]">
        <h1 className="text-[var(--font-heading)] text-3xl mobile-sm:text-5xl tablet-sm:text-7xl font-bold">Propwise</h1>
        <p className="font-medium text-center text-md mobile-sm:text-xl">Welcome in our Saas Platform </p>
        <Link className="flex-center" href={"/dashboard"}>
          <Button>Go to Your Dashboard</Button>
        </Link>
      </Card>
    </main>
  );
}
