import type { Metadata } from "next";
import { Orbitron, Montserrat } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Training Wraps | Cursos de Ploteo Vehicular",
  description: "Aprende ploteo vehicular profesional con los mejores instructores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${orbitron.variable} ${montserrat.variable} antialiased font-sans bg-tertiary text-secondary selection:bg-primary selection:text-tertiary`}
      >
        {children}
      </body>
    </html>
  );
}
