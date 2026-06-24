import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata = {
  title: "FinanceKids - Học Tài Chính Vui Vẻ",
  description: "Game học tài chính dành cho trẻ em từ 6-16 tuổi",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "FinanceKids - Học Tài Chính Vui Vẻ",
    description: "Game học tài chính dành cho trẻ em",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#FF6B35",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-kids antialiased min-h-screen bg-[#FFF9F0]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
