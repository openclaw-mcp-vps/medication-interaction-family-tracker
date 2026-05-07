import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FamilyMedTracker – Track Family Medication Interactions",
  description: "Monitor multiple family members' medications for dangerous interactions, track side effects, and get alerts for pharmacy refills."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6d584290-10e4-4548-9779-500ae531944f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
