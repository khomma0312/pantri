import { Trash2, Heart, Sparkles, Lightbulb, Salad, Clock } from "lucide-react";

export const ProblemSolvingSection = () => (
  <section className="py-10 text-left">
    <div className="text-left max-w-3xl mb-10">
      <h2 className="text-2xl font-black mb-4 lg:text-4xl">課題の解決</h2>
      <p className="text-base">
        Pantriは、毎日の料理に関する様々な課題を解決し、より豊かで健康的な食生活をサポートします。
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-4 rounded-lg border border-primary-200">
        <div className="flex items-center mb-4">
          <Trash2 className="w-5 h-5 text-primary-500 mr-3" />
          <h3 className="font-bold text-xl text-gray-800">食品ロスを削減</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          冷蔵庫の食材を効率的に管理し、消費期限前に使い切るレシピを提案することで、
          <span className="font-semibold text-primary-700">
            食品廃棄を大幅に削減
          </span>
          します。
        </p>
        <div className="mt-4 text-sm text-primary-700 font-medium flex items-center">
          <Lightbulb className="w-4 h-4 mr-2" />
          年間約3万円の食費節約効果
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-primary-200">
        <div className="flex items-center mb-4">
          <Heart className="w-5 h-5 text-primary-500 mr-3" />
          <h3 className="font-bold text-xl text-gray-800">
            健康的な食事を推奨
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          栄養バランスを考慮したレシピを自動で提案し、あなたの健康目標や食事制限に合わせた
          <span className="font-semibold text-primary-700">献立を作成</span>します。
        </p>
        <div className="mt-4 text-sm text-primary-700 font-medium flex items-center">
          <Salad className="w-4 h-4 mr-2" />
          栄養士監修のバランス献立
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg border border-primary-200">
        <div className="flex items-center mb-4">
          <Sparkles className="w-5 h-5 text-primary-500 mr-3" />
          <h3 className="font-bold text-xl text-gray-800">
            食事の計画を簡単化
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          AIが自動で献立を提案し、買い物リストも生成するため、
          <span className="font-semibold text-primary-700">
            毎日の食事計画にかかる時間と労力を大幅に削減
          </span>
          できます。
        </p>
        <div className="mt-4 text-sm text-primary-700 font-medium flex items-center">
          <Clock className="w-4 h-4 mr-2" />
          1日5分で1週間の献立完成
        </div>
      </div>
    </div>
  </section>
);
