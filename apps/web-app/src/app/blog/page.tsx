"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import MobileShowcase from "@/components/ui/mobile";
import Link from "next/link";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [currentArticle, setCurrentArticle] = useState(0);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/get-posts`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log("Full API response:", data);

        // Fix: Remove the extra "data" level since your API response doesn't have it
        const postsArray =
          data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
        console.log("Extracted posts:", postsArray);
        setPosts(postsArray);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const articles = [
    {
      id: 1,
      title: "Tech Fest 2025 Breaks Attendance Records",
      excerpt:
        "Annual technology festival attracts over 5,000 students with cutting-edge workshops and startup showcases.",
      author: "Alex Rodriguez",
      date: "Dec 15, 2024",
      readTime: "4 min",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      category: "Technology",
      views: 2500,
    },
    {
      id: 2,
      title: "Drama Club's Winter Play Sold Out",
      excerpt:
        "'Romeo and Juliet' production receives standing ovations as drama department showcases exceptional talent.",
      author: "Emma Thompson",
      date: "Dec 14, 2024",
      readTime: "3 min",
      image:
        "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=400&h=300&fit=crop",
      category: "Cultural",
      views: 1800,
    },
    {
      id: 3,
      title: "AI Research Lab Wins National Competition",
      excerpt:
        "Computer Science students develop groundbreaking machine learning model for sustainable energy optimization.",
      author: "Dr. Kevin Chen",
      date: "Dec 13, 2024",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      category: "Research",
      views: 3200,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  console.log(posts);

  if (loading) return <p>Loading...</p>;

  return (
    <main className="w-full min-h-screen bg-[#9EBCB8] text-black font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-[#B4DAD4] shadow-[0_15px_64px_rgba(0,0,0,0.25)] rounded-none md:rounded-[32px] p-6 md:p-10 mt-4">
        {/* Header */}
        <header className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">CampusConnect</h1>

          <div className="relative text-black mr-32 hidden w-full max-w-md md:flex">
            <Search className="absolute top-1/2 left-2 h-5 w-5 text-black -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full border-1 rounded-full bg-white py-2 pr-2 pl-10 focus:border-2 border-black focus:ring-0 focus:outline-none"
            />
          </div>
        </header>

        {/* Hero Content */}
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-[2.5rem] lg:text-[3.5rem] font-serif font-bold leading-tight">
              Stay Updated with What's Happening on campus!
            </h2>
            <p className="mt-4 text-lg text-gray-800 max-w-xl">
              From groundbreaking research and thrilling sports events to
              cultural festivals and student-led initiatives — CampusConnect
              brings all the latest stories straight to you. Whether you want to
              join a club, attend a workshop, or simply stay in the loop, we've
              got your campus covered.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <MobileShowcase
              articles={articles}
              currentArticle={currentArticle}
            />
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen bg-[#668890] p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
          {posts.map((post, index) => {
            return (
              <Link
                key={index}
                href={post.url}
                className={`group relative rounded-xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform ${post.span} flex flex-col h-96`}
              >
                {/* Thumbnail */}
                <div
                  className={cn(
                    "relative w-full",
                    post.span?.includes("row-span-2")
                      ? "h-64 sm:h-80 lg:h-96"
                      : "h-48 sm:h-56 lg:h-64"
                  )}
                >
                  <Image
                    src={post.coverImage?.url}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Author and Date */}
                  <div className="mt-auto pt-3 text-xs sm:text-sm text-gray-500 flex justify-between items-center border-t border-gray-100">
                    <span className="font-medium">{post.author.name}</span>
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
