import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/pages/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GreaterTechHub",
  description: "GreaterTechHub offers a comprehensive range of IT services, including Software Development & Integration, Network & Infrastructure Solutions, Digital Marketing, Web Development & Integration, Cloud Services, ERP, CRM, DevOps, Virtual Desktop Infrastructure (VDI), Virtualization, IT Asset Management, IT Compliance & Governance, and Unified Communications. Our expert team provides innovative solutions to enhance business operations, security, and digital transformation.",
  keywords: "IT services in faridabad, Software Development, Network Solutions, Web Development in India, Digital Marketing in haryana, Cloud Services best in the world, ERP Services, CRM, DevOps, Virtual Desktop Infrastructure, IT Compliance, IT Governance, Unified Communications, IT Asset Management"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <nav className="sticky top-0 w-full  z-[999]">
          <Navbar />
        </nav>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
