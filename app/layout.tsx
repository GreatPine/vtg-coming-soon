import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vtguide.app"),
  title: {
    default: "VTG — AI Tourist Virtual Guide",
    template: "%s | VTG",
  },
  description:
    "AI turistički vodič koji pravi personalizovane rute i audio ture za gradove širom sveta.",
  applicationName: "VTG — Tourist Virtual Guide",
  creator: "VTG",
  publisher: "VTG",

  keywords: [
    "AI travel app",
    "tourist guide",
    "travel planner",
    "audio tour",
    "city guide",
    "VTG",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "VTG — Tourist Virtual Guide",
    description:
      "AI turistički vodič za gradove širom sveta.",
    url: "/",
    siteName: "VTG",
    locale: "sr_RS",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "VTG — Tourist Virtual Guide",
    description: "AI turistički vodič za gradove širom sveta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
