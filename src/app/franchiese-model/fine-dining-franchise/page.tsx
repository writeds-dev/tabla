// app/franchiese-model/fine-dining-franchise/metadata.ts
import { Metadata } from 'next';
import FineDine from '@/components/finedining-franchise/finedine/page';

export const metadata: Metadata = {
  title: 'Fine Dining Franchise Opportunity in USA |',
  description:
    'Partner with Tabla Franchise and bring a premium fine dining experience to your city. Join a trusted brand now!',
  keywords: [
    'Fine Dining Franchise',
    'fine dining restaurant franchise',
    'Best fine dining franchise in USA',
    'Luxury restaurant franchise',
    'Invest in fine dining franchise',
    'restaurant franchise business',
  ],
  alternates: {
    canonical:
      'https://www.tablafranchise.com/franchiese-model/fine-dining-franchise',
  },
  openGraph: {
    title: 'Fine Dining Franchise Opportunity | Tabla Franchise',
    description:
      'Partner with Tabla Franchise and bring a premium fine dining experience to your city. Join a trusted brand now!',
    url: 'https://www.tablafranchise.com/franchiese-model/fine-dining-franchise',
    type: 'website',
    images: [
      {
        url: 'https://www.tablafranchise.com/shared/logo-new.svg',
        width: 800,
        height: 600,
        alt: 'Tabla Franchise Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fine Dining Franchise Opportunity | Tabla Franchise',
    description:
      'Join Tabla’s trusted fine dining concept and bring premium Indian cuisine to your market.',
    images: ['https://www.tablafranchise.com/shared/logo-new.svg'],
  },
};

 export default function page(){
  return <FineDine/>
}