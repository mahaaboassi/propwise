import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex-center-col gap-2 mobile-md:gap-5">
      <Card className="p-5 mobile-md:p-10 flex-center-col bg-[var(--content-inverted)]">
        <div>
          <Image className="object-contain" width={150} height={100} alt="Logo" src="/logo.png" />
        </div>
        <p className="font-medium text-center text-base mobile-md:text-xl">Welcome in our CRM Platform </p>
        <Link className="flex-center" href={"/dashboard"}>
          <Button variant={"default"}>Go to Your Dashboard</Button>
        </Link>
      </Card>
    </main>
  );
}
