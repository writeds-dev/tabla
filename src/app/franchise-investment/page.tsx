
import { Metadata } from 'next';
import FranchiseInvestmentDetails from '@/components/franchise-investment/invest/page';

export const metadata: Metadata = {
  title: 'Franchise Investment Opportunity | Launch a Profitable Franchise',
  description:
    'Explore franchise investment opportunities with high ROI. Start your own profitable franchise business with full support and proven success.',
  keywords: [
    'Franchise Investment',
    'Franchise Investment Opportunity',
    'Investment for Food Franchise',
  ],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.tablafranchise.com/franchise-investment',
  },
  openGraph: {
    title: 'Franchise Investment Opportunity | Launch a Profitable Franchise',
    description:
      'Explore franchise investment opportunities with high ROI. Start your own profitable franchise business with full support and proven success.',
    url: 'https://www.tablafranchise.com/franchise-investment',
    images: [
      {
        url: '/Investment/franchise-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Franchise Investment Banner with logo and professional design',
      },
    ],
    type: 'website',
  },
};


export default function invest(){
  return <FranchiseInvestmentDetails/>
}