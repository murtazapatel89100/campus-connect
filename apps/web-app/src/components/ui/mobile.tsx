// components/MobileShowcase.tsx

import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Globe, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  views: number;
}

interface MobileShowcaseProps {
  articles: NewsArticle[];
  currentArticle: number;
}

const MobileShowcase: React.FC<MobileShowcaseProps> = ({
  articles,
  currentArticle,
}) => {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        {/* iPhone Frame */}
        <div className="relative w-80 h-[650px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>

            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 pt-12 pb-4 text-xs text-slate-900">
                <span className="font-medium">9:41</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-2 border border-slate-900 rounded-sm">
                    <div className="w-3 h-1 bg-slate-900 rounded-sm"></div>
                  </div>
                </div>
              </div>

              {/* App Header */}
              <div className="px-6 pb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Newspaper className="w-6 h-6 text-slate-700" />
                  <h2 className="text-lg font-bold text-slate-900">
                    Campus Herald
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-600 mb-2">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Live Events</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Blog Posts List */}
              <div className="px-4 space-y-3 h-full overflow-hidden">
                {articles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: currentArticle === index ? 1 : 0.6,
                      x: 0,
                      scale: currentArticle === index ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-2xl p-4 border transition-all duration-500 ${
                      currentArticle === index
                        ? "border-slate-300 shadow-lg"
                        : "border-slate-100 shadow-sm"
                    }`}
                  >
                    <div className="flex gap-3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge
                            variant="secondary"
                            className="text-xs bg-slate-100 text-slate-800"
                          >
                            {article.category}
                          </Badge>
                          {index === 0 && (
                            <span className="text-xs text-green-600 font-medium">
                              HAPPENING NOW
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-slate-900 text-sm leading-tight line-clamp-2 mb-1">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span>{article.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-60"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-4 -left-4 w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center shadow-lg"
        >
          <Newspaper className="w-6 h-6 text-slate-700" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-4 -right-4 w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center shadow-lg"
        >
          <Globe className="w-5 h-5 text-blue-700" />
        </motion.div>
      </div>
    </div>
  );
};

export default MobileShowcase;
