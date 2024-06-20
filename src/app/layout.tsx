import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edge-store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "websworks-lab starter nextjs app",
  description: "leaning fullstack nextjs app with edge store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
      </body>
    </html>
  );
}
