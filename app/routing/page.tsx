import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitBranch, FolderTree, FileCode } from "lucide-react";

export default function RoutingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">ルーティング</h1>
          <p className="text-xl text-muted-foreground">
            Next.jsのファイルシステムベースのルーティングについて解説します。
          </p>
        </div>

        <Tabs defaultValue="basics">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basics">
              <GitBranch className="mr-2 h-4 w-4" />
              基本概念
            </TabsTrigger>
            <TabsTrigger value="dynamic">
              <FolderTree className="mr-2 h-4 w-4" />
              動的ルート
            </TabsTrigger>
            <TabsTrigger value="advanced">
              <FileCode className="mr-2 h-4 w-4" />
              高度な使い方
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">基本的なルーティング</h2>
              <p className="mb-4">
                Next.jsのルーティングは、ファイルシステムに基づいています。
                appディレクトリ内のファイル構造がそのままURLパスになります。
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  {`app/
├── page.tsx      # /
├── about/
│   └── page.tsx  # /about
└── blog/
    └── page.tsx  # /blog`}
                </pre>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">ページ</h3>
                <p>
                  page.tsxファイルがルートのエンドポイントとなり、
                  そのパスでアクセス可能なページを定義します。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">レイアウト</h3>
                <p>
                  layout.tsxファイルで、複数のページで共有される
                  レイアウトを定義できます。
                </p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="dynamic" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">動的ルーティング</h2>
              <p className="mb-4">
                動的なパラメータを含むルートを作成する方法について説明します。
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  {`app/
├── blog/
│   ├── [slug]/
│   │   └── page.tsx  # /blog/post-1
│   └── page.tsx      # /blog
└── users/
    └── [id]/
        └── page.tsx  # /users/123`}
                </pre>
              </div>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">動的セグメント</h3>
                <p>
                  [param]形式で動的なパスパラメータを定義できます。
                  これらのパラメータはページコンポーネントで利用可能です。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">キャッチオールルート</h3>
                <p>
                  [...param]を使用して、複数のパスセグメントを
                  キャッチすることができます。
                </p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">高度なルーティング機能</h2>
              <p className="mb-4">
                Next.jsが提供する高度なルーティング機能について説明します。
              </p>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">パラレルルート</h3>
                <p>
                  @folder記法を使用して、同じURLで複数のページを
                  同時に表示することができます。
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-2">インターセプトルート</h3>
                <p>
                  (.)記法を使用して、現在のレイアウト内で
                  別のルートのコンテンツを表示できます。
                </p>
              </Card>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">ルーティングのベストプラクティス</h3>
              <ul className="space-y-2">
                <li>
                  <strong>意味のあるURL構造:</strong>
                  {" "}SEOを考慮した論理的なパス設計
                </li>
                <li>
                  <strong>適切なセグメント化:</strong>
                  {" "}関連するコンテンツをグループ化
                </li>
                <li>
                  <strong>エラーハンドリング:</strong>
                  {" "}not-found.tsxやerror.tsxの適切な配置
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}