import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles, Tag } from 'lucide-react';
import { TranslationDict } from '../data/translations/en';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  t: TranslationDict;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ t }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Numerology', 'Tarot', 'Life Coaching', 'Spiritual Growth'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  return (
    <section id="journal" className="py-20 bg-[#F8FCFE] relative border-t border-[#BAE4F0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#0091B9] uppercase mb-2">
            <BookOpen className="w-3.5 h-3.5 text-[#0091B9]" />
            <span>{t.nav.blog}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#004E9B] tracking-tight mb-4">
            {t.journal.heading}
          </h2>
          <p className="text-base text-[#5D6B78] leading-relaxed">
            {t.journal.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#004E9B] text-white shadow-xs'
                  : 'bg-white border border-[#BAE4F0] text-[#172033] hover:border-[#0091B9] hover:text-[#0091B9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#BAE4F0] hover:border-[#0091B9] transition-all hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 text-xs text-[#5D6B78]">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#BAE4F0]/40 text-[#004E9B] font-semibold text-[11px]">
                    <Tag className="w-3 h-3 text-[#0091B9]" />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#004E9B] mb-3 group-hover:text-[#0091B9] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5D6B78] leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-[#5D6B78] font-medium">
                  {post.author}
                </span>

                <button
                  onClick={() => setActivePost(post)}
                  className="text-xs sm:text-sm font-semibold text-[#FF6500] hover:text-[#e05900] flex items-center gap-1.5 transition-colors"
                >
                  <span>{t.journal.readMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Read Article Modal */}
        {activePost && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#BAE4F0] shadow-2xl relative animate-scale-in">
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-[#5D6B78] hover:text-[#172033]"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#BAE4F0]/40 text-[#004E9B] font-semibold text-xs mb-2">
                  {activePost.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#004E9B] leading-tight mb-2">
                  {activePost.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-[#5D6B78]">
                  <span>By {activePost.author}</span>
                  <span>•</span>
                  <span>{activePost.date}</span>
                  <span>•</span>
                  <span>{activePost.readTime}</span>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#172033] leading-relaxed my-6 border-t border-b border-gray-100 py-6">
                {activePost.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-xs text-[#5D6B78] italic">
                  Dipti Awasthi Guidance Journal
                </div>
                <button
                  onClick={() => setActivePost(null)}
                  className="px-5 py-2 rounded-xl bg-[#004E9B] hover:bg-[#003c77] text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  {t.journal.closeArticle}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
