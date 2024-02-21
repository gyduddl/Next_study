import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css"; //스타일 전역 설정

const inter = Inter({ subsets: ["latin"] });

//정적 메타 데이터
export const metadata: Metadata = {
  title: "날씨 앱",
  description: "날씨를 알려드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
