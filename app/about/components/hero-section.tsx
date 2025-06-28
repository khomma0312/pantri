import { Button } from "@/components/ui/button";

export const HeroSection = () => (
  <section
    className="relative rounded-lg bg-cover bg-center text-center text-white p-4 flex flex-col items-center justify-center min-h-[480px]"
    style={{ backgroundImage: "url(/about/hero-bg.png)" }}
  >
    <div className="bg-black/30 absolute inset-0 rounded-lg"></div>
    <div className="relative max-w-4xl">
      <h1 className="text-3xl font-black tracking-tighter mb-2 lg:text-5xl">
        食品ロスを削減するスマートな食事プラン
      </h1>
      <p className="text-base font-normal mb-6">
        Pantriは、食品ロスを削減し、バランスのとれた食事を提案する、食事プランと食品管理ウェブアプリです。
      </p>
      <Button className="text-xl font-medium px-10 py-6 rounded-lg text-primary-foreground">
        今すぐ試す
      </Button>
    </div>
  </section>
);
