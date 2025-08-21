import React from 'react';
import { Mail, Linkedin } from 'lucide-react'; 
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    description:
      'Visionary leader with 10+ years of experience in tech innovation. Sarah drives our mission to create meaningful digital...',
    image: '/images/sarah.jpg',
    email: 'mailto:sarah@example.com',
    linkedin: 'https://www.linkedin.com/in/sarah-johnson',
  },
  {
    name: 'Michael Chen',
    role: 'Tech Lead',
    description:
      'Full-stack developer passionate about clean code and scalable architecture. Michael ensures our technical excellence...',
    image: '/images/michael.jpg',
    email: 'mailto:michael@example.com',
    linkedin: 'https://www.linkedin.com/in/michael-chen',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    description:
      'Award-winning designer who believes great design tells a story. Emily crafts beautiful, user-centered experiences that...',
    image: '/images/emily.jpg',
    email: 'mailto:emily@example.com',
    linkedin: 'https://www.linkedin.com/in/emily-rodriguez',
  },
  {
    name: 'David Park',
    role: 'Marketing Director',
    description:
      'Strategic marketing expert who builds authentic connections between brands and people. David amplifies our voice...',
    image: '/images/david.jpg',
    email: 'mailto:david@example.com',
    linkedin: 'https://www.linkedin.com/in/david-park',
  },
   {
    name: 'David Park',
    role: 'Marketing Director',
    description:
      'Strategic marketing expert who builds authentic connections between brands and people. David amplifies our voice...',
    image: '/images/david.jpg',
    email: 'mailto:david@example.com',
    linkedin: 'https://www.linkedin.com/in/david-park',
  },
   {
    name: 'David Park',
    role: 'Marketing Director',
    description:
      'Strategic marketing expert who builds authentic connections between brands and people. David amplifies our voice...',
    image: '/images/david.jpg',
    email: 'mailto:david@example.com',
    linkedin: 'https://www.linkedin.com/in/david-park',
  },
   {
    name: 'David Park',
    role: 'Marketing Director',
    description:
      'Strategic marketing expert who builds authentic connections between brands and people. David amplifies our voice...',
    image: '/images/david.jpg',
    email: 'mailto:david@example.com',
    linkedin: 'https://www.linkedin.com/in/david-park',
  },
   {
    name: 'David Park',
    role: 'Marketing Director',
    description:
      'Strategic marketing expert who builds authentic connections between brands and people. David amplifies our voice...',
    image: '/images/david.jpg',
    email: 'mailto:david@example.com',
    linkedin: 'https://www.linkedin.com/in/david-park',
  },
];

const TeamPage = () => {
  return (
    <div className="text-black bg-gray-100 py-10 md:py-20 lg:py-30">
      {/* Banner Section with Background Image */}
 
<section className="text-black px-6 flex flex-col items-center justify-center min-h-[200px] md:min-h-[300px] lg:min-h-[300px]">
  {/* Badge */}
  <span className="border border-black rounded-full px-7 py-2 text-sm mb-4 flex items-center gap-2">
    <span className="w-2 h-2 bg-red-800 rounded-full block"></span>
    Our Franchise Solutions
  </span>

  {/* Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-center max-w-4xl mb-6 leading-tight">
    Your Trusted Partner in <br />
    <span className="text-gray-900">Franchise Growth & Technology Solutions</span>
  </h2>

  {/* Subtitle */}
  <p className="text-center text-gray-600 max-w-3xl  mx-auto mb-14 text-sm sm:text-md md:text-lg lg:text-xl px-7 py-6 bg-gray-50 rounded-xl shadow-lg">
  Tabla Franchise provides top-tier technology solutions to help you grow, scale, and optimize your franchise operations. We offer specialized services and tailored solutions, including mobile apps, web platforms, and software solutions designed to meet the unique needs of multi-unit franchises. Our solutions are scalable, secure, and designed to streamline your franchise management and improve your business efficiency.
</p>

</section>


      {/* Team Cards Section */}
      <div className="container  mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Image src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <p className="text-xl text-gray-600 mb-4">{member.role}</p>
                <p className="text-gray-700 mb-4">{member.description}</p>
                <div className="flex space-x-4 text-lg">
                  {/* Email Link with Lucide Mail Icon */}
                  <a
                    href={member.email}
                    className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={20} />
                  </a>

                  {/* LinkedIn Link with Lucide LinkedIn Icon */}
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section for "Join Our Team" */}
      <section className="bg-gray-100 mt-20 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Want to Join Our Team?</h2>
          <p className="text-lg text-gray-600 mb-6">
            We are always looking for talented individuals who share our passion for innovation and excellence. Explore our open positions and become part of our journey.
          </p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg bg-skyblue-300 cursor-pointer transition-all duration-300">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
