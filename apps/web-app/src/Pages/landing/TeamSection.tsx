'use client';

import Image from 'next/image';

const teamMembers = [
  {
    name: 'Chuttad-1',
    role: 'Backend Engineer',
    image: '', 
  },
  {
    name: 'Chuttad-2',
    role: 'UI/UX Designer',
    image: '',
  },
  {
    name: 'Chuttad-3',
    role: 'Frontend Developer',
    image: '',
  },
  {
    name: 'Chuttad-4',
    role: 'Product Manager',
    image: '',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#F4ECE8] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-['Stick_No_Bills'] font-bold mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-700 font-['Sorts_Mill_Goudy']">
          Passionate people powering Campus Connect
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="
              bg-black text-white 
              w-[90%] max-w-[256px] h-[338px] 
              rounded-xl overflow-hidden shadow-2xl 
              transform transition-transform hover:scale-105
            "
          >
            {/* Image */}
            <div className="relative w-full h-[200px]">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
            </div>

            {/* Text */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold font-['Stick_No_Bills']">{member.name}</h3>
              <p className="text-sm font-['Sorts_Mill_Goudy'] text-gray-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
