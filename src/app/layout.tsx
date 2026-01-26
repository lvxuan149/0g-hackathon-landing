import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "0G Vibe Coding Hackathon | 深圳站",
  description: "从支付到信任：将智能体经济从实验室带入生产环境。0G深圳Vibe Coding黑客松，探索Agent原生支付基础设施与去中心化AI交易竞技场。",
  keywords: ["0G", "Vibe Coding", "黑客松", "AI Agent", "去中心化", "区块链", "深圳"],
  authors: [{ name: "0G Labs" }],
  openGraph: {
    title: "0G Vibe Coding Hackathon | 深圳站",
    description: "从支付到信任：将智能体经济从实验室带入生产环境",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
