"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">メニューを開く</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setOpen(false)}
            >
              <span className="font-bold">Next.js 完全解説</span>
            </Link>
            {navigation.map((section) => (
              <div key={section.title} className="space-y-3">
                <h4 className="font-medium">{section.title}</h4>
                {section.items.map((item) => (
                  <Button
                    key={item.href}
                    variant={pathname === item.href ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    asChild
                    onClick={() => setOpen(false)}
                  >
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Link>
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}