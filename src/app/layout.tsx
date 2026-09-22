import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SH Event Management — Quality Service, Our Passion",
  description:
    "SH Event Management is an event equipment rental and photography company based in Madina, Accra, Ghana. We rent tents, chairs, mobile toilets, cooling equipment and event flooring, and provide professional event photography.",
  keywords: [
    "SH Event Management",
    "event rental Accra",
    "tents for hire Ghana",
    "Chiavari chairs Accra",
    "event photography Ghana",
    "mobile toilet rental Accra",
    "Madina event services",
  ],
  authors: [{ name: "SH Event Management" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "SH Event Management — Quality Service, Our Passion",
    description:
      "Event equipment rental & photography in Madina, Accra. Tents, chairs, cooling, flooring, mobile toilets and professional photography.",
    siteName: "SH Event Management",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
