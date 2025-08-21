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
import SocialLinks from "@/components/Home/fixedLinks/page";
import VideoSection from "@/components/Home/Video/page";

export default async function Home() {
  return (
    <>
      <HeroBanner {...heroData} />
      <About />
      <WhyChoose {...dynamicData } />
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
    { src: "/shared/image-1.webp", alt: "Award 1" },
    { src: "/shared/image-2.webp", alt: "Award 2" },
    { src: "/shared/image-3.webp", alt: "Award 3" },
    { src: "/shared/image-4.webp", alt: "Award 4" },
    { src: "/shared/image-5.webp", alt: "Award 5" },
    { src: "/shared/image-6.webp", alt: "Award 6" },
  ],
};
// ----------------------------------------------------------------------------------------------

const dynamicData = {
  sectionTagline: "Discover Why Our Service is the Best",
  headingLine1: "Your Trusted Partner",
  headingLine2: "In Every Step of the Way",
  introHeading: "Why Franchise with  Tabla?",
  introText: "Partnering with Tabla Restaurant Franchise means more than just business — it's a step into a legacy of modern Indian fine dining excellence. With proven systems, ongoing support, and a beloved menu, you're investing in more than a brand — you're joining a family of growth, flavor, and success..",
  benefitsHeading: "The Benefits of Franchise with Us",
  benefitsList: [
    { title: "Strong Marketing & Tech Support", description: "From digital marketing to reservation tech — we've got you covered." },
    { title: "Proven Success Across the U.S.", description: "A fast-growing Indian brand with locations thriving nationwide." },
    { title: "Franchise Support You Can Count On", description: "We guide you from setup to growth with ongoing mentorship." },
  ],
  ctaText: "Become a Successful Restaurant Owner",
  ctaHref: "#home-form",
  images: [
    { src: "/Home/fortworth.webp" },
    { src: "/Home/Laknona.webp" },
    { src: "/Home/orlando.webp" },
    { src: "/Home/ovideo.webp" },
    { src: "/Home/Schamburg.webp" },
  ]
};
// ----------------------------------------------------------------------------------------------
import { InvestContent } from '@/components/Home/invest';
const investmentData: InvestContent = {
  heading: "Restaurant Franchise Opportunity",
  subheading: "with Tabla — Invest in a Trusted Brand",
  paragraph: `Ready to invest in a high-growth restaurant franchise? Tabla is a leading premium dining brand in Central Florida, now expanding across the U.S. Franchisees can choose from two flexible ownership models: Full-Service Fine Dining or Fast Casual — both offering authentic Indian Fusion Cuisine curated for modern diners. Join Tabla to bring a top-tier culinary experience to your local market — with full support and brand power.`,
  ctaText: "Own an Authentic Indian Restaurant",
  ctaHref: "#home-form",
  image: {
    src: "/About/coins.png",
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
      title: " Chat",
      desc: "Chat with our franchise team to get started.",
      icon: LucideHome, // Use appropriate icon
    },
    {
      title: " Visit Us",
      desc: "Explore our concept and meet the Tabla team.",
      icon: LucideMapPin, // Use appropriate icon
    },

    {
      title: " Receive",
      desc: "Get detailed documentation and the Franchise Kit.",
      icon: LucideUserCheck, // Use appropriate icon
    },
    {
      title: " Onboarding",
      desc: "Begin onboarding and launch planning.",
      icon: LucideUserCheck, // Use appropriate icon
    },
    {
      title: " Approval",
      desc: "Get reviewed and approved by our leadership team.",
      icon: LucideCheckCircle, // Use appropriate icon
    },
  ],
  cta: {
    text: "Own Your Amazing Tabla Franchise",
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
  ctaText: "Bring Authentic Indian Flavors to Your City",
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
    "Below is a list of the financial requirements needed to become part of the Tabla franchise family.",
  image: {
    src: "/Investment/intialcapital.webp",
    alt: "Franchise Requirements",
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
  ctaText: "Own Your Amazing Tabla Franchise",
  ctaHref: "#home-form",
};

// ----------------------------------------------------------------------------------------------
import  { VideoContent } from '@/components/Home/Video/page';
const videoContent: VideoContent = {
  heading: "Discover the Tabla Franchise Opportunity",
  highlight: "Tabla Franchise",
  description:
    "Watch our short video to learn how Tabla is redefining Indian dining across the U.S. — and how you can be part of this exciting journey.",
  videoUrl: "https://player.vimeo.com/video/951267091?h=a3aa651a1a",
  ctaText: "Become Your Area's Indian Food Destination",
  ctaHref: "#home-form",
};

