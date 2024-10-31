import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Code2, Rocket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Next.js 完全解説</h1>
          <p className="text-xl text-muted-foreground">
            モダンなWebアプリケーション開発のための包括的なガイド
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 space-y-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold">基礎から学ぶ</h2>
            <p className="text-muted-foreground">
              Next.jsの基本概念から実践的な使い方まで、ステップバイステップで解説します。
            </p>
            <Button asChild className="w-full">
              <Link href="/introduction">はじめる</Link>
            </Button>
          </Card>

          <Card className="p-6 space-y-4">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold">実践的なガイド</h2>
            <p className="text-muted-foreground">
              実際のプロジェクトで使える具体的な実装例とベストプラクティスを紹介します。
            </p>
            <Button asChild className="w-full" variant="secondary">
              <Link href="/pages-and-layouts">実装例を見る</Link>
            </Button>
          </Card>

          <Card className="p-6 space-y-4">
            <Rocket className="h-8 w-8 text-primary" />
            <h2 className="text-xl font-semibold">最適化テクニック</h2>
            <p className="text-muted-foreground">
              パフォーマンスを最大限に引き出すための最適化テクニックを詳しく解説します。
            </p>
            <Button asChild className="w-full" variant="secondary">
              <Link href="/optimization">最適化する</Link>
            </Button>
          </Card>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">最新のアップデート</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">New</span>
              <span>App Router と Server Components の詳細な解説を追加</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sm bg-secondary text-secondary-foreground px-2 py-1 rounded">Update</span>
              <span>TypeScript のサポートに関する情報を更新</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-sm bg-secondary text-secondary-foreground px-2 py-1 rounded">Update</span>
              <span>パフォーマンス最適化のベストプラクティスを更新</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}