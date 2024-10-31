"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal, Package, Wrench } from "lucide-react";
import { useState } from "react";

export default function InstallationPage() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("コピーしました！");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      setCopySuccess("コピーに失敗しました");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">インストール方法</h1>
          <p className="text-xl text-muted-foreground">
            Next.jsプロジェクトを始めるための手順を説明します。
          </p>
        </div>

        <Tabs defaultValue="create-next-app">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create-next-app">
              <Package className="mr-2 h-4 w-4" />
              create-next-app
            </TabsTrigger>
            <TabsTrigger value="manual">
              <Wrench className="mr-2 h-4 w-4" />
              手動インストール
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create-next-app" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">create-next-appを使用する</h2>
              <p className="mb-4">
                create-next-appは、Next.jsアプリケーションを作成する最も簡単な方法です。
              </p>
              <div className="bg-muted p-4 rounded-md relative">
                <code className="text-sm">
                  npx create-next-app@latest my-app
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-2"
                  onClick={() => copyToClipboard("npx create-next-app@latest my-app")}
                >
                  {copySuccess || "コピー"}
                </Button>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">インストール時のオプション</h3>
              <ul className="space-y-2">
                <li>
                  <strong>TypeScript:</strong> TypeScriptのサポートを追加
                </li>
                <li>
                  <strong>ESLint:</strong> コード品質を維持するためのツール
                </li>
                <li>
                  <strong>Tailwind CSS:</strong> ユーティリティファーストのCSSフレームワーク
                </li>
                <li>
                  <strong>App Router:</strong> 新しいApp Routerの使用
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="manual" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">手動でインストール</h2>
              <p className="mb-4">
                既存のプロジェクトにNext.jsを追加する場合は、以下の手順で行います。
              </p>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-md relative">
                  <code className="text-sm">
                    npm install next react react-dom
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2"
                    onClick={() => copyToClipboard("npm install next react react-dom")}
                  >
                    {copySuccess || "コピー"}
                  </Button>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">package.jsonの設定</h3>
              <Card className="p-4">
                <pre className="text-sm">
                  {JSON.stringify({
                    "scripts": {
                      "dev": "next dev",
                      "build": "next build",
                      "start": "next start"
                    }
                  }, null, 2)}
                </pre>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">システム要件</h2>
          <ul className="space-y-2">
            <li>
              <strong>Node.js:</strong> 18.17以降
            </li>
            <li>
              <strong>OS:</strong> macOS、Windows、Linux
            </li>
            <li>
              <strong>エディタ:</strong> VS Code推奨（Next.js用の拡張機能あり）
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}