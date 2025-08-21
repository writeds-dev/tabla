
import { Metadata } from 'next'
import ChooseUsClient from '@/components/chooseus/Chooseus/page'

export const metadata: Metadata = {
  title: 'Why Choose Tabla Franchise | Proven Restaurant Model',
  description:
    'Discover why investors trust Tabla Franchise—support, training, and a successful food business model. Partner with us today!',
  keywords: [
    'Profitable food franchise opportunities',
    'Why invest in a food franchise',
    'Benefits of owning a food franchise',
  ],
  alternates: { canonical: 'https://www.tablafranchise.com/why-choose-us/' },
  openGraph: {
    title: 'Why Choose Tabla Franchise | Proven Restaurant Model',
    description:
      'Discover why investors trust Tabla Franchise—support, training, and a successful food business model.',
    url: 'https://www.tablafranchise.com/why-choose-us/',
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
    title: 'Why Choose Tabla Franchise | Proven Restaurant Model',
    description:
      'Join a franchise backed by training, proven systems, and growth potential.',
    images: ['https://www.tablafranchise.com/shared/logo-new.svg'],
  },
}

export default function FineDine() {
  return <ChooseUsClient />
}
