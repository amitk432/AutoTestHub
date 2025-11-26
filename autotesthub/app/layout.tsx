import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "AutoTestHub",
  description: "Unified Automation Testing Sandbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ flex: 1, marginLeft: '260px', padding: '2rem' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
