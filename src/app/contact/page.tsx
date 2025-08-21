import React from 'react'
import ContactForm from '../../components/contact/Components/ContactFormClient'
import { Metadata } from 'next'

const contact = () => {
  return (
    <div>
        <ContactForm/>
    </div>
  )
}
export default contact;
export const metadata:Metadata = {
  title: 'Contact Tabla Franchise | Start Your Journey',
  description:
    'Ready to own your restaurant? Contact Tabla Franchise for expert guidance on starting your franchise journey today!',
  keywords: [
    'Contact Tabla restaurant franchise',
    'How to contact Tabla franchise team',
    'Tabla franchise contact details',
    'Get in touch with Tabla franchise',
  ],
  alternates: {
    canonical: 'https://www.tablafranchise.com/contact',
  },
  openGraph: {
    title: 'Contact Tabla Franchise | Start Your Journey',
    description:
      'Connect with Tabla Franchise and take the first step toward owning a successful Indian restaurant franchise.',
    url: 'https://www.tablafranchise.com/contactUs',
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
    title: 'Contact Tabla Franchise | Start Your Journey',
    description:
      'Reach out to the Tabla Franchise team and start building your dream business in the restaurant industry.',
    images: ['https://www.tablafranchise.com/shared/logo-new.svg'],
  },
};
