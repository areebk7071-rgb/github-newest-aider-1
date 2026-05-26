import { Helmet } from "react-helmet-async";
import { siteConfig } from "../../config/site";
import { seoKeywords, businessFacts, seoFaqItems } from "../../config/seo";
/* Updated import path: the og image resides in src/assets, so we need to go up two levels
   from this file (src/components/shared) to reach the assets folder. */
import defaultOgImage from "../../assets/og-home.jpg";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "product";
  /** Include FAQ JSON-LD (home, contact) */
  includeFaqSchema?: boolean;
  noSuffix?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Schema builders – kept pure functions for testability                     */
/* -------------------------------------------------------------------------- */
function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nayab Seeds",
    url: siteConfig.url || "https://nayabseeds.pk",
    description: "Grow the Extraordinary. Premium ecological seeds, native plants, and organic gardening in Pakistan.",
    areaServed: {
      "@type": "City",
      name: "Karachi",
      containedInPlace: {
        "@type": "Country",
        name: "Pakistan",
      },
    },
    knowsAbout: [
      "Organic Seeds",
      "Vegetable Seeds Pakistan",
      "Flower Seeds Pakistan",
      "Native Plants Pakistan",
      "Rare Seeds",
      "Ecological Restoration"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.contact?.email || "info@nayabseeds.pk",
      telephone: siteConfig.contact?.phone || "",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  };
}

function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nayab Seeds",
    url: siteConfig.url || "https://nayabseeds.pk",
    description: "Grow the Extraordinary. Premium ecological seeds, native plants, and organic gardening in Pakistan.",
    inLanguage: "en-PK",
    about: {
      "@type": "Thing",
      name: "Karachi gardening, organic seeds, and ecological restoration in Pakistan",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url || "https://nayabseeds.pk"}/shop?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Main component                                                             */
/* -------------------------------------------------------------------------- */
export default function Seo({
  title,
  description = "Grow the Extraordinary. Buy premium vegetable, flower, herb, and native seeds online in Pakistan. Optimized for Karachi and local climates.",
  path = "",
  image,
  type = "website",
  includeFaqSchema = false,
  noSuffix = false,
}: SeoProps) {
  const brandName = "Nayab Seeds";
  const tagline = "Grow the Extraordinary";
  const brandSuffix = noSuffix ? "" : ` | ${brandName}`;
  const fullTitle = title
    ? `${title}${brandSuffix}`
    : `${brandName} — ${tagline} | Premium Ecological Seeds Pakistan`;
  const url = `${siteConfig.url || "https://nayabseeds.pk"}${path}`;
  const ogImage = image ?? defaultOgImage;
  const keywords = seoKeywords.join(", ") || "buy seeds online Pakistan, vegetable seeds Pakistan, flower seeds Pakistan, gardening Pakistan, native plants Pakistan, rare seeds Pakistan, organic seeds Pakistan";

  const schemas: Record<string, unknown>[] = [buildOrganizationSchema(), buildWebSiteSchema()];
  if (includeFaqSchema) schemas.push(buildFaqSchema());

  return (
    <Helmet>
      {/* Basic HTML attributes */}
      <html lang="en-PK" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Primary SEO tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={brandName} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={url} />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="PK-SD" />
      <meta name="geo.placename" content="Karachi" />
      <meta name="geo.position" content="24.8607;67.0011" />
      <meta name="ICBM" content="24.8607, 67.0011" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={brandName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_PK" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON‑LD schema markup */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
