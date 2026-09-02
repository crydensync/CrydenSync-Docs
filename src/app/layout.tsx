import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_URL = "https://crydensync-docs.vercel.app";
const SITE_NAME = "CrydenSync";

const TITLE = "CrydenSync Own your users";

const DESCRIPTION =
  "An embeddable, framework-agnostic authentication engine for Go. Self-hosted, zero telemetry, no vendor lock-in.";

// Files inside /public
const LOGO_PATH = "/logo.png";
const OG_IMAGE_PATH = "/og-image.png";

// Official CrydenSync profiles
const SOCIAL_LINKS = [
  "https://github.com/crydensync",
  "https://x.com/CrydenSync",
  "https://discord.gg/xUCYcDBAWx",
  "https://chat.whatsapp.com/IkPWOYlnr4DI6zTzEC0g8m",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: "%s — CrydenSync",
  },

  description: DESCRIPTION,

  keywords: [
    "CrydenSync",
    "Cryden",
    "Csax",
    "authentication",
    "authentication engine",
    "auth engine",
    "self-hosted authentication",
    "Go authentication",
    "Go auth library",
    "JWT",
    "session management",
    "open source authentication",
    "vendor-free authentication",
  ],

  authors: [
    {
      name: "Raymond Nicholas",
      url: "https://github.com/raymondproguy",
    },
  ],

  creator: "Raymond Nicholas",

  publisher: "CrydenSync",

  // Browser tab / favicon
  icons: {
    icon: [
      {
        url: LOGO_PATH,
        type: "image/png",
      },
    ],

    apple: [
      {
        url: LOGO_PATH,
        type: "image/png",
      },
    ],
  },

  // Google Search
  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Google Search Console verification
  verification: {
    google: "UZf8zS3H-1D48h6I4vOJQUlHCsikfwlE2-gikqCcVrQ",
  },

  // Social sharing / Open Graph
  openGraph: {
    type: "website",

    url: SITE_URL,

    siteName: SITE_NAME,

    locale: "en_US",

    title: TITLE,

    description: DESCRIPTION,

    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1900,
        height: 730,
        alt: "CrydenSync Own your users",
        type: "image/png",
      },
    ],
  },

  // X / Twitter
  twitter: {
    card: "summary_large_image",

    site: "@CrydenSync",

    creator: "@CrydenSync",

    title: TITLE,

    description: DESCRIPTION,

    images: [
      {
        url: OG_IMAGE_PATH,
        alt: "CrydenSync Own your users",
      },
    ],
  },
};

// Google Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: SITE_NAME,

  url: SITE_URL,

  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}${LOGO_PATH}`,
  },

  sameAs: SOCIAL_LINKS,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google / Schema.org Organization information */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>

      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}