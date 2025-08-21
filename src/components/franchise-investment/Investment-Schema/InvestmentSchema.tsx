
import Head from "next/head";

const InvestmentData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Franchise Investment Opportunity | Launch a Profitable Franchise",
    image: "https://www.tablafranchise.com/Investment/franchise-image.jpg",
    "@id": "https://www.tablafranchise.com/franchise-investment/#localbusiness",
    url: "https://www.tablafranchise.com/franchise-investment",
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
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </Head>
  );
};
export default InvestmentData;
