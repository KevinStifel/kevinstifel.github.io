import type { Metadata } from "next";
import { Roboto, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Kevin Stifel — Software Developer | Backend & Flutter Engineer",
  description: "Software Developer Engineer specializing in backend development with Node.js, Express, and Flutter. Based in Chile, graduate of Pontificia Universidad Católica de Chile.",
  keywords: "Kevin Stifel, Software Developer, Backend Engineer, Flutter Developer, Node.js, Express.js, PostgreSQL, MongoDB, AWS, Docker, React, Chile, Santiago",
  authors: [{ name: "Kevin Stifel" }],
  openGraph: {
    title: "Kevin Stifel — Software Developer | Backend & Flutter Engineer",
    description: "Backend Developer specializing in Node.js, Flutter, and cloud deployments. Graduate of Pontificia Universidad Católica de Chile.",
    type: "website",
    url: "https://kevinstifel.github.io/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${poppins.variable} ${raleway.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
