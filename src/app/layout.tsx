import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import BluredBackroundAnimation from "@/components/BluredBackgroundAnimation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "<Peter/> Portfolio",
  description: "Portfolio website made by Piotr Matlak.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>
        <div className="relative">
          <main className="relative z-10 text-yellow-50">{children}</main>
          <BluredBackroundAnimation />
        </div>
      </body>
    </html>
  );
}
