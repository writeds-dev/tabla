import Image from "next/image";
import { FC, ReactNode } from "react";
import {
  Home, Sofa, Package, PartyPopper, DollarSign,
  Flag, Monitor, UserCheck, FileText
} from 'lucide-react';

interface InclusionItem {
  title: string;
  subtitle?: string;
  description?: string;
  img?: string;
  alt?: string; // Added alt prop!
  icon?: ReactNode;
}

const InvestmentInclusionsSection: FC = () => {
  const inclusions: InclusionItem[] = [
    {
      icon: <Home />,
      title: 'Construction and Leasehold Improvements',
      subtitle: 'Building and Renovations',
      description: 'Build your unit and leasehold improvements to meet the standards set by Tabla from a brand and operational perspective.',
      img: '/Investment/construct.webp',
      alt: 'Construction workers renovating a restaurant interior for Tabla Franchise',
    },
    {
      icon: <Sofa />,
      title: 'Furniture, Fixtures, and Equipment',
      subtitle: 'Office and Store Setup',
      description: 'Furniture and equipment needed to fully furnish the space.',
      img: '/Investment/Furniture.webp',
      alt: 'Modern restaurant furniture and fixtures setup for Tabla Franchise',
    },
    {
      icon: <Package />, title: 'Initial Inventory',
      subtitle: 'Stock and Supplies',
      description: 'Article items necessary for unit operations including ingredients, packaging, etc.',
      img: '/Investment/inventory.webp',
      alt: 'Restaurant inventory including ingredients and supplies on shelves',
    },
    {
      icon: <PartyPopper />,
      title: 'Marketing for Grand Opening',
      subtitle: 'Launch Campaign',
      description: 'Targeted local and social media campaigns to create hype and drive traffic on opening day.',
      img: '/Investment/opening.webp',
      alt: 'Grand opening celebration with balloons and a crowd at Tabla restaurant',
    },
    {
      icon: <DollarSign />,
      title: 'Initial Working Capital',
      subtitle: 'Operational Funds',
      description: 'Payment of initial costs for payroll, inventory, utilities, and operating costs before revenue starts generating.',
      img: '/Investment/intialcapital.webp',
      alt: 'Financial capital funds and payroll planning at restaurant office',
    },
    {
      icon: <Flag />,
      title: 'Eye-catching Branded Signage',
      subtitle: 'Brand Visibility',
      description: 'Branded indoor and outdoor signage to increase visibility while enhancing our brand.',
      img: '/Investment/signage.webp',
      alt: 'Outdoor signage of Tabla Franchise on restaurant building',
    },
    {
      icon: <Monitor />,
      title: 'Restaurant Software Systems',
      subtitle: 'Technology Setup',
      description: 'Modern point-of-sale and inventory management and reservations software to function seamlessly on a daily basis.',
      img: '/Investment/software.webp',
      alt: 'Restaurant POS system and reservation software on screen',
    },
    {
      icon: <UserCheck />,
      title: 'Training and Onsite Support',
      subtitle: 'Onsite Support',
      description: 'Onsite training and support for the opening and staff training prior to the launch.',
      img: '/Investment/support.webp',
      alt: 'Trainer conducting staff training at Tabla Franchise restaurant',
    },
    {
      icon: <FileText />,
      title: 'Operations Manuals and SOP (Standard Operating Procedures)',
      subtitle: 'Operations Manuals',
      description: 'In place to ensure that the food quality and customer experience is consistent.',
      img: '/Investment/operation.webp',
      alt: 'Printed operations manual and SOP documents for Tabla Franchise',
    },
  ];

  return (
    <section className="bg-[#0f121a] py-20 px-4 sm:px-8 md:px-16 space-y-14" aria-labelledby="investment-inclusions-heading">
      <div className="max-w-5xl mx-auto text-center">
        <h2 id="investment-inclusions-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f3704b] via-[#ff9068] to-[#f3704b] leading-tight mb-4">
          What&apos;s Included in Your Initial Startup Investment?
        </h2>
        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-[#f3704b] to-[#ff9068] rounded-full" />
        <p className="text-gray-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
          Here&apos;s a detailed breakdown of the essential components you&apos;ll receive when you invest in a Tabla Franchise.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto space-y-14">
        {inclusions.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row items-center gap-8 bg-[#1c2330] p-6 md:p-8 rounded-2xl border border-gray-700 shadow-xl relative z-10"
            aria-labelledby={`inclusion-item-${idx}-heading`}
          >
            <div className="absolute -top-6 left-6 bg-[#f3704b] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md border-4 border-[#0f121a] text-sm z-20">
              {idx + 1}
            </div>

            <div className="w-full lg:w-1/3 rounded-xl overflow-hidden border border-gray-600 shadow-lg">
              {item.img ? (
                <Image
                  src={item.img}
                  alt={item.alt || item.title}
                  width={600}
                  height={340}
                  className="w-full h-48 md:h-60 object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  aria-describedby={`inclusion-item-${idx}-description`}
                />
              ) : (
                <div className="flex items-center justify-center h-48 md:h-60 bg-gradient-to-br from-[#b54e3c] to-[#892430] text-white text-5xl">
                  {item.icon}
                </div>
              )}
            </div>

            <div className="flex-1 text-left space-y-3 w-full lg:w-2/3">
              <h3 id={`inclusion-item-${idx}-heading`} className="text-2xl font-semibold text-white">{item.title}</h3>
              {item.subtitle && <h4 className="text-[#f3704b] font-semibold">{item.subtitle}</h4>}
              {item.description && (
                <p id={`inclusion-item-${idx}-description`} className="text-gray-300 text-md leading-relaxed">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmentInclusionsSection;
