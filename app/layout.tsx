import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
                <div>
                    {/*<SideNav/>*/}
                </div>
                {children}
            </body>
        </html>
    );
}
