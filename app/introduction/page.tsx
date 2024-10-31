import { Card } from "@/components/ui/card";

export default function IntroductionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Next.jsとは</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground">
            Next.jsは、Reactベースのフルスタックフレームワークです。
            高速なパフォーマンス、優れた開発者体験、そして堅牢なアプリケーション構築を可能にします。
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">主な特徴</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">ハイブリッドレンダリング</h3>
              <p>
                ページごとにSSR、SSG、CSRを選択可能。
                最適なレンダリング方式を柔軟に選べます。
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">自動ルーティング</h3>
              <p>
                ファイルシステムベースのルーティング。
                複雑な設定なしでページを追加できます。
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">最適化機能</h3>
              <p>
                画像最適化、フォント最適化、スクリプト最適化など、
                パフォーマンスを自動的に向上させます。
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-2">開発者体験</h3>
              <p>
                Fast Refresh、TypeScriptサポート、
                ESLint統合など、快適な開発環境を提供。
              </p>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">なぜNext.jsを選ぶのか</h2>
          
          <ul className="space-y-4 list-disc pl-6">
            <li>
              <strong>高速なパフォーマンス:</strong>
              {" "}自動的な最適化機能により、高速なWebアプリケーションを構築できます。
            </li>
            <li>
              <strong>SEO対応:</strong>
              {" "}SSRとSSGにより、検索エンジン最適化が容易です。
            </li>
            <li>
              <strong>スケーラビリティ:</strong>
              {" "}小規模から大規模まで、プロジェクトの成長に合わせて拡張できます。
            </li>
            <li>
              <strong>豊富なエコシステム:</strong>
              {" "}多くのプラグインやツールが利用可能です。
            </li>
          </ul>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Next.jsを学ぶメリット</h3>
            <p>
              Next.jsは現代のWeb開発において重要な位置を占めています。
              多くの企業が採用しており、Next.jsのスキルは高い需要があります。
              このドキュメントを通じて、段階的にNext.jsの理解を深めていきましょう。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}