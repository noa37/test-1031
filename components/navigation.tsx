"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Code2, Cpu, FileCode2, GitBranch, Layers, LayoutDashboard, Rocket, Settings } from "lucide-react";

const navigation = [
  {
    title: "はじめに",
    items: [
      {
        title: "Next.jsとは",
        href: "/introduction",
        icon: BookOpen,
      },
      {
        title: "インストール方法",
        href: "/installation",
        icon: Rocket,
      },
    ],
  },
  {
    title: "基本概念",
    items: [
      {
        title: "ルーティング",
        href: "/routing",
        icon: GitBranch,
      },
      {
        title: "ページとレイアウト",
        href: "/pages-and-layouts",
        icon: LayoutDashboard,
      },
      {
        title: "データフェッチング",
        href: "/data-fetching",
        icon: Layers,
      },
      {
        title: "レンダリング",
        href: "/rendering",
        icon: Cpu,
      },
    ],
  },
  {
    title: "応用トピック",
    items: [
      {
        title: "最適化テクニック",
        href: "/optimization",
        icon: Settings,
      },
      {
        title: "APIルート",
        href: "/api-routes",
        icon: Code2,
      },
      {
        title: "TypeScript対応",
        href: "/typescript",
        icon: FileCode2,
      },
    ],
  },
];

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Navigation({ className, ...props }: NavigationProps) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12 w-64 border-r bg-background", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xl font-semibold">
            Next.js 完全解説
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              className="w-full justify-start"
              asChild
            >
              <Link href="/">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                ホーム
              </Link>
            </Button>
          </div>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {navigation.map((section) => (
            <div key={section.title} className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold">
                {section.title}
              </h2>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <Button
                    key={item.href}
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}