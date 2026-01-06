import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { MotionRoot } from "@/components/motion-root";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "19歳理学部生の決意表明ポートフォリオ",
  description:
    "19歳理学部生がIT事業で独立するためのポートフォリオサイト。SNS運用 / Web制作実績と2026年の事業ビジョンをまとめた決意表明。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-50`}
      >
        <div className="flex min-h-screen bg-gradient-to-br from-[#050816] via-black to-[#050816]">
          <Sidebar />
          <main className="flex-1">
            <MotionRoot>{children}</MotionRoot>
          </main>
        </div>
      </body>
    </html>
  );
}
