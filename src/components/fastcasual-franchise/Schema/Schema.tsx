
export default function SchemaData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fast Casual Restaurant Franchise | Tabla Franchise",
    alternateName: "Tabla Franchise",
    url: "https://www.tablafranchise.com/franchiese-model/fast-casual-franchise/",
    logo: "https://www.tablafranchise.com/shared/logo-new.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1 (689) 698-9212",
      contactType: "customer service",
      areaServed: "US",
    },
    sameAs: [
      "https://www.facebook.com/Tablacuisine",
      "https://x.com/tablacuisine",
      "https://www.instagram.com/tablacuisine/",
      "https://www.youtube.com/@Tablacuisine",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fast Casual Restaurant Franchise | Tabla Franchise",
    image: "",
    "@id": "https://www.tablafranchise.com/franchiese-model/fast-casual-franchise/#localbusiness",
    url: "https://www.tablafranchise.com/franchiese-model/fast-casual-franchise",
    telephone: "+1 (689) 698-9212",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5829 Grand National Drive",
      addressLocality: "Orlando",
      addressRegion: "FL",
      postalCode: "32819",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/Tablacuisine",
      "https://www.instagram.com/tablacuisine/#",
      "https://www.youtube.com/@Tablacuisine",
      "https://x.com/tablacuisine",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
</>
  );
}
