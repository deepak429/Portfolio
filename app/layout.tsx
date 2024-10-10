import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepak Choudhary - Portfolio",
  description: "A clean, minimalistic portfolio website designed to showcase metadata-driven content. The design emphasizes simplicity, with a light color scheme, clear typography, and ample white space to highlight important details. Metadata such as project descriptions, dates, roles, and tools used are neatly organized in sections. A subtle navigation bar allows easy access to various portfolio sections like 'About Me,' 'Projects,' and 'Contact.' Icons or minimal illustrations are used sparingly, ensuring the focus remains on the textual content and metadata presentation.",
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
