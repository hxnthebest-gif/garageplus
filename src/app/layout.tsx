import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "İstanbul PPF Kaplama, Renk Değişimi, Cam Filmi, PDR | Garaj Plus Premium",
  description:
    "İstanbul Bahçelievler'de STIL TECH 210 Micron TPU PPF kaplama, renk değişimi, cam filmi ve boyasız göçük onarımında 13 yıllık uzman adres. 7 yıl solma-sararma garantisiyle aracınızı koruyun.",
  keywords: [
    "İstanbul PPF",
    "PPF kaplama",
    "boya koruma filmi",
    "araç PPF",
    "renk değişimi",
    "araç kaplama",
    "cam filmi",
    "boyasız göçük onarımı",
    "PDR İstanbul",
    "Garaj Plus Premium",
    "STIL TECH TPU"
  ],
  openGraph: {
    title: "Garaj Plus Premium | İstanbul PPF Kaplama & Araç Koruma",
    description: "360° interaktif araç stüdyosu, STIL TECH 210 Micron TPU PPF, 7 yıl garanti ve 13 yıllık uzman işçilik.",
    type: "website",
    locale: "tr_TR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
