"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

export default function FaqSection() {
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

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure
            key={index}
            as="div"
            className="bg-white/90 rounded-lg p-4 shadow"
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full h-11 font-gothic-expanded justify-between items-center text-left">
                  <span className="text-balance tracking-wide text-black">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transition-transform duration-500 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </Disclosure.Button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden mt-2 text-sm text-gray-700"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
