import Image from "next/image";
import Link from "next/link";

export const Footer = () => (
  <footer className="bg-stone-50">
    <div className="container mx-auto px-5 py-10">
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full flex-wrap justify-center gap-6 text-center">
          <div className="w-full sm:w-auto">
            <Link href="#" className="text-base text-primary-800">
              お問い合わせ
            </Link>
          </div>
          <div className="w-full sm:w-auto">
            <Link href="#" className="text-base text-primary-800">
              プライバシーポリシー
            </Link>
          </div>
          <div className="w-full sm:w-auto">
            <Link href="#" className="text-base text-primary-800">
              サービス規約
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="#">
            <Image
              src="/about/social-1.svg"
              alt="Social Icon 1"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image
              src="/about/social-2.svg"
              alt="Social Icon 2"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image
              src="/about/social-3.svg"
              alt="Social Icon 3"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <p className="text-base text-primary-800">
          © 2025 Pantri. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
