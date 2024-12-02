import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AuthProvider from "./authProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al-Quran - The Noble Quran",
  description:
    "Al-Quran - The Noble Quran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto 2xl:max-w-[90rem]">
            <AuthProvider>{children}</AuthProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
