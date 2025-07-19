'use client';

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is Campus Connect?",
    answer:
      "Campus Connect is a platform designed to simplify and enhance your campus life — discover events, join clubs, and stay connected with your university community.",
  },
  {
    question: "Is Campus Connect free to use?",
    answer:
      "Yes! Campus Connect is completely free for students to explore, connect, and collaborate on campus.",
  },
  {
    question: "Can I create my own club or group?",
    answer:
      "Absolutely. You can create clubs, manage members, post events, and foster your own community within the platform.",
  },
  {
    question: "Is Campus Connect secure?",
    answer:
      "Yes. We use encrypted tokens, protected routes, and industry best practices to keep your data secure and private.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F4ECE8] py-16 px-4 sm:px-8 lg:px-16 text-black">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-['Stick_No_Bills'] font-bold tracking-wide">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4 text-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold font-['Stick_No_Bills'] tracking-wide"
              >
                <span>{item.question}</span>
                <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-base font-['Sorts_Mill_Goudy'] text-gray-800">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
