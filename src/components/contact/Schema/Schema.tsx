
import Head from "next/head";

export default function SchemaHead() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Contact Tabla Franchise | Start Your Journey",
              alternateName: "Tabla Franchise",
              url: "https://www.tablafranchise.com/contactUs",
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
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Contact Tabla Franchise | Start Your Journey",
              "@id": "https://www.tablafranchise.com/contactUs/#localbusiness",
              url: "https://www.tablafranchise.com/contactUs/",
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
                "https://www.instagram.com/tablacuisine/",
                "https://www.youtube.com/@Tablacuisine",
                "https://x.com/tablacuisine",
              ],
            },
          ]),
        }}
      />
    </Head>
  );
}
