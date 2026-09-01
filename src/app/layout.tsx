import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eliza Espinosa | Arquitecta de Soluciones",
  description: "Estratega digital con más de 10 años de experiencia en ecosistemas CRM y desarrollo web.",
  //description: 'Portafolio de Eliza Espinosa (Claudia Hernández). Más de una década transformando ecosistemas digitales complejos en flujos de datos eficientes y estratégicos.',
  openGraph: {
    title: 'Claudia Hernández Espinosa | Arquitecta de Soluciones',
    description: 'Transformando ecosistemas digitales complejos en flujos de datos eficientes.',
    url: 'https://elizaespinosa.com',
    siteName: 'Portafolio de Claudia Hernández',
    images: [
      {
        url: 'https://nxcgnisajkspmrjdesys.supabase.co/storage/v1/object/public/src/eliza-espinosa.jpg',
        width: 1200,
        height: 700,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={cn(inter.className, "antialiased bg-background text-foreground")}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}