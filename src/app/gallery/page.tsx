"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import galleryData from "@/data/gallery.json";

export default function GalleryPage() {
  const { photos } = galleryData;
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);


  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation isSubPage />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFD500] transition-colors mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            返回首页
          </Link>

          {/* Page Header */}
          <div className="text-center mb-16">
            <span className="tag mb-4">
              <span className="w-2 h-2 rounded-full bg-[#9B7FD8]"></span>
              照片墙
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              精彩<span className="gradient-text-purple">瞬间</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              回顾 0G AI Vibe Coding Session 深圳站的精彩时刻
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`gallery-item ${
                  index % 5 === 0 ? "gallery-item-large" : ""
                }`}
                onClick={() => setSelectedPhoto(photo.src)}
              >
                <div className="gallery-image-wrapper">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="gallery-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `
                        <div class="gallery-placeholder">
                          <svg class="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span class="text-gray-500 text-sm mt-2">${photo.alt}</span>
                        </div>
                      `;
                    }}
                  />
                  <div className="gallery-overlay">
                    <p className="gallery-alt">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder message if no photos */}
          {photos.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">暂无照片</h3>
              <p className="text-gray-500">活动结束后将上传精彩照片</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#FFD500] transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <img
            src={selectedPhoto}
            alt="Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <img src="/0G-Logo.svg" alt="0G Logo" className="h-8" />
              <div>
                <div className="font-semibold">0G Labs</div>
                <div className="text-sm text-gray-500">
                  AI Vibe Coding Session | 深圳站
                </div>
              </div>
            </Link>
            <div className="text-gray-600 text-sm">
              © 2026 0G Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
