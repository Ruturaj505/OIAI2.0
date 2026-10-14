import type { Metadata, Viewport } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://oiai.edu.in"),
  title: "OIAI | Odisha Institute of Artificial Intelligence • Learn AI. Build Real Skills.",
  description:
    "Odisha Institute of Artificial Intelligence (OIAI) — Industry-focused AI education for students, graduates and professionals with practical projects, expert mentorship, internships and career guidance in Bhubaneswar, Odisha.",
  keywords: [
    "OIAI",
    "Odisha Institute of AI",
    "AI Education Odisha",
    "AI Institute in Bhubaneswar",
    "AI Training in Bhubaneswar",
    "Machine Learning Institute Bhubaneswar",
    "Generative AI Course Bhubaneswar",
    "Artificial Intelligence Courses",
    "AI Internships Odisha",
  ],
  authors: [{ name: "Odisha Institute of Artificial Intelligence" }],
  alternates: {
    canonical: "https://oiai.edu.in",
  },
  openGraph: {
    title: "OIAI | Odisha Institute of Artificial Intelligence",
    description: "Industry-focused AI education with live projects, expert mentorship, internships, and career placement in Bhubaneswar.",
    url: "https://oiai.edu.in",
    siteName: "Odisha Institute of Artificial Intelligence",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/oiai-logo.png",
        width: 1200,
        height: 630,
        alt: "Odisha Institute of Artificial Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OIAI | Learn Artificial Intelligence. Build Real Skills.",
    description: "Industry-focused AI education with practical projects, expert mentorship, internships and career placement.",
    images: ["/images/oiai-logo.png"],
  },
  icons: {
    icon: "/favicon2.0.png",
    shortcut: "/favicon2.0.png",
    apple: "/favicon2.0.png",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://oiai.edu.in/#organization",
      name: "Odisha Institute of Artificial Intelligence",
      alternateName: "OIAI",
      url: "https://oiai.edu.in",
      logo: "https://oiai.edu.in/images/oiai-logo.png",
      email: "admissions@oiai.edu.in",
      telephone: "+91-674-291-3000",
      description: "Premier computational artificial intelligence institute in Bhubaneswar, Odisha providing deep-tech education, research, internships, and placement.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Infocity Tech Park, Patia",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751024",
        addressCountry: "IN",
      },
      sameAs: [
        "https://linkedin.com/company/oiai-institute",
        "https://twitter.com/oiai_edu",
        "https://github.com/oiai-institute",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://oiai.edu.in/#localbusiness",
      name: "Odisha Institute of Artificial Intelligence (OIAI)",
      image: "https://oiai.edu.in/images/oiai-logo.png",
      telephone: "+91-674-291-3000",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Infocity Tech Park, Patia",
        addressLocality: "Bhubaneswar",
        addressRegion: "Odisha",
        postalCode: "751024",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 20.3588,
        longitude: 85.8166,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "08:00",
          closes: "20:30",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://oiai.edu.in/#website",
      url: "https://oiai.edu.in",
      name: "Odisha Institute of Artificial Intelligence",
      publisher: {
        "@id": "https://oiai.edu.in/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#f5f4ef] text-[#0f0f0e] font-sans antialiased selection:bg-indigo-500/20 selection:text-indigo-900 flex flex-col">
        {children}
      </body>
    </html>
  );
}

