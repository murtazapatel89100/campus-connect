'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const blogPosts = [
  {
    title: 'Title of the Blog Post',
    excerpt: 'Explore how to bounce back from setbacks and grow stronger...',
    image: '/images/blog/blog1.jpg',
    author: 'Andrea Wise',
    date: 'July 28, 2025',
    link: '/blog/resilience',
    span: 'col-span-1',
  },
  {
    title: 'Title of the Blog Post',
    excerpt: 'Unlock your potential with proven strategies...',
    image: '/images/blog/blog2.jpg',
    author: 'Karen Smith',
    date: 'July 20, 2025',
    link: '/blog/growth',
    span: 'col-span-1',
  },
  {
    title: 'Title of the Blog Post',
    excerpt: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/images/blog/food.avif',
    author: 'Samantha William',
    date: 'July 22, 2025',
    link: '/blog/engagement',
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'Title of the Blog Post',
    excerpt: 'Set a bold vision for your future and act on it today.',
    image: '/images/blog/blog3.avif',
    author: 'Renata Hope',
    date: 'July 18, 2025',
    link: '/blog/vision',
    span: 'col-span-2',
  },
  {
    title: 'Title of the Blog Post',
    excerpt: 'Focus, discipline, and staying aligned with your values.',
    image: '/images/blog/juice.png',
    author: 'Angela Smith',
    date: 'July 24, 2025',
    link: '/blog/goal',
    span: 'col-span-1',
  },
  {
    title: 'Title of the Blog Post',
    excerpt: 'Build unshakable confidence with small daily wins.',
    image: '/images/blog/bloghero.jpg',
    author: 'Jason Park',
    date: 'July 16, 2025',
    link: '/blog/self-belief',
    span: 'col-span-1',
  },
  {
    title: 'Title of the Blog Post',
    excerpt: 'Get inspired by impactful campus projects and stories.',
    image: '/images/blog/blog7.png',
    author: 'Tina Patel',
    date: 'July 25, 2025',
    link: '/blog/projects',
    span: 'col-span-2',
  },
];

const GridPattern: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#668890] p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-2xl mx-auto auto-rows-fr min-h-screen">
        {blogPosts.map((post, index) => {
          // Conditional height based on row-span
          const imageHeight = post.span.includes('row-span-2')
            ? 'h-72 sm:h-96 md:h-[28rem]'
            : 'h-48 sm:h-56 md:h-64';

          return (
            <Link
              href={post.link}
              key={index}
              className={`group relative rounded-xl overflow-hidden bg-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl transform ${post.span} flex flex-col`}
            >
              {/* Thumbnail */}
              <div className={`relative w-full ${imageHeight}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 flex-grow">{post.excerpt}</p>
                <div className="mt-4 text-xs text-gray-500 flex justify-between items-center">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GridPattern;
