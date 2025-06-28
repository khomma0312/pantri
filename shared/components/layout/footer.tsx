import Link from "next/link";

export const Footer = () => (
  <footer className="bg-white">
    <div className="container mx-auto px-5 py-12">
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full flex-wrap justify-center gap-6 text-center">
          <div className="w-full sm:w-auto">
            <Link href="/contact" className="text-base text-primary-800">
              お問い合わせ
            </Link>
          </div>
          <div className="w-full sm:w-auto">
            <Link href="/privacy" className="text-base text-primary-800">
              プライバシーポリシー
            </Link>
          </div>
          <div className="w-full sm:w-auto">
            <Link href="/terms" className="text-base text-primary-800">
              サービス規約
            </Link>
          </div>
        </div>
        <p className="text-base text-primary-800">
          © 2025 Pantri. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
