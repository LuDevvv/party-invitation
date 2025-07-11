import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Benjamin - Safari Adventure | Fiesta de 3 años",
  description:
    "¡Únete a la aventura safari de Benjamin! Celebra sus 3 años con nosotros. Sábado 28 de Outubro a las 15H.",
  keywords: "fiesta infantil, safari, cumpleaños, benjamin, 3 años, invitación",
  authors: [{ name: "Safari Party Team" }],
  openGraph: {
    title: "Benjamin - Safari Adventure | Fiesta de 3 años",
    description:
      "¡Únete a la aventura safari de Benjamin! Celebra sus 3 años con nosotros.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/images/og-safari.jpg",
        width: 1200,
        height: 630,
        alt: "Fiesta Safari de Benjamin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin - Safari Adventure | Fiesta de 3 años",
    description:
      "¡Únete a la aventura safari de Benjamin! Celebra sus 3 años con nosotros.",
    images: ["/images/og-safari.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased min-h-screen`}
      >
        <main className="relative overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
