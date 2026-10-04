import Link from "next/link";

const judgments = [
  {
    citation: "2023 SCMR 1394",
    title: "Syed Amir Raza v. Mst. Rohi Mumtaz and others",
    court: "Supreme Court of Pakistan",
    area: "Family Law",
    date: "5 May 2023",
    slug: "2023-scmr-1394",
  },
  {
    citation: "2019 YLR 2569",
    title: "Farrukh Nisar v. Israr Ahmed",
    court: "Islamabad",
    area: "Civil Law",
    date: "12 September 2017",
    slug: "2019-ylr-2569",
  },
  {
    citation: "2016 PCr.LJ 98",
    title: "Ijaz Baig v. The State",
    court: "Islamabad",
    area: "Criminal Law",
    date: "3 August 2015",
    slug: "2016-pcrlj-98",
  },
  {
    citation: "PLD 2015 SC 145",
    title: "Muhammad Raheel alias Shafique v. The State",
    court: "Supreme Court of Pakistan",
    area: "Criminal Law",
    date: "2015",
    slug: "pld-2015-sc-145",
  },
  {
    citation: "2013 SCMR 1310",
    title: "Khalid Pervaiz Gill v. Saifullah Gill and others",
    court: "Supreme Court of Pakistan",
    area: "Constitutional / Election Law",
    date: "2013",
    slug: "2013-scmr-1310",
  },
  {
    citation: "2012 YLR 1529",
    title:
      "Messrs Shandar Petroleum/CNG and 46 others v. Federation of Pakistan through Ministry of Petroleum and 2 others",
    court: "Islamabad",
    area: "Constitutional / CNG Law",
    date: "23 December 2011",
    slug: "2012-ylr-1529",
  },
  {
    citation: "2005 YLR 1037",
    title:
      "Muhammad Akram v. Additional Sessions Judge, Rawalpindi and 6 others",
    court: "Lahore High Court",
    area: "Criminal Law",
    date: "1 July 2004",
    slug: "2005-ylr-1037",
  },
  {
    citation: "1999 PCr.LJ 1882",
    title: "Muhammad Arif Patwari v. The State",
    court: "Lahore High Court",
    area: "Criminal / Bail",
    date: "11 November 1998",
    slug: "1999-pcrlj-1882",
  },
  {
    citation: "1998 MLD 1291",
    title: "Qazi Faiz-ur-Rehman v. Ghulam Ahmed",
    court: "Lahore",
    area: "Civil / Recovery",
    date: "25 November 1997",
    slug: "1998-mld-1291",
  },
  {
    citation: "PLD 2014 SC 389",
    title: "National Police Foundation Housing Scheme Matter",
    court: "Supreme Court of Pakistan",
    area: "Constitutional / Housing",
    date: "2014",
    slug: "pld-2014-sc-389",
  },
];

export default function JudgmentsPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#14202b]">

      {/* HEADER */}
      <header className="border-b border-black/10 bg-[#f7f6f2]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-[#b89555] font-serif text-xl text-[#b89555]">
              SLA
            </div>

            <div>
              <div className="font-serif text-xl font-semibold tracking-wide">
                SULAMAN LAW ASSOCIATES
              </div>

              <div className="text-[9px] uppercase tracking-[0.3em] text-black/50">
                Advocates & Legal Consultants
              </div>
            </div>
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold transition hover:text-[#a98243]"
          >
            ← Back to Home
          </Link>

        </nav>
      </header>


      {/* HERO */}
      <section className="bg-[#14202b] px-6 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#c9a66b]">
            <span className="h-px w-10 bg-[#c9a66b]" />
            Legal Research
          </div>

          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Judgments & Case Law
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
            Selected reported judgments and legal matters available through
            Sulaman Law Associates.
          </p>

        </div>
      </section>


      {/* JUDGMENTS LIST */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        <div className="mb-12">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b18a4b]">
            Reported Cases
          </p>

          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
            Selected Judgments
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-black/50">
            Reported judgments covering civil, criminal, constitutional,
            family and other areas of Pakistani law.
          </p>

        </div>


        <div className="border-t border-black/10">

          {judgments.map((judgment) => (

            <article
              key={judgment.citation}
              className="grid gap-7 border-b border-black/10 py-9 md:grid-cols-[190px_1fr_auto] md:items-center"
            >

              {/* CITATION */}
              <div>

                <p className="text-sm font-semibold text-[#b18a4b]">
                  {judgment.citation}
                </p>

                <p className="mt-2 text-xs text-black/40">
                  {judgment.date}
                </p>

              </div>


              {/* CASE INFORMATION */}
              <div>

                <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                  {judgment.title}
                </h3>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">

                  <p className="text-xs uppercase tracking-[0.16em] text-black/45">
                    {judgment.court}
                  </p>

                  <span className="text-black/20">
                    •
                  </span>

                  <p className="text-xs uppercase tracking-[0.12em] text-[#b18a4b]">
                    {judgment.area}
                  </p>

                </div>

              </div>


              {/* BUTTON */}
              <div>

               <Link
  href={`/judgments/${judgment.slug}`}
  className="inline-block border-b border-[#b18a4b] pb-2 text-sm font-semibold text-[#14202b] transition hover:text-[#8c6935]"
>
  Read Judgment →
</Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* LEGAL RESEARCH SECTION */}
      <section className="border-t border-black/10 bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b18a4b]">
              Legal Research
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              Reported Legal Matters
            </h2>

            <p className="mt-6 text-sm leading-8 text-black/55">
              This section presents selected reported judgments contained in
              the firm&apos;s legal research records. The collection covers
              matters involving civil, criminal, constitutional, family,
              election and other areas of law.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT CTA */}
      <section className="bg-[#c9a66b] px-6 py-20">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#14202b]/60">
              Need Legal Assistance?
            </p>

            <h2 className="mt-4 max-w-3xl font-serif text-4xl text-[#14202b] sm:text-5xl">
              Discuss your legal matter with our team.
            </h2>

          </div>

          <Link
            href="/#contact"
            className="inline-flex shrink-0 bg-[#14202b] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#253747]"
          >
            Contact Our Firm
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="bg-[#101a24] px-6 py-12 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row">

          <div className="font-serif text-xl">
            SULAMAN LAW ASSOCIATES
          </div>

          <div className="text-sm text-white/40">
            © 2026 Sulaman Law Associates. All Rights Reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}