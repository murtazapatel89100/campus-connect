"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Member 1",
    role: "Backend Engineer",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Member 2",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Member 5",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Member 4",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#F4ECE8] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-gothic-expanded md:text-6xl font-bold mb-4">
          Meet Our Team
        </h2>
        <p className="text-xl text-black font-family-goudy">
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
              font-gothic-expanded
              transform transition-transform hover:scale-105 hover:shadow-shell-900
            "
          >
            {/* Image */}
            <div className="relative w-full h-[200px]">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                className="opacity-80 object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
