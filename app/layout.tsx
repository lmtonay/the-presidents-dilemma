import type { Metadata } from "next";
import { Cinzel, Inter, Noto_Color_Emoji, Tiro_Bangla } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Panel from "./Panels";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

const notoColorEmoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  weight: "400",
  variable: "--font-noto-color-emoji",
});

const tiroBangla = Tiro_Bangla({
  subsets: ["bengali"],
  weight: "400",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "The President's Dilemma",
  description: "A game to govern your desired state like a president.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html>
          <body
            className={cn(
              cinzel.className,
              inter.className,
              notoColorEmoji.className,
              tiroBangla.className,
              "antialiased"
            )}
          >
            <Panel>{children}</Panel>
          </body>
        </html>
  );
}
