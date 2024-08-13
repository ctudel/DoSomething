import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from '@/app/ui/sidebar';
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
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col items-center gap-y-80 md:flex-row md:gap-0">
                    <div>
                        <Sidebar/>
                    </div>

                    <div className="w-full h-full">
                        {children}                   
                    </div>
                </div>
            </body>
        </html>
    );
}
