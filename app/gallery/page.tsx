
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const photos = [
  {
    src: "/gallery/community.jpg",
    title: "Community Engagement",
    description: "Interaction with students and community members.",
    category: "Community",
  },
  {
    src: "/gallery/education.jpg",
    title: "Educational Visit",
    description: "Engagement with students and the younger generation.",
    category: "Community",
  },
  {
    src: "/gallery/professional.jpg",
    title: "Professional Interaction",
    description: "Engagement with members of the legal fraternity.",
    category: "Professional",
  },
  {
    src: "/gallery/bar-event.jpg",
    title: "Bar Association Event",
    description: "A memorable occasion with fellow legal professionals.",
    category: "Legal Events",
  },
  {
    src: "/gallery/speech.jpg",
    title: "Addressing the Legal Community",
    description: "Participation in a bar association event.",
    category: "Legal Events",
  },
  {
    src: "/gallery/meeting.jpg",
    title: "Professional Meeting",
    description: "Professional interaction and legal community engagement.",
    category: "Professional",
  },
  
  {
    src: "/gallery/legal-team.jpg",
    title: "SLA Legal Team",
    description: "A group photograph of the legal team and colleagues.",
    category: "Team",
  },
  {
    src: "/gallery/legal-team-group.jpg",
    title: "Legal Team Gathering",
    description: "Members of the legal fraternity gathered together.",
    category: "Team",
  },
  {
    src: "/gallery/court-visit.jpg",
    title: "Court Visit",
    description: "A group photograph outside a court building.",
    category: "Legal Events",
  },

];

const categories = [
  "All",
  "Professional",
  "Legal Events",
  "Community",
  "Team",
  "Office",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<
    (typeof photos)[number] | null
  >(null);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#14202b]">
      
{/* Header */}
<header className="border-b border-black/10 bg-[#f7f6f2]">
  <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#b89555] font-serif text-xl text-[#b89555]">
        SLA
      </div>

      <div>
        <div className="font-serif text-base font-semibold sm:text-xl">
          SULAMAN LAW ASSOCIATES
        </div>
        <div className="text-[9px] uppercase tracking-[0.2em] text-black/50">
          Advocates & Legal Consultants
        </div>
      </div>
    </Link>

    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
      <Link href="/" className="transition hover:text-[#a98243]">
        Home
      </Link>

      <Link href="/#about" className="transition hover:text-[#a98243]">
        About
      </Link>

      <Link href="/#services" className="transition hover:text-[#a98243]">
        Services
      </Link>

      <Link
        href="/gallery"
        className="border-b border-[#b89555] pb-1 font-semibold text-[#a98243]"
      >
        Gallery
      </Link>

      <Link href="/#team" className="transition hover:text-[#a98243]">
        Our Team
      </Link>

      <Link href="/#judgments" className="transition hover:text-[#a98243]">
        Judgments
      </Link>

      <Link href="/#contact" className="transition hover:text-[#a98243]">
        Contact
      </Link>
    </div>
  </nav>
</header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#101a24] px-6 py-16 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_#72532d_0,_transparent_45%)] opacity-50" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c9a66b]">
            Sulaman Law Associates
          </p>

          <h1 className="mt-5 font-serif text-5xl sm:text-7xl">
            Our Gallery
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-lg">
            A glimpse into our professional journey, legal practice and
            community engagement.
          </p>

          <div className="mt-7 h-px w-16 bg-[#c9a66b]" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14">
        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`border px-4 py-3 text-sm transition sm:px-5 ${
                activeCategory === category
                  ? "border-[#b89555] bg-[#b89555] text-white"
                  : "border-black/20 bg-white hover:border-[#b89555]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Photo Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo) => (
            <article
              key={photo.src}
              className="group overflow-hidden border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Clickable Image */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-[#14202b] text-left"
                aria-label={`View ${photo.title} in large view`}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute bottom-3 right-3 bg-[#101a24]/85 px-3 py-2 text-xs text-white">
                  View Photo +
                </span>
              </button>

              {/* Photo Details */}
              <div className="p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a98243]">
                  {photo.category}
                </p>

                <h2 className="mt-3 font-serif text-xl">
                  {photo.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-black/60">
                  {photo.description}
                </p>

                <div className="mt-4 h-px w-12 bg-[#b89555]" />
              </div>
            </article>
          ))}
        </div>

        {/* Empty Categories */}
        {filteredPhotos.length === 0 && (
          <p className="py-16 text-center text-sm text-black/50">
            Photographs for this category will be added soon.
          </p>
        )}
      </section>

      {/* Large Photo View / Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/40 text-3xl text-white transition hover:bg-white/10"
            aria-label="Close photo"
          >
            ×
          </button>

          {/* Large Image */}
          <div
            className="relative h-[75vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              fill
              sizes="100vw"
              className="object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/75 px-4 py-4 text-white">
              <h3 className="font-serif text-xl">
                {selectedPhoto.title}
              </h3>

              <p className="mt-1 text-sm text-white/70">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#101a24] px-6 py-8 text-center text-xs text-white/50">
        © 2026 Sulaman Law Associates. All Rights Reserved.
      </footer>
    </main>
  );
}
