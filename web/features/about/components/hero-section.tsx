import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export const HeroSection = () => (
  <section
    className="relative rounded-lg bg-cover bg-center text-center text-white p-4 flex flex-col items-center justify-center min-h-[480px]"
    style={{ backgroundImage: "url(/about/hero-bg.png)" }}
  >
    <div className="bg-black/30 absolute inset-0 rounded-lg"></div>
    <div className="relative max-w-4xl">
      <h1 className="text-3xl font-black tracking-tighter mb-4 lg:text-5xl">
        毎日の献立作りをもっとシンプルに
      </h1>
      <p className="text-base font-normal mb-6">
        食材管理から買い物リストまで自動化。献立に悩む時間を減らします。
      </p>
      <Button className="text-xl font-medium px-10 py-6 rounded-lg text-primary-foreground">
        <Link href="/signup">今すぐ試す</Link>
      </Button>
    </div>
  </section>
);
