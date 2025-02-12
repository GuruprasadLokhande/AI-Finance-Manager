import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Wealth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* Header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* Footer */}
          <footer className="bg-blue-500 py-5">
            <div className="container mx-auto text-center px-4 text-gray-600">
              <p>© 2025 AI Finance Manager. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
