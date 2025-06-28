import { FeatureCard } from "@/components/feature-card";

export const FeaturesSection = () => (
  <section className="py-16">
    <div className="text-left max-w-3xl mb-10">
      <h2 className="text-2xl font-black mb-4 lg:text-4xl">主な機能</h2>
      <p className="text-base">
        Pantriは、食品ロスを削減し、バランスのとれた食事を提案するための機能を提供します。
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      <FeatureCard
        icon="/about/feature-1.svg"
        title="食事の推奨"
        description="あなたの冷蔵庫にある食材に基づいて、健康的な食事を提案します。"
      />
      <FeatureCard
        icon="/about/feature-2.svg"
        title="冷蔵庫の食材管理"
        description="冷蔵庫の食材を管理し、残り物を削減します。"
      />
      <FeatureCard
        icon="/about/feature-3.svg"
        title="自動買い物リスト"
        description="食事プランに基づいて、自動的に買い物リストを作成します。"
      />
      <FeatureCard
        icon="/about/feature-4.svg"
        title="ファミリー共有"
        description="家族と食事プランや買い物リストを共有し、協力して食事を計画できます。"
      />
    </div>
  </section>
);
