import { HowToUseCard } from "@/components/how-to-use-card";

export const HowToUseSection = () => (
  <section className="py-16">
    <div className="text-left max-w-3xl mb-10">
      <h2 className="text-2xl font-black mb-4 lg:text-4xl">使い方</h2>
      <p className="text-base">
        次のステップで食事を計画し、健康的な目標を達成しましょう。
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
      <HowToUseCard
        image="/about/step-1.png"
        title="食材を登録"
        description="冷蔵庫にある食材を登録します。"
      />
      <HowToUseCard
        image="/about/step-2.png"
        title="好みを設定"
        description="好みやアレルギーを設定します。"
      />
      <HowToUseCard
        image="/about/step-3.png"
        title="食事プランを取得"
        description="冷蔵庫の食材と好みに基づいて、食事プランを取得します。"
      />
      <HowToUseCard
        image="/about/step-4.png"
        title="買い物リストを作成"
        description="食事プランに基づいて、買い物リストを作成します。"
      />
      <HowToUseCard
        image="/about/step-5.png"
        title="家族と共有"
        description="家族と食事プランや買い物リストを共有します。"
      />
    </div>
  </section>
);
