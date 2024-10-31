import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutTemplate, Layers, Box } from "lucide-react";

export default function PagesAndLayoutsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">ページとレイアウト</h1>
          <p className="text-xl text-muted-foreground">
            Next.jsのページ構造とレイアウトシステムについて解説します。
          </p>
        </div>

        <Tabs defaultValue="pages">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pages">
              <Box className="mr-2 h-4 w-4" />
              ページ
            </TabsTrigger>
            <TabsTrigger value="layouts">
              <LayoutTemplate className="mr-2 h-4 w-4" />
              レイアウト
            </TabsTrigger>
            <TabsTrigger value="templates">
              <Layers className="mr-2 h-4 w-4" />
              テンプレート
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">ページの基本</h2>
              <p className="mb-4">
                Next.jsのページは、appディレクトリ内のpage.tsxファイルとして定義されます。
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  {`// app/page.tsx
export default function Page() {
  return (
    <div>
      <h1>ようこそ</h1>
    </div>
  );
}`}
                </pre>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Server Components</h3>
                <p>
                  デフォルトでは、すべてのページコンポーネントは
                  Server Componentsとして動作します。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">Client Components</h3>
                <p>
                  'use client'ディレクティブを使用することで、
                  クライアントサイドのインタラクションを実装できます。
                </p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="layouts" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">レイアウトシステム</h2>
              <p className="mb-4">
                レイアウトを使用して、複数のページ間で共有されるUIを定義します。
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  {`// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav>...</nav>
        {children}
        <footer>...</footer>
      </body>
    </html>
  );
}`}
                </pre>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">ネストされたレイアウト</h3>
                <p>
                  複数のレイアウトを入れ子にすることで、
                  より細かいUIの共有が可能です。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">グループレイアウト</h3>
                <p>
                  (folder)記法を使用して、URLに影響を与えずに
                  レイアウトをグループ化できます。
                </p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">テンプレート</h2>
              <p className="mb-4">
                テンプレートは、各ページのインスタンスごとに新しいDOMを作成します。
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  {`// app/template.tsx
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="template">{children}</div>;
}`}
                </pre>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">レイアウトとの違い</h3>
                <p>
                  テンプレートは各ナビゲーションで再マウントされ、
                  状態は保持されません。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">使用ケース</h3>
                <p>
                  アニメーションやページ固有の状態が必要な
                  場合に適しています。
                </p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}