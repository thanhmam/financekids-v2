import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata = {
  title: "XuXu - Học Tài Chính Vui Vẻ",
  description: "Game học tài chính dành cho trẻ em từ 6-16 tuổi",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "XuXu - Học Tài Chính Vui Vẻ",
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
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-kids antialiased min-h-screen bg-[#FFF9F0]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
