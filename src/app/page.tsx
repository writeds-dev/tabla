import HeroBanner from "@/components/Home/home-banner";
import About from "@/components/Home/about";
import WhyChoose from "@/components/Home/why-choose";
import Invest from "@/components/Home/invest";
import ModernIndian from "@/components/Home/modern-indian";
import FineDining from "@/components/Home/fine-dining";
import Awards from "@/components/Home/awards";
import Steps from "@/components/Home/steps";
import Join from "@/components/Home/join";
import Requirement from "@/components/Home/requirements";
import Founders from "@/components/Home/founders";
import Faq from "@/components/Home/faq";
import InitialUrl from "@/components/Home/initialUrl";
import SocialLinks from "@/components/Home/fixedLinks/page";
import VideoSection from "@/components/Home/Video/page";
export default async function Home() {
  return (
    <>
      <HeroBanner {...heroData} />
      <About />
      <WhyChoose {...dynamicData} />
      
      <Invest {...investmentData} />
      <FineDining />
      <ModernIndian />
      <Awards />
      <Steps {...stepsData} />
      <Join content={joinContent} />
      <Requirement content={pageContent} />
      <Founders />
      <VideoSection content={videoContent} />
      <Faq />
      <SocialLinks />
      < InitialUrl/>
    </>
  );
}

const heroData = {
  backgroundImage: "/Home/ovideo.webp",
  heading: "Modern",
  highlightedWord: "Indian",
  subtitle: "Looking to start your own Indian dining venture?",
  description: "Tabla offers a proven, profitable franchise model with full support — let's build your success.",
  phoneNumber: "689-698-9212",
  awards: [
    { src: "/shared/image-1.webp", alt: "franchise-1" },
    { src: "/shared/image-2.webp", alt: "franchise-2" },
    { src: "/shared/image-3.webp", alt: "franchise-3" },
    { src: "/shared/image-4.webp", alt: "franchise-4" },
    { src: "/shared/image-5.webp", alt: "franchise-5" },
    { src: "/shared/image-6.webp", alt: "franchise-6" },
  ],
};
// ----------------------------------------------------------------------------------------------
const dynamicData = {
  sectionTagline: "Discover Why Our Service is the Best",
  headingLine1: "Your Trusted Partner",
  headingLine2: "In Every Step of the Way",
  introHeading: "Why Choose Tabla as Your Restaurant Franchise Partner? ",
  introText: "Tabla is more than just a restaurant franchise — it’s a nationally recognized brand with deep roots in Indian fine dining and modern fusion cuisine. Since our founding in 2008, we’ve become a go-to destination for guests who crave quality, innovation, and consistency. Now, we're giving aspiring entrepreneurs the chance to bring our proven success to new communities across the U.S",
  benefitsHeading: "The Benefits of Franchise with Us",
  benefitsList: [
    { title: "Strong Marketing & Tech Support", description: "From digital marketing to reservation tech — we've got you covered." },
    { title: "Proven Success Across the U.S.", description: "A fast-growing Indian brand with locations thriving nationwide." },
    { title: "Franchise Support You Can Count On", description: "We guide you from setup to growth with ongoing mentorship." },
  ],
  ctaText: "Get Started Today",
  ctaHref: "#home-form",
  images: [
    { src: "/Home/fortworth.webp" ,alt:"Restaurant Franchise USA " },
    { src: "/Home/Laknona.webp" , alt:"Restaurant Franchise USA"},
    { src: "/Home/orlando.webp", alt:"Restaurant Franchise USA"},
    { src: "/Home/ovideo.webp" , alt:"Restaurant Franchise USA "},
    { src: "/Home/Schamburg.webp" , alt:"Restaurant Franchise USA "},
  ]
};
// ----------------------------------------------------------------------------------------------
import { InvestContent } from '@/components/Home/invest';
const investmentData: InvestContent = {
  heading: "Invest in a Growing Food Franchise Brand ",
  subheading: "with Tabla — Invest in a Trusted Brand",
  paragraph: `Ready to invest in a high-growth restaurant franchise? Tabla is a leading premium dining brand in Central Florida, now expanding across the U.S. Franchisees can choose from two flexible ownership models: Full-Service Fine Dining or Fast Casual — both offering authentic Indian Fusion Cuisine curated for modern diners. Join Tabla to bring a top-tier culinary experience to your local market — with full support and brand power.`,
  ctaText: "Get Started",
  ctaHref: "#home-form",
  image: {
    src: "/About/coins.webp",
    alt: "Restaurant Franchise Investment",
    width: 1200,
    height: 600,
  },
};
// ----------------------------------------------------------------------------------------------
import { LucideHome, LucideMapPin, LucideCheckCircle, LucideUserCheck } from "lucide-react";
const stepsData = {
  sectionTagline: "How it Works",
  heading: "Steps to Own a Tabla Franchise",
  description: "Owning a Tabla franchise is more than a business decision — it is an opportunity to bring bold, modern Indian and Asian cuisine to your community. We have designed a streamlined, transparent, and supportive process to help you go from inquiry to grand opening with clarity and confidence.",
  steps: [
    {
      title: "Chat with Our Team",
      desc: " Share your vision and learn how Tabla can support your goals.",
      icon: LucideHome, // Use appropriate icon
    },
    {
      title: "Visit Our Locations",
      desc: " Get a firsthand look at our operations and meet our franchise family.",
      icon: LucideMapPin, // Use appropriate icon
    },

    {
      title: "Receive the Franchise Kit",
      desc: " Review detailed documentation and business expectations.",
      icon: LucideUserCheck, // Use appropriate icon
    },
    {
      title: "Begin Onboarding",
      desc: " We help plan your launch, hire your team, and prepare your space.",
      icon: LucideUserCheck, // Use appropriate icon
    },
    {
      title: "Approval & Launch",
      desc: "Once approved by our leadership, you’ll receive full support through your grand opening and beyond.",
      icon: LucideCheckCircle, 
    },
  ],
  cta: {
    text: "Get Started Now",
    href: "#home-form",
  },
  image: {
    src: "/Home/ovideo.webp",
    alt: "Investment Process",
    width: 1200,
    height: 600,
  },
};
// ----------------------------------------------------------------------------------------------
import { JoinContent } from "@/components/Home/join";
const joinContent: JoinContent = {
  title: "Join the Growth Movement",
  subtitle: "We are expanding rapidly across the country",
  description: "Join us and become a part of our fast-growing network of franchises.",
  ctaText: "Get Started",
  ctaHref: "#home-form",
  mapImage: {
    src: "/About/map.png",
    alt: "Map showing growth locations",
    width: 1200,
    height: 800,
  },
  markers: [
    {
      id: 1,
      top: "60%",
      left: "45%",
      label: "FORT WORTH",
    },
    {
      id: 2,
      top: "67%",
      left: "78%",
      label: " WinterPark,Ovideo,LakeNona,OrlandoCafe",
    },
    {
      id: 3,
      top: "45%",
      left: "62%",
      label: "Schamburg",
    },
    {
      id: 4,
      top: "50%",
      left: "82%",
      label: " Location Soon: Claremont,FL",
    },
    {
      id: 5,
      top: "35%",
      left: "90%",
      label: "Location Soon: Richmond,FL",
    },
  ],
};
// ----------------------------------------------------------------------------------------------
// financialData.ts
const pageContent = {
  heading: "Franchise Financial Requirements",
  description:
    "To successfully launch and operate a Tabla Restaurant Franchise, it's essential to understand the financial commitment involved. Your investment not only secures the brand, systems, and support but also sets the foundation for long-term success.",
  image: {
    src: "/Investment/intialcapital.webp",
    alt: "best food franchise to own",
    width: 600,
    height: 400,
  },
  features: [
    {
      title: "Startup Investment",
      description: "Ranges from $185K to $400K for Fast Casual, and $324K to $629K for Fine Dining.",
      bg: "bg-blue-500", // background color for icon
    },
    {
      title: "Initial Franchise Fee",
      description: "A one-time fee of $36K for Fast Casual and $45K for Fine Dining.",
      bg: "bg-green-500",
    },
    {
      title: "Brand Development Fund",
      description: "Contributing 2% of Gross Sales.",
      bg: "bg-yellow-500",
    },
    {
      title: "Ongoing Royalty",
      description: "6% of Gross Sales for continued support and training.",
      bg: "bg-red-500",
    },
  ], 
   ctaText: "Apply Now",
  ctaHref: "#home-form",
};


// ----------------------------------------------------------------------------------------------
// Example content object that follows the updated VideoContent interface
import  { VideoContent } from '@/components/Home/Video/page';
import { Metadata } from "next";
const videoContent: VideoContent = {
  heading: "Discover the Tabla Franchise Opportunity",
  highlight: "Tabla Franchise",
  description:
    "Tabla is leading the way in modern Indian food franchises by combining culinary excellence with streamlined operations and strategic growth. Whether you’re looking to open in a bustling city or a growing suburb, Tabla’s franchise system is ready to support your journey. ",
  videoUrl: "https://player.vimeo.com/video/951267091?h=a3aa651a1a",
  ctaText: "Get Started",
  ctaHref: "#home-form",
};


export const metadata: Metadata = {
  metadataBase: new URL("https://www.tablafranchise.com"),
  title: {
    default: "Indian Restaurant & Food Franchise Opportunity in USA | Tabla",
    template: "%s | Tabla Franchise",
  },
  description:
    "Start your journey with Tabla Franchise – a leading Indian restaurant franchise in the USA. Explore profitable food franchise opportunities today!",
  keywords: [
    "restaurant franchise",
    "indian restaurant franchise in usa",
    "indian restaurant franchise",
    "indian food franchise in usa",
    "food franchises",
    "food franchise opportunities",
    "best food franchises to own",
    "indian franchise in usa",
    "best restaurant franchises to own",
    "tabla restaurant franchise",
    "tabla franchise",
    "buy a franchise",
  ],
  openGraph: {
    title: "Indian Restaurant Franchise in USA | Tabla Franchise Opportunity",
    description:
      "Own a Tabla Indian Restaurant Franchise in USA. Explore the best food franchise opportunities with a proven brand. Buy a franchise & start your success today!",
    url: "https://www.tablafranchise.com",
    siteName: "Tabla Franchise",
    images: [
      {
        url: "https://www.tablafranchise.com/shared/logo-new.svg",
        width: 1200,
        height: 630,
        alt: "Tabla Franchise Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Restaurant Franchise in USA | Tabla Franchise Opportunity",
    description:
      "Own a Tabla Indian Restaurant Franchise in USA. Explore the best food franchise opportunities with a proven brand.",
    images: ["https://www.tablafranchise.com/shared/logo-new.svg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.tablafranchise.com",
  },
};
