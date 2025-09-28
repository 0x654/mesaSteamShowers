import Link from "next/link";
import { Container } from "@/components/ui/container";

export function AnnouncementBar() {
  return (
    <div className="bg-slate-900 text-white text-sm">
      <Container className="flex flex-col items-center justify-between gap-2 py-2 sm:flex-row">
        <span>Fall Savings Event: Up to $600 off select steam showers</span>
        <Link
          href="/collections/steam-showers"
          className="underline decoration-blue-400 decoration-2 underline-offset-4"
        >
          Shop Now →
        </Link>
      </Container>
    </div>
  );
}
