const SchemaData = () => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "About Us | Get to Know Tabla Franchise",
    alternateName: "Tabla Franchise",
    url: "https://www.tablafranchise.com/about-us/",
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

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "About Us | Get to Know Tabla Franchise",
    image: "",
    "@id": "https://www.tablafranchise.com/about-us/#localbusiness",
    url: "https://www.tablafranchise.com/about-us",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  );
};

export default SchemaData;
