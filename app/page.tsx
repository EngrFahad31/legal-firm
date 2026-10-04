"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Civil Law",
    text: "Strategic legal representation in civil disputes, property matters, contracts and recovery proceedings.",
  },
  {
    number: "02",
    title: "Corporate Law",
    text: "Practical legal solutions for businesses, companies, transactions and corporate documentation.",
  },
  {
    number: "03",
    title: "Constitutional Law",
    text: "Representation and advisory services concerning constitutional and public law matters.",
  },
  {
    number: "04",
    title: "Arbitration & ADR",
    text: "Efficient dispute resolution through arbitration, mediation and alternative dispute mechanisms.",
  },
  {
    number: "05",
    title: "Property & Land Law",
    text: "Legal assistance in land, property, tenancy, title and related disputes.",
  },
  {
    number: "06",
    title: "Legal Advisory",
    text: "Clear, commercially focused legal advice tailored to individual and institutional clients.",
  },
];

const judgments = [
  [
    "2023 SCMR 1394",
    "Syed Amir Raza v. Mst. Rohi Mumtaz and others",
    "Supreme Court of Pakistan",
    "2023-scmr-1394",
  ],
  [
    "2013 SCMR 1310",
    "Khalid Pervaiz Gill v. Saifullah Gill and others",
    "Supreme Court of Pakistan",
    "2013-scmr-1310",
  ],
  [
    "2005 YLR 1037",
    "Muhammad Akram v. Additional Sessions Judge, Rawalpindi and 6 others",
    "Lahore High Court",
    "2005-ylr-1037",
  ],
  [
    "1999 PCr.LJ 1882",
    "Muhammad Arif Patwari v. The State",
    "Lahore",
    "1999-pcrlj-1882",
  ],
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#14202b]">

      {/* =========================================================
          TOP BAR
      ========================================================= */}
      <div className="bg-[#101a24] px-6 py-2 text-xs text-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <span>Trusted Legal Counsel & Representation</span>

          <span className="hidden sm:block">
            Rawalpindi • Pakistan
          </span>
        </div>
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <header className="relative border-b border-black/10 bg-[#f7f6f2]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo / Brand */}
          <a
            href="#"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#b89555] font-serif text-xl text-[#b89555]">
              SLA
            </div>

            <div>
              <div className="font-serif text-lg font-semibold tracking-wide sm:text-xl">
                SULAMAN LAW ASSOCIATES
              </div>

              <div className="text-[8px] uppercase tracking-[0.25em] text-black/50 sm:text-[9px] sm:tracking-[0.3em]">
                Advocates & Legal Consultants
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm lg:flex">
            <a
              href="#"
              className="transition hover:text-[#a98243]"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-[#a98243]"
            >
              About
            </a>

            <a
              href="#services"
              className="transition hover:text-[#a98243]"
            >
              Services
            </a>

            <a
              href="#team"
              className="transition hover:text-[#a98243]"
            >
              Our Team
            </a>

            <a
              href="#judgments"
              className="transition hover:text-[#a98243]"
            >
              Judgments
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#a98243]"
            >
              Contact
            </a>
          </div>

          {/* Desktop Consult Button */}
          <a
            href="#contact"
            className="hidden border border-[#14202b] px-5 py-3 text-xs font-semibold uppercase tracking-wider transition hover:bg-[#14202b] hover:text-white lg:block"
          >
            Consult Us
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center border border-[#14202b] text-xl lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}
        {mobileMenuOpen && (
          <div className="border-t border-black/10 bg-[#f7f6f2] px-6 py-5 shadow-lg lg:hidden">
            <div className="mx-auto max-w-7xl">

              <div className="flex flex-col">

                <a
                  href="#"
                  onClick={closeMobileMenu}
                  className="border-b border-black/10 py-4 text-sm font-medium transition hover:text-[#a98243]"
                >
                  Home
                </a>

                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="border-b border-black/10 py-4 text-sm font-medium transition hover:text-[#a98243]"
                >
                  About
                </a>

                <a
                  href="#services"
                  onClick={closeMobileMenu}
                  className="border-b border-black/10 py-4 text-sm font-medium transition hover:text-[#a98243]"
                >
                  Services
                </a>

                <a
                  href="#team"
                  onClick={closeMobileMenu}
                  className="border-b border-black/10 py-4 text-sm font-medium transition hover:text-[#a98243]"
                >
                  Our Team
                </a>

                <a
                  href="#judgments"
                  onClick={closeMobileMenu}
                  className="border-b border-black/10 py-4 text-sm font-medium transition hover:text-[#a98243]"
                >
                  Judgments
                </a>

                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="border-b border-black/10 py-4 text-sm font-medium transition hover:text-[#a98243]"
                >
                  Contact
                </a>

                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="mt-5 bg-[#14202b] px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#263746]"
                >
                  Consult Us
                </a>

              </div>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#14202b]">

        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#c9a66b_0,_transparent_55%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2 lg:py-32">

          {/* Hero Text */}
          <div>

            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c9a66b] sm:tracking-[0.3em]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              Legal Counsel & Representation
            </div>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Counsel.
              <br />
              <span className="text-[#c9a66b]">Advocate.</span>
              <br />
              Deliver.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/65">
              Sulaman Law Associates provides trusted legal representation,
              strategic advice and effective solutions for individuals,
              businesses and institutions.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">

              <a
                href="#contact"
                className="bg-[#c9a66b] px-7 py-4 text-center text-sm font-semibold text-[#14202b] transition hover:bg-[#dec58f]"
              >
                Schedule a Consultation
              </a>

              <a
                href="#services"
                className="border border-white/30 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-white"
              >
                Explore Our Services
              </a>

            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative ml-auto max-w-xl overflow-hidden border border-white/15">

              <div className="relative aspect-[4/5]">

                <Image
                  src="/hero.jpeg"
                  alt="Sulaman Law Associates"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[#0b1824]/20" />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">

                  <p className="font-serif text-2xl italic text-white">
                    “Justice is not merely a principle.
                    <br />
                    It is a responsibility.”
                  </p>

                  <div className="mt-4 h-px w-12 bg-[#c9a66b]" />

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

          {[
            ["25+", "Years of Experience"],
            ["2,000+", "Cases Handled"],
            ["150+", "Reported Judgments"],
            ["15+", "Practice Areas"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="border-r border-black/10 px-5 py-8 last:border-r-0 sm:px-6 sm:py-10"
            >

              <div className="font-serif text-3xl text-[#b18a4b] sm:text-4xl">
                {number}
              </div>

              <div className="mt-2 text-[10px] uppercase tracking-widest text-black/50 sm:text-xs">
                {label}
              </div>

            </div>

          ))}

        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-32"
      >

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b18a4b]">
              About the Firm
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Experience that
              <br />
              makes a difference.
            </h2>

          </div>

          <div className="text-[15px] leading-8 text-black/60">

            <p>
              Sulaman Law Associates is a full-service law firm committed to
              delivering thoughtful, commercially practical and
              results-oriented legal solutions.
            </p>

            <p className="mt-6">
              Our lawyers advise and represent clients across a broad range of
              legal matters, combining deep legal knowledge with a clear
              understanding of our clients&apos; objectives.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex border-b border-[#b18a4b] pb-2 text-sm font-semibold"
            >
              Learn More About Us →
            </a>

          </div>

        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        id="services"
        className="bg-[#14202b] px-6 py-20 text-white sm:py-24 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Our Expertise
              </p>

              <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
                Areas of Practice
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-white/50">
              Comprehensive legal services delivered with precision,
              discretion and a commitment to our clients.
            </p>

          </div>

          <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <a
                key={service.number}
                href={`/services/${service.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("&", "and")}`}
                className="group border-b border-r border-white/10 p-8 transition hover:bg-white/[0.04]"
              >

                <div className="text-xs text-[#c9a66b]">
                  {service.number}
                </div>

                <h3 className="mt-10 font-serif text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {service.text}
                </p>

                <div className="mt-8 text-sm text-[#c9a66b] opacity-100 transition lg:opacity-0 lg:group-hover:opacity-100">
                  Learn more →
                </div>

              </a>

            ))}

          </div>
        </div>
      </section>

{/* =========================================================
          TEAM
      ========================================================= */}
      <section
        id="team"
        className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-32"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b18a4b]">
              Our Team
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              Our Legal Team
            </h2>
          </div>

          <a
            href="#contact"
            className="text-sm font-semibold text-[#8c6935]"
          >
            Contact Our Firm →
          </a>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55">
          Experienced advocates dedicated to protecting your rights,
          providing strategic legal representation and delivering justice.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* 1. Sheikh Muhammad Sulaman */}
          <a
            href="/team/sheikh-muhammad-sulaman"
            className="group block overflow-hidden border border-[#14202b]/10 bg-[#14202b]"
          >
            <div className="flex justify-center overflow-hidden bg-[#14202b]">
              <img
                src="/sheikh-muhammad-sulaman.jpeg"
                alt="Sheikh Muhammad Sulaman"
                className="h-[420px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="border-t border-white/10 p-8 text-white">
              <h3 className="font-serif text-3xl">
                Sheikh Muhammad Sulaman
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a66b]">
                Advocate Supreme Court of Pakistan
              </p>

              <p className="mt-3 text-sm italic text-white/55">
                Former President High Court Bar Rawalpindi Bench (2015–16)
              </p>

              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
                  Areas of Expertise
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Supreme Court Litigation
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Civil & Constitutional Law
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Criminal Law
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Service Matters
                  </span>
                </div>
              </div>

              <div className="mt-8 text-sm font-semibold text-[#c9a66b]">
                View Full Profile →
              </div>
            </div>
          </a>


          {/* 2. Hifsa Sulaman Sheikh */}
          <a
            href="/team/hifsa-sulaman-sheikh"
            className="group block overflow-hidden border border-[#14202b]/10 bg-[#14202b]"
          >
            <div className="flex justify-center overflow-hidden bg-[#14202b]">
              <img
                src="/hifsa-sulaman-sheikh.jpeg"
                alt="Hifsa Sulaman Sheikh"
                className="h-[420px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="border-t border-white/10 p-8 text-white">
              <h3 className="font-serif text-3xl">
                Hifsa Sulaman Sheikh
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a66b]">
                Advocate High Court
              </p>

              <p className="mt-3 text-sm italic text-white/55">
                LLM International Law | Civil & Family Law Specialist
              </p>

              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
                  Areas of Expertise
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Family & Matrimonial Law
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Civil Litigation
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Property Disputes
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Women & Children Rights
                  </span>
                </div>
              </div>

              <div className="mt-8 text-sm font-semibold text-[#c9a66b]">
                View Full Profile →
              </div>
            </div>
          </a>


          {/* 3. Sehrish Javed */}
          <a
            href="/team/sehrish-javed"
            className="group block overflow-hidden border border-[#14202b]/10 bg-[#14202b]"
          >
            <div className="flex justify-center overflow-hidden bg-[#14202b]">
              <img
                src="/Sehrish Javed.jpeg"
                alt="Sehrish Javed"
                className="h-[420px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="border-t border-white/10 p-8 text-white">
              <h3 className="font-serif text-3xl">
                Sehrish Javed
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a66b]">
                Advocate High Court
              </p>

              <p className="mt-3 text-sm italic text-white/55">
                LLM International Law | Civil & Family Law Specialist
              </p>

              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
                  Areas of Expertise
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Family & Matrimonial Law
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Civil Litigation
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Property Disputes
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Women & Children Rights
                  </span>
                </div>
              </div>

              <div className="mt-8 text-sm font-semibold text-[#c9a66b]">
                View Full Profile →
              </div>
            </div>
          </a>


          {/* 4. Burooj Huma Hashmat */}
          <a
            href="/team/burooj-huma-hashmat"
            className="group block overflow-hidden border border-[#14202b]/10 bg-[#14202b]"
          >
            <div className="flex justify-center overflow-hidden bg-[#14202b]">
              <img
                src="/Burooj Huma Hashmat.jpeg"
                alt="Burooj Huma Hashmat"
                className="h-[420px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="border-t border-white/10 p-8 text-white">
              <h3 className="font-serif text-3xl">
                Burooj Huma Hashmat
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a66b]">
                Advocate High Court
              </p>

              <p className="mt-3 text-sm italic text-white/55">
                LLM International Law | Civil & Family Law Specialist
              </p>

              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
                  Areas of Expertise
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Family & Matrimonial Law
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Civil Litigation
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Property Disputes
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Women & Children Rights
                  </span>
                </div>
              </div>

              <div className="mt-8 text-sm font-semibold text-[#c9a66b]">
                View Full Profile →
              </div>
            </div>
          </a>


          {/* 5. Sheikh Muhammad Waleed Sulaman */}
          <a
            href="/team/sheikh-muhammad-waleed-sulaman"
            className="group block overflow-hidden border border-[#14202b]/10 bg-[#14202b]"
          >
            <div className="flex justify-center overflow-hidden bg-[#14202b]">
              <img
                src="/Sheikh Muhammad Waleed Sulaman.jpeg"
                alt="Sheikh Muhammad Waleed Sulaman"
                className="h-[420px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="border-t border-white/10 p-8 text-white">
              <h3 className="font-serif text-3xl">
                Sheikh Muhammad Waleed Sulaman
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a66b]">
                Advocate High Court
              </p>

              <p className="mt-3 text-sm italic text-white/55">
                LLM International Law | Civil & Family Law Specialist
              </p>

              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
                  Areas of Expertise
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Family & Matrimonial Law
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Civil Litigation
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Property Disputes
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Women & Children Rights
                  </span>
                </div>
              </div>

              <div className="mt-8 text-sm font-semibold text-[#c9a66b]">
                View Full Profile →
              </div>
            </div>
          </a>


          {/* 6. Sheikh Muhammad Haseeb Sulaman */}
          <a
            href="/team/sheikh-muhammad-haseeb-sulaman"
            className="group block overflow-hidden border border-[#14202b]/10 bg-[#14202b]"
          >
            <div className="flex justify-center overflow-hidden bg-[#14202b]">
              <img
                src="/Sheikh Muhammad Haseeb Sulaman.jpeg"
                alt="Sheikh Muhammad Haseeb Sulaman"
                className="h-[420px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="border-t border-white/10 p-8 text-white">
              <h3 className="font-serif text-3xl">
                Sheikh Muhammad Haseeb Sulaman
              </h3>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a66b]">
                Advocate High Court
              </p>

              <p className="mt-3 text-sm italic text-white/55">
                LLM International Law | Civil & Family Law Specialist
              </p>

              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
                  Areas of Expertise
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Family & Matrimonial Law
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Civil Litigation
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Property Disputes
                  </span>

                  <span className="border border-white/15 px-3 py-2 text-xs text-white/65">
                    Women & Children Rights
                  </span>
                </div>
              </div>

              <div className="mt-8 text-sm font-semibold text-[#c9a66b]">
                View Full Profile →
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* =========================================================
          JUDGMENTS
      ========================================================= */}
      <section
        id="judgments"
        className="border-y border-black/10 bg-white px-6 py-20 sm:py-24 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b18a4b]">
                Our Work
              </p>

              <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
                Selected
                <br />
                Judgments
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-black/50">
                A selection of significant matters and reported judgments
                handled by our legal professionals.
              </p>

            </div>

            <div>

              {judgments.map(([citation, title, court, slug]) => (

                <div
                  key={title}
                  className="grid grid-cols-1 gap-3 border-t border-black/10 py-6 sm:grid-cols-[100px_1fr] sm:gap-5"
                >

                  <span className="text-xs text-[#b18a4b]">
                    {citation}
                  </span>

                  <div>

                    <h3 className="font-serif text-xl">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
                      {court}
                    </p>

                    <a
                      href={`/judgments/${slug}`}
                      className="mt-4 inline-block border-b border-[#b18a4b] pb-1 text-sm font-semibold text-[#14202b] transition hover:text-[#8c6935]"
                    >
                      Read Judgment →
                    </a>

                  </div>

                </div>

              ))}

              <a
                href="/judgments"
                className="mt-5 inline-block border-b border-[#b18a4b] pb-2 text-sm font-semibold"
              >
                View All Judgments →
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="bg-[#c9a66b] px-6 py-20 sm:py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2">

            {/* Contact Information */}
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#14202b]/60">
                Get in Touch
              </p>

              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight text-[#14202b] sm:text-5xl">
                Let&apos;s discuss your legal matter.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#14202b]/65">
                Whether you require legal representation, strategic advice or
                assistance with a complex dispute, our team is ready to help.
              </p>

              <div className="mt-10 space-y-8">

                {/* Sheikh Muhammad Sulaman */}
                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-[#14202b]/50">
                    Sheikh Muhammad Sulaman
                  </p>

                  <a
                    href="tel:+923215175624"
                    className="mt-2 block text-lg text-[#14202b] hover:underline"
                  >
                    0321-5175624
                  </a>

                  <div className="mt-4 flex flex-wrap gap-3">

                    <a
                      href="tel:+923215175624"
                      className="inline-flex items-center gap-2 bg-[#14202b] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#263746]"
                    >
                      📞 Call
                    </a>

                    <a
                      href="https://wa.me/923215175624"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#14202b] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#14202b] transition hover:bg-[#14202b] hover:text-white"
                    >
                      💬 WhatsApp
                    </a>

                  </div>
                </div>

                {/* Hifsa Sulaman Sheikh */}
                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-[#14202b]/50">
                    Hifsa Sulaman Sheikh
                  </p>

                  <a
                    href="tel:+923358022035"
                    className="mt-2 block text-lg text-[#14202b] hover:underline"
                  >
                    0335-8022035
                  </a>

                  <div className="mt-4 flex flex-wrap gap-3">

                    <a
                      href="tel:+923358022035"
                      className="inline-flex items-center gap-2 bg-[#14202b] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#263746]"
                    >
                      📞 Call
                    </a>

                    <a
                      href="https://wa.me/923358022035"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-[#14202b] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#14202b] transition hover:bg-[#14202b] hover:text-white"
                    >
                      💬 WhatsApp
                    </a>

                  </div>
                </div>

                {/* Email */}
                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-[#14202b]/50">
                    Email
                  </p>

                  <a
                    href="mailto:hifsa.sheikh55@gmail.com"
                    className="mt-2 block break-all text-lg text-[#14202b] hover:underline"
                  >
                    hifsa.sheikh55@gmail.com
                  </a>

                  <a
                    href="mailto:hifsa.sheikh55@gmail.com"
                    className="mt-4 inline-flex items-center gap-2 border border-[#14202b] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#14202b] transition hover:bg-[#14202b] hover:text-white"
                  >
                    ✉️ Send Email
                  </a>

                </div>

                {/* Office */}
                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-[#14202b]/50">
                    Office
                  </p>

                  <p className="mt-2 max-w-sm text-lg leading-7 text-[#14202b]">
                    Office No. 2, 1st Floor, Kashmir Gate Plaza
                    <br />
                    Opp. BBH Hospital, Murree Road
                    <br />
                    Rawalpindi, Pakistan
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Kashmir+Gate+Plaza+Opp+BBH+Hospital+Murree+Road+Rawalpindi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 border border-[#14202b] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#14202b] transition hover:bg-[#14202b] hover:text-white"
                  >
                    📍 Open in Google Maps
                  </a>

                </div>

                {/* Chambers */}
                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-[#14202b]/50">
                    Chambers
                  </p>

                  <p className="mt-2 max-w-sm text-lg leading-7 text-[#14202b]">
                    Near Post Office, District Courts Rawalpindi
                    <br />
                    G-11 District Courts, Islamabad
                  </p>

                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#14202b] p-8 text-white sm:p-10">

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Send an Inquiry
              </p>

              <h3 className="mt-4 font-serif text-3xl">
                Tell us how we can help.
              </h3>

              <form className="mt-8 space-y-5">

                <div>

                  <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-white/15 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c9a66b]"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-white/15 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c9a66b]"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+92"
                    className="w-full border border-white/15 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c9a66b]"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-xs uppercase tracking-widest text-white/50">
                    Your Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Briefly describe your legal matter..."
                    className="w-full resize-none border border-white/15 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#c9a66b]"
                  />

                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c9a66b] px-6 py-4 text-sm font-semibold text-[#14202b] transition hover:bg-white"
                >
                  Send Inquiry →
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#101a24] px-6 py-14 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">

          <div>

            <div className="font-serif text-2xl">
              SULAMAN LAW ASSOCIATES
            </div>

            <p className="mt-4 max-w-xs text-sm leading-7 text-white/45">
              Advocates & Legal Consultants providing trusted legal
              representation and strategic counsel.
            </p>

          </div>

          <div>

            <div className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b]">
              Contact
            </div>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Office No. 2, 1st Floor, Kashmir Gate Plaza
              <br />
              Opp. BBH Hospital, Murree Road
              <br />
              Rawalpindi, Pakistan
            </p>

            <div className="mt-4 space-y-2">

              <a
                href="tel:+923215175624"
                className="block text-sm text-white/65 transition hover:text-[#c9a66b]"
              >
                📞 0321-5175624
              </a>

              <a
                href="tel:+923358022035"
                className="block text-sm text-white/65 transition hover:text-[#c9a66b]"
              >
                📞 0335-8022035
              </a>

            </div>
          </div>

          <div>

            <div className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b]">
              Email
            </div>

            <a
              href="mailto:hifsa.sheikh55@gmail.com"
              className="mt-4 block break-all text-sm text-white/55 transition hover:text-[#c9a66b]"
            >
              hifsa.sheikh55@gmail.com
            </a>

            <a
              href="https://wa.me/923215175624"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex border border-[#c9a66b]/50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#c9a66b] transition hover:bg-[#c9a66b] hover:text-[#101a24]"
            >
              💬 WhatsApp Us
            </a>

          </div>

        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/30">
          © 2026 SULAMAN LAW ASSOCIATES. All Rights Reserved.
        </div>

      </footer>

    </main>
  );
}  