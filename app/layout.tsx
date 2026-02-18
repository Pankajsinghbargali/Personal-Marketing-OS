import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Command Center",
  description: "Personal Marketing OS for campaigns, content, leads, analytics, and growth."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
