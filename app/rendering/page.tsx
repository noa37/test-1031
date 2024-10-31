"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Cpu, Zap } from "lucide-react";

export default function RenderingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">レンダリング</h1>
          <p className="text-xl text-muted-foreground">
            Next.jsのレンダリング戦略について詳しく解説します。
          </p>
        </div>

        <Tabs defaultValue="server">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="server">
              <Server className="mr-2 h-4 w-4" />
              サーバーコンポーネント
            </TabsTrigger>
            <TabsTrigger value="client">
              <Cpu className="mr-2 h-4 w-4" />
              クライアントコンポーネント
            </TabsTrigger>
            <TabsTrigger value="hybrid">
              <Zap className="mr-2 h-4 w-4" />
              ハイブリッドレンダリング
            </TabsTrigger>
          </TabsList>

          <TabsContent value="server" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">React Server Components</h2>
              <p className="mb-4">
                Server Componentsは、サーバーサイドでレンダリングされ、
                パフォーマンスとSEOを向上させます。
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  {`// app/page.tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{/* データを使用したUI */}</main>;
}`}
                </pre>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">メリット</h3>
                <ul className="space-y-2">
                  <li>• 自動的なコード分割</li>
                  <li>• サーバーサイドの処理</li>
                  <li>• キャッシング機能</li>
                  <li>• バンドルサイズの削減</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">ユースケース</h3>
                <ul className="space-y-2">
                  <li>• データフェッチ</li>
                  <li>• バックエンドリソースへのアクセス</li>
                  <li>• 機密情報の扱い</li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="client" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Client Components</h2>
              <p className="mb-4">
                クライアントコンポーネントは、ブラウザで実行され、
                インタラクティブな機能を提供します。
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  {`"use client";

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
                </pre>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">使用するケース</h3>
                <ul className="space-y-2">
                  <li>• イベントリスナー</li>
                  <li>• useState/useEffect</li>
                  <li>• ブラウザAPI</li>
                  <li>• クライアントサイドの状態管理</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">最適化のヒント</h3>
                <ul className="space-y-2">
                  <li>• 必要な部分だけをクライアントに</li>
                  <li>• コンポーネントの分割</li>
                  <li>• 状態管理の最適化</li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="hybrid" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">ハイブリッドレンダリング</h2>
              <p className="mb-4">
                Server ComponentsとClient Componentsを組み合わせて、
                最適なパフォーマンスを実現します。
              </p>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">インターリービング</h3>
                <p>
                  Server ComponentsとClient Componentsを
                  効果的に組み合わせる手法です。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">境界の設計</h3>
                <p>
                  コンポーネントの責務を明確に分け、
                  適切なレンダリング戦略を選択します。
                </p>
              </Card>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">ベストプラクティス</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Server-first アプローチ:</strong>
                  {" "}デフォルトでServer Componentsを使用
                </li>
                <li>
                  <strong>Client Componentsの最小化:</strong>
                  {" "}必要な部分だけをクライアントサイドに
                </li>
                <li>
                  <strong>適切な粒度:</strong>
                  {" "}コンポーネントの分割と責務の明確化
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}