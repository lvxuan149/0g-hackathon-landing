"use client";

import Link from "next/link";

interface NavigationProps {
  isSubPage?: boolean;
}

export default function Navigation({ isSubPage = false }: NavigationProps) {
  const baseLinks = isSubPage
    ? [
        { href: "/#tracks", label: "赛道" },
        { href: "/#highlights", label: "亮点" },
        { href: "/#info", label: "活动信息" },
      ]
    : [
        { href: "#tracks", label: "赛道" },
        { href: "#highlights", label: "亮点" },
        { href: "#info", label: "活动信息" },
      ];

  const pageLinks = [
    { href: "/gallery", label: "照片墙" },
    { href: "/projects", label: "项目展示" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <img src="/0G-Logo.svg" alt="0G Logo" className="h-8" />
          <span className="font-semibold text-lg">AI Vibe Coding Session</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {baseLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-[#FFD500] transition-colors"
            >
              {link.label}
            </a>
          ))}
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-[#FFD500] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
