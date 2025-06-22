import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        <Image
          src="/about/logo-icon.svg"
          alt="Pantri Logo"
          width={24}
          height={24}
        />
        <span className="font-bold text-lg text-gray-900">Pantri</span>
      </div>
      <nav className="hidden items-center gap-4 md:flex">
        <Button variant="ghost" className="text-sm font-medium text-gray-900">
          <Link href="/login" className="">
            ログイン
          </Link>
        </Button>
        <Button className="text-sm font-medium text-primary-foreground">
          <Link href="/signup">新規登録</Link>
        </Button>
      </nav>
    </div>
  </header>
);
