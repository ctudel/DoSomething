import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from '@/app/ui/sidebar/sidebar';
import "@/app/ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Something2do",
  description: "Get told something else to do that is not as boring and just as productive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): any {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row items-center gap-0">
          <div className="hidden md:block">
            <Sidebar />
          </div>

          <div className="flex flex-col justify-center items-center h-screen md:w-4/5 md:h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
