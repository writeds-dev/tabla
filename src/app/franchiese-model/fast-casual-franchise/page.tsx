
import { Metadata } from 'next';
import FastCasual from '@/components/fastcasual-franchise/fastcasual/page';
export const metadata: Metadata = {
  title: 'Fast Casual Restaurant Franchise in USA',
  description:
    'Invest in a Fast Casual Restaurant Franchise in USA with Tabla. Low risk, high reward—perfect for modern food entrepreneurs',
  keywords: [
    'fast casual restaurant franchise',
    'fast casual franchises',
    'best fast casual franchises',
    'fast casual franchise opportunities',
    'fast casual asian franchise',
  ],
  alternates: {
    canonical: 'https://www.tablafranchise.com/franchiese-model/fast-casual-franchise',
  },
  openGraph: {
    title: 'Fast Casual Restaurant Franchise | Tabla Franchise',
    description:
      'Invest in a fast casual concept with Tabla Franchise. Low risk, high reward—perfect for modern food entrepreneurs!',
    url: 'https://www.tablafranchise.com/franchiese-model/fast-casual-franchise',
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
    title: 'Fast Casual Restaurant Franchise | Tabla Franchise',
    description:
      'Explore a scalable and modern food business model with Tabla’s fast casual franchise opportunity.',
    images: ['https://www.tablafranchise.com/shared/logo-new.svg'],
  },
};

export default function fast (){
  return <FastCasual/>
}