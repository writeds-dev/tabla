import "@/app/globals.scss";
import Layout from "@/components/Home/shared/layout";
import PixelScripts from "@/components/Home/pixelScripts";
import { PostHogProvider } from "@/components/Home/PostHogProvider";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { headers } from "next/headers"; 

const Schemas=[

  {
    "url": "/",
    "local_schema": { 
      "@context": "https://schema.org", 
      "@type": "LocalBusiness", 
      "name": " Indian Restaurant & Food Franchise Opportunity in USA | Tabla", 
      "image": " https://www.tablafranchise.com/shared/logo-new.svg", 
      "@id": "https://www.tablafranchise.com/ #localbusiness", 
      "url": "https://www.tablafranchise.com/franchiese-model/fine-dining-franchise", 
      "telephone": "+1 (689) 698-9212", 
      "address": { 
        "@type": "PostalAddress", 
        "streetAddress": "5829 Grand National Drive", 
        "addressLocality": "Orlando", 
        "addressRegion": "FL", 
        "postalCode": "32819", 
        "addressCountry": "US" 
      } , 
      "sameAs": [ 
        "https://www.facebook.com/Tablacuisine", 
        "https://www.instagram.com/tablacuisine/#", 
        "https://www.youtube.com/@Tablacuisine", 
        "https://x.com/tablacuisine" 
      ]  
    },
    "faq_schema": { 

      "@context": "https://schema.org", 
    
      "@type": "FAQPage", 
    
      "mainEntity": [{ 
    
        "@type": "Question", 
    
        "name": "Is this franchise suitable for a fine dining setup in a metropolitan area?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Yes, Tabla is a great fit for a fine dining restaurant franchise, especially in big cities. Our brand and menu are designed to attract customers looking for high‑quality Indian and Asian food franchises in metropolitan areas." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "Can I convert my existing restaurant into a Tabla franchise?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Absolutely! You can turn your current restaurant into a Tabla food franchise. We’ll guide you through the process and help you adopt our franchise business model smoothly." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "What kind of return on investment (ROI) can I expect from a fine dining franchise?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "While results vary, many of our fine dining restaurant franchise owners see strong returns thanks to our proven restaurant franchise system, popular cuisine, and efficient operations. For more details you can contact our team." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "Are there exclusive territories available for new franchisees?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Yes, we offer exclusive territories to new franchise business owners. This helps you grow your Indian franchise in USA without direct competition from other Tabla locations nearby." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "Is financing assistance available for new franchisees?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Yes, we can help connect you with financing options that support new food franchise opportunities. This makes it easier to start your journey with Tabla." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "How does the franchise ensure consistency across multiple locations?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "We maintain quality and consistency in every restaurant franchise through detailed training, regular audits, and standardized recipes. This helps all locations deliver the same great experience." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "What makes Tabla different from other Indian food franchises in the U.S.?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Tabla stands out among Indian franchises in the USA because of our chef‑independent operations, mix of Indian and Asian cuisine, strong brand, and ongoing support for franchise owners." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "Is Tabla a good choice for first‑time food franchise owners?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Yes! Tabla is one of the best food franchise opportunities for beginners. We offer complete training and guidance, so you don’t need prior restaurant experience." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "Do you offer a fast‑casual restaurant franchise option in addition to fine dining?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "Yes, Tabla offers both fine dining restaurant franchise and fast‑casual franchise options. You can choose the format that best suits your location and budget." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "What ongoing support does Tabla provide to food franchise owners?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "We provide full support—including marketing, training, and daily operations—to help you run your food franchise successfully. You’re never alone in your journey with Tabla." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "What licensing or permits do I need to start a restaurant franchise with Tabla?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
    
          "text": "You’ll need standard local licenses and a permit for opening a restaurant franchise. Our team will guide you through this process step by step." 
    
        } 
    
      },{ 
    
        "@type": "Question", 
    
        "name": "How does Tabla maintain quality control across its restaurant franchises?", 
    
        "acceptedAnswer": { 
    
          "@type": "Answer", 
          "text": "We have clear systems and tools to keep quality high in every restaurant franchise. This includes supplier checks, regular staff training, and consistent food preparation methods." 
        } 
      },{ 
        "@type": "Question", 
        "name": "Can I customize the menu at my Tabla food franchise location?", 
        "acceptedAnswer": { 
          "@type": "Answer", 
          "text": "While we offer a set menu, some limited customization is allowed based on local tastes—while still keeping the franchise business model and brand identity intact." 
        }
      }] 
    } 
  },

  {
  "url": "/about",
  "local_schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "About Us | Get to Know Tabla Franchise",
    "image": "",
    "@id": "https://www.tablafranchise.com/about-us/#localbusiness",
    "url": "https://www.tablafranchise.com/about-us",
    "telephone": "+1 (689) 698-9212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5829 Grand National Drive",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32819",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://www.instagram.com/tablacuisine/#",
      "https://www.youtube.com/@Tablacuisine",
      "https://x.com/tablacuisine"
    ]
  },
  "organization_schema": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "About Us | Get to Know Tabla Franchise",
    "alternateName": "Tabla Franchise",
    "url": "https://www.tablafranchise.com/about-us/",
    "logo": "https://www.tablafranchise.com/shared/logo-new.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (689) 698-9212",
      "contactType": "customer service",
      "areaServed": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://x.com/tablacuisine",
      "https://www.instagram.com/tablacuisine/",
      "https://www.youtube.com/@Tablacuisine"
    ]
  }
},
// Mission
{
  "url": "/about/Mission",
  "local_schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tabla Franchise",
    "image": "https://www.tablafranchise.com/shared/logo-new.svg",
    "@id": "https://www.tablafranchise.com/about-us/Mission/#localbusiness",
    "url": "https://www.tablafranchise.com/about-us/Mission",
    "telephone": "+1 (689) 698-9212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5829 Grand National Drive",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32819",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://www.instagram.com/tablacuisine",
      "https://www.youtube.com/@Tablacuisine",
      "https://x.com/tablacuisine"
    ]
  },
  "organization_schema": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tabla Franchise",
    "alternateName": "Tabla Franchise",
    "url": "https://www.tablafranchise.com/about-us/Mission",
    "logo": "https://www.tablafranchise.com/shared/logo-new.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (689) 698-9212",
      "contactType": "customer service",
      "areaServed": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://x.com/tablacuisine",
      "https://www.instagram.com/tablacuisine",
      "https://www.youtube.com/@Tablacuisine"
    ]
  }
},
// contact
{
  "url": "/contact",
  "local_schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Contact Tabla Franchise | Start Your Journey",
    "@id": "https://www.tablafranchise.com/contactUs/#localbusiness",
    "url": "https://www.tablafranchise.com/contactUs/",
    "telephone": "+1 (689) 698-9212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5829 Grand National Drive",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32819",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://www.instagram.com/tablacuisine/",
      "https://www.youtube.com/@Tablacuisine",
      "https://x.com/tablacuisine"
    ]
  },
  "organization_schema": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Contact Tabla Franchise | Start Your Journey",
    "alternateName": "Tabla Franchise",
    "url": "https://www.tablafranchise.com/contactUs",
    "logo": "https://www.tablafranchise.com/shared/logo-new.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (689) 698-9212",
      "contactType": "customer service",
      "areaServed": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://x.com/tablacuisine",
      "https://www.instagram.com/tablacuisine/",
      "https://www.youtube.com/@Tablacuisine"
    ]
  }
},
// fast casual 
{
  "url": "/franchiese-model/fast-casual-franchise",
  "local_schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fast Casual Restaurant Franchise | Tabla Franchise",
    "image": "",
    "@id": "https://www.tablafranchise.com/franchiese-model/fast-casual-franchise/#localbusiness",
    "url": "https://www.tablafranchise.com/franchiese-model/fast-casual-franchise",
    "telephone": "+1 (689) 698-9212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5829 Grand National Drive",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32819",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://www.instagram.com/tablacuisine/#",
      "https://www.youtube.com/@Tablacuisine",
      "https://x.com/tablacuisine"
    ]
  },
  "organization_schema": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fast Casual Restaurant Franchise | Tabla Franchise",
    "alternateName": "Tabla Franchise",
    "url": "https://www.tablafranchise.com/franchiese-model/fast-casual-franchise/",
    "logo": "https://www.tablafranchise.com/shared/logo-new.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (689) 698-9212",
      "contactType": "customer service",
      "areaServed": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://x.com/tablacuisine",
      "https://www.instagram.com/tablacuisine/",
      "https://www.youtube.com/@Tablacuisine"
    ]
  },
  "faq_schema": { 

    "@context": "https://schema.org", 
  
    "@type": "FAQPage", 
  
    "mainEntity": [{ 
  
      "@type": "Question", 
  
      "name": "What makes a fast casual franchise worth investing in?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "The most attractive fast casual franchises offer easy-to-run operations, mass appeal, and strong growth potential. Tabla’s model checks all these boxes with its modern take on Indian cuisine served in a quick, efficient format designed for today’s consumer." 
  
      } 
  
    },{ 
  
      "@type": "Question", 
  
      "name": "Does Tabla Franchise offer a fast casual Asian franchise model?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "Yes, Tabla’s fast casual model brings together Indian, Thai, and Chinese flavors, offering a vibrant and diverse menu in a quick-serve environment. It’s ideal for urban, multicultural markets where bold, fresh flavors are in demand." 
  
      } 
  
    },{ 
  
      "@type": "Question", 
  
      "name": "Are fast casual franchise opportunities profitable?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "Absolutely. Fast casual restaurants typically run on lower labor costs and faster table turnover, making them lean and efficient. Tabla’s format is built to maximize volume without compromising on food quality." 
  
      } 
  
    },{ 
  
      "@type": "Question", 
  
      "name": "What makes fast casual franchises different from fast food?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "Unlike fast food, fast casual emphasizes fresh ingredients, made-to-order meals, and a more comfortable dine-in setup. Tabla offers the feel of a sit-down restaurant with the speed and convenience today’s diners expect." 
  
      } 
  
    },{ 
  
      "@type": "Question", 
  
      "name": "How much does it cost to start a fast casual restaurant franchise?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "The estimated initial investment is around $185,000, depending on the location and size. This includes setup, equipment, and initial marketing. Tabla’s offering is competitively priced, especially considering the brand positioning and support included." 
      } 
    },{ 
      "@type": "Question", 
      "name": "Is Tabla a good fast casual restaurant franchise for new owners?", 
      "acceptedAnswer": { 
        "@type": "Answer", 
        "text": "Definitely. With complete training, marketing assistance, and a simple operating model, Tabla is a great opportunity for first-time entrepreneurs looking to enter the restaurant space with confidence." 
      } 
    }] 
  } 
},
// fine dine
{
  "url": "/franchiese-model/fine-dining-franchise",
  "local_schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fine Dining Franchise Opportunity | Tabla Franchise",
    "image": "",
    "@id": "https://www.tablafranchise.com/franchiese-model/fine-dining-franchise/#localbusiness",
    "url": "https://www.tablafranchise.com/franchiese-model/fine-dining-franchise",
    "telephone": "+1 (689) 698-9212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5829 Grand National Drive",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32819",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://www.instagram.com/tablacuisine/#",
      "https://www.youtube.com/@Tablacuisine",
      "https://x.com/tablacuisine"
    ]
  },
  "organization_schema": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fine Dining Franchise Opportunity in USA | Tabla Franchise",
    "alternateName": "Tabla Franchise",
    "url": "https://www.tablafranchise.com/franchiese-model/fine-dining-franchise",
    "logo": "https://www.tablafranchise.com/shared/logo-new.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (689) 698-9212",
      "contactType": "customer service",
      "areaServed": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://x.com/tablacuisine",
      "https://www.instagram.com/tablacuisine/",
      "https://www.youtube.com/@Tablacuisine"
    ]
  },
  "fqa_schema": { 

    "@context": "https://schema.org", 
  
    "@type": "FAQPage", 
  
    "mainEntity": [{ 
  
      "@type": "Question", 
  
      "name": "What is a fine dining restaurant franchise?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "A fine dining franchise offers a premium experience—upscale interiors, refined service, and a chef-driven menu. Tabla’s fine dining model delivers all of this with a contemporary Indian and Asian fusion twist." 
  
      } 
  
    },{ 
  
      "@type": "Question", 
  
      "name": "Does Tabla offer a fine dining format for franchising?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "Yes. Our fine dining franchise model is designed for premium markets and includes curated Indian, Thai, and Indo-Chinese dishes, paired with a luxurious ambiance and high-end presentation." 
  
      } 
  
    },{ 
  
      "@type": "Question", 
  
      "name": "How is fine dining different from casual or fast casual dining?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "Fine dining focuses on the overall experience—carefully designed interiors, attentive service, and a thoughtfully crafted menu. Tabla’s fine dining format delivers an immersive journey that goes beyond just food." 
  
      } 
  
    },{ 
  
      "@type": "Question", 
  
      "name": "Is investing in an upscale dining franchise profitable?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "It can be very rewarding. With higher average ticket sizes, repeat clientele, and a strong brand presence, Tabla’s fine dining outlets are built to perform well in the right markets. Operational efficiency is a key part of our model, even at the premium level." 
  
      } 
  
    },{ 
  
      "@type": "Question", 
  
      "name": "What are the key features of Tabla’s fine dining franchise?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "Signature décor, chef-led kitchens, a refined multi-cuisine menu, and a commitment to quality. We focus on consistency, presentation, and guest satisfaction to create a memorable experience across all locations." 
  
      } 
  
    },{ 
  
      "@type": "Question", 
  
      "name": "How do I know if fine dining will work in my market?", 
  
      "acceptedAnswer": { 
  
        "@type": "Answer", 
  
        "text": "If your target location draws a well-traveled, affluent, or experience-seeking audience, a fine dining concept like Tabla’s can do exceptionally well. We help assess the location’s potential and fit before onboarding." 
  
      } 
  
    }] 
  
  } 
},
// investment 
{
  "url": "/franchise-investment",
  "local_schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Franchise Investment Opportunity | Launch a Profitable Franchise",
    "image": "https://www.tablafranchise.com/Investment/franchise-image.jpg",
    "@id": "https://www.tablafranchise.com/franchise-investment/#localbusiness",
    "url": "https://www.tablafranchise.com/franchise-investment",
    "telephone": "+1 (689) 698-9212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5829 Grand National Drive",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32819",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://www.instagram.com/tablacuisine/#",
      "https://www.youtube.com/@Tablacuisine",
      "https://x.com/tablacuisine"
    ]
  }
},
// why-choose-us
{
  "url": "/why-choose-us",
  "local_schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Why Choose Tabla Franchise | Proven Restaurant Model",
    "@id": "https://www.tablafranchise.com/why-choose-us/#localbusiness",
    "url": "https://www.tablafranchise.com/why-choose-us/",
    "telephone": "+1 (689) 698-9212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5829 Grand National Drive",
      "addressLocality": "Orlando",
      "addressRegion": "FL",
      "postalCode": "32819",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://www.instagram.com/tablacuisine/",
      "https://www.youtube.com/@Tablacuisine",
      "https://x.com/tablacuisine"
    ]
  },
  "organization_schema": {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Why Choose Tabla Franchise | Proven Restaurant Model",
    "alternateName": "Tabla Franchise",
    "url": "https://www.tablafranchise.com/why-choose-us/",
    "logo": "https://www.tablafranchise.com/shared/logo-new.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (689) 698-9212",
      "contactType": "customer service",
      "areaServed": "US"
    },
    "sameAs": [
      "https://www.facebook.com/Tablacuisine",
      "https://x.com/tablacuisine",
      "https://www.instagram.com/tablacuisine/",
      "https://www.youtube.com/@Tablacuisine"
    ]
  }
},
// faq schema fast casual 
{
  "url": "/franchiese-model/fast-casual-franchise/faq",
  "faq_schema": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes a fast casual franchise worth investing in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most attractive fast casual franchises offer easy-to-run operations, mass appeal, and strong growth potential. Tabla’s model checks all these boxes with its modern take on Indian cuisine served in a quick, efficient format designed for today’s consumer."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tabla Franchise offer a fast casual Asian franchise model?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Tabla’s fast casual model brings together Indian, Thai, and Chinese flavors, offering a vibrant and diverse menu in a quick-serve environment. It’s ideal for urban, multicultural markets where bold, fresh flavors are in demand."
        }
      },
      {
        "@type": "Question",
        "name": "Are fast casual franchise opportunities profitable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Fast casual restaurants typically run on lower labor costs and faster table turnover, making them lean and efficient. Tabla’s format is built to maximize volume without compromising on food quality."
        }
      },
      {
        "@type": "Question",
        "name": "What makes fast casual franchises different from fast food?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike fast food, fast casual emphasizes fresh ingredients, made-to-order meals, and a more comfortable dine-in setup. Tabla offers the feel of a sit-down restaurant with the speed and convenience today’s diners expect."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to start a fast casual restaurant franchise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The estimated initial investment is around $185,000, depending on the location and size. This includes setup, equipment, and initial marketing. Tabla’s offering is competitively priced, especially considering the brand positioning and support included."
        }
      },
      {
        "@type": "Question",
        "name": "Is Tabla a good fast casual restaurant franchise for new owners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Definitely. With complete training, marketing assistance, and a simple operating model, Tabla is a great opportunity for first-time entrepreneurs looking to enter the restaurant space with confidence."
        }
      }
    ]
  }
},
// finedine schema 
{
  "url": "/franchiese-model/fine-dining-franchise/faq",
  "faq_schema": {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a fine dining restaurant franchise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A fine dining franchise offers a premium experience—upscale interiors, refined service, and a chef-driven menu. Tabla’s fine dining model delivers all of this with a contemporary Indian and Asian fusion twist."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tabla offer a fine dining format for franchising?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our fine dining franchise model is designed for premium markets and includes curated Indian, Thai, and Indo-Chinese dishes, paired with a luxurious ambiance and high-end presentation."
        }
      },
      {
        "@type": "Question",
        "name": "How is fine dining different from casual or fast casual dining?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fine dining focuses on the overall experience—carefully designed interiors, attentive service, and a thoughtfully crafted menu. Tabla’s fine dining format delivers an immersive journey that goes beyond just food."
        }
      },
      {
        "@type": "Question",
        "name": "Is investing in an upscale dining franchise profitable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It can be very rewarding. With higher average ticket sizes, repeat clientele, and a strong brand presence, Tabla’s fine dining outlets are built to perform well in the right markets. Operational efficiency is a key part of our model, even at the premium level."
        }
      },
      {
        "@type": "Question",
        "name": "What are the key features of Tabla’s fine dining franchise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Signature décor, chef-led kitchens, a refined multi-cuisine menu, and a commitment to quality. We focus on consistency, presentation, and guest satisfaction to create a memorable experience across all locations."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if fine dining will work in my market?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your target location draws a well-traveled, affluent, or experience-seeking audience, a fine dining concept like Tabla’s can do exceptionally well. We help assess the location’s potential and fit before onboarding."
        }
      }
    ]
  }
}
]

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const currentUrl = headersList.get("x-original-uri") || "/";  

  //current URL
  const matchedSchema = Schemas.find((schema) => schema.url === currentUrl);

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5PKJ6K37');
            `,
          }}
        />

                {/* Insert Schema JSON-LD only if a match is found */
              
                
                }
                {matchedSchema ? (
          <>
            {matchedSchema.local_schema && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(matchedSchema.local_schema),
                }}
              />
            )}
            {matchedSchema.organization_schema && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(matchedSchema.organization_schema),
                }}
              />
            )}

          {matchedSchema.faq_schema && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(matchedSchema.faq_schema),
                }}
              />
            )}
          </>
        ) : (
          // Optional: Add default schema or handle missing schema gracefully
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Default Organization",
                "url": "https://www.tablafranchise.com",
                "logo": "https://www.tablafranchise.com/shared/logo-new.svg",
              }),
            }}
          />
          
        )}
      </head>
      <body
        className="font-sans"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PKJ6K37"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Meta Pixel */}
        <Script id="fb-pixel-base" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)}; 
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; 
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1381085842889541');
            fbq('track', 'PageView');
          `} 
        </Script>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-3WH3RV9Q65"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3WH3RV9Q65');
          `}
        </Script>
        
          <Script id="tawk-to-chatbot" strategy="afterInteractive">
          {`
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/682f8d5c669d85190ea028a5/1irss0csv';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  `}
        </Script>
        <PixelScripts />
        <PostHogProvider>
          <Layout>{children}</Layout>
        </PostHogProvider>
      </body>
    </html>
  );
}
