// components/Hero.js
// Landing page hero with announcement pill, gradient headline, and search integration

"use client";

import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import SearchBar from "@/components/SearchBar";

export default function Hero() {
  const router = useRouter();
  console.log("Hero component rendered");
  const { setSearchQuery } = useApp();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push("/startups");
  };

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    router.push("/startups");
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 glow-bg opacity-75" />

      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300 backdrop-blur-sm mb-6">
        <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping"></span>
        Now Live: YC W24 & Seed Accelerator Cohorts
      </div>

      {/* Main Headline */}
      <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-tight">
        Where{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
          Visionary Founders
        </span>{" "}
        Meet Global Capital
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
        StartupHub is the community directory to discover breakout tech startups, track early funding rounds, and connect directly with angel syndicates.
      </p>

      {/* Search Input Container */}
      <form onSubmit={handleSearchSubmit} className="mx-auto mt-8 max-w-xl">
        <div className="flex gap-2">
          <SearchBar placeholder="Search by name, AI, Climate, Fintech..." />
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition"
          >
            Explore
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
          <span>Trending:</span>
          {["AI", "DevTools", "ClimateTech", "Fintech"].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleTagClick(tag)}
              className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-0.5 text-slate-300 hover:border-slate-700 hover:text-white transition"
            >
              #{tag}
            </button>
          ))}
        </div>
      </form>
    </section>
  );
}