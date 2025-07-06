"use client";
import React, { useState, useMemo } from 'react';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  cover_url?: string;
  author: string;
  published_at: string;
  category: string;
}

interface BlogSearchProps {
  posts: Post[];
}

export default function BlogSearch({ posts }: BlogSearchProps) {
  const [search, setSearch] = useState('');
  const [showAutocomplete, setShowAutocomplete] = useState(false);

  // Busca funcional
  const filteredPosts = useMemo(() => {
    if (!search) return posts;
    return posts.filter(post =>
      (post.title || '').toLowerCase().includes(search.toLowerCase()) ||
      (post.excerpt || '').toLowerCase().includes(search.toLowerCase())
    );
  }, [search, posts]);

  // Autocomplete: sugestões de títulos únicos
  const suggestions = useMemo(() => {
    if (!search) return [];
    const lower = search.toLowerCase();
    return posts
      .filter(post =>
        (post.title || '').toLowerCase().includes(lower) ||
        (post.excerpt || '').toLowerCase().includes(lower)
      )
      .map(post => post.title)
      .filter((title, idx, arr) => arr.indexOf(title) === idx)
      .slice(0, 5);
  }, [search, posts]);

  return (
    <div className="relative">
      <input
        type="text"
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setShowAutocomplete(true);
        }}
        onFocus={() => setShowAutocomplete(true)}
        onBlur={() => setTimeout(() => setShowAutocomplete(false), 150)}
        placeholder="Buscar no blog..."
        className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
        autoComplete="off"
      />
      {showAutocomplete && suggestions.length > 0 && (
        <ul className="absolute z-10 left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg max-h-48 overflow-y-auto">
          {suggestions.map((title, idx) => (
            <li
              key={idx}
              className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-white"
              onMouseDown={() => {
                setSearch(title);
                setShowAutocomplete(false);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}