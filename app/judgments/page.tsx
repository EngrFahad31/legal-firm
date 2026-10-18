import Link from "next/link";

const judgments = [
  {
    citation: "PLD 2026 SC 91",
    title: "Dr. Seema Hanif Khan v. Waqas Khan",
    court: "Supreme Court of Pakistan",
    area: "Family Law",
    date: "2026",
    slug: "pld-2026-sc-91",
    pdf: "PLD-2026-Supreme-Court-91.pdf",
  },
  {
    citation: "2025 CLC 75",
    title:
      "Ministry of Interior Employees Cooperative Housing Society v. CDA and others",
    court: "Pakistan",
    area: "Housing / Cooperative Societies",
    date: "2025",
    slug: "2025-clc-75",
    pdf: "2025-CLC-75.pdf",
  },
  {
    citation: "2024 MLD 698",
    title: "JKCHS v. Gulraiz Mehmood",
    court: "Pakistan",
    area: "Housing / Cooperative Societies",
    date: "2024",
    slug: "2024-mld-698",
    pdf: "2024-MLD-698.pdf",
  },
  {
    citation: "2023 SCMR 1394",
    title: "Syed Amir Raza v. Mst. Rohi Mumtaz and others",
    court: "Supreme Court of Pakistan",
    area: "Family Law",
    date: "2023",
    slug: "2023-scmr-1394",
    pdf: "2023-SCMR-1394.pdf",
  },
  {
    citation: "2022 SCMR 726",
    title: "Jahanzeb Khan v. Umer Zahid",
    court: "Supreme Court of Pakistan",
    area: "Civil Law",
    date: "2022",
    slug: "2022-scmr-726",
    pdf: "2022-SCMR-726.pdf",
  },
  {
    citation: "2019 YLR 2569",
    title: "Farrukh Nisar v. Israr Ahmed",
    court: "Islamabad",
    area: "Civil Law",
    date: "2019",
    slug: "2019-ylr-2569",
    pdf: "2019-YLR-2569.pdf",
  },
  {
    citation: "2018 MLD 1869",
    title: "Zia Ullah Shah v. Muhammad Khaqan and others",
    court: "Pakistan",
    area: "Civil Law",
    date: "2018",
    slug: "2018-mld-1869",
    pdf: "2018-MLD-1869.pdf",
  },
  {
    citation: "2017 YLR Note 224",
    title: "Mst. Ghulab Jan v. RDA",
    court: "Pakistan",
    area: "Civil Law",
    date: "2017",
    slug: "2017-ylr-note-224",
    pdf: "2017-YLR-Note-224.pdf",
  },
  {
    citation: "2016 PCr.LJ 1463",
    title: "Nawazish Ali v. The State",
    court: "Pakistan",
    area: "Criminal Law",
    date: "2016",
    slug: "2016-pcrlj-1463",
    pdf: "2016-PCrLJ-1463.pdf",
  },
  {
    citation: "2016 PCr.LJ 98",
    title: "Ejaz Baig v. The State",
    court: "Islamabad",
    area: "Criminal Law",
    date: "2016",
    slug: "2016-pcrlj-98",
    pdf: "2016-PCrLJ-98.pdf",
  },
  {
    citation: "PLD 2015 SC 145",
    title: "Muhammad Raheel alias Shafique v. The State",
    court: "Supreme Court of Pakistan",
    area: "Criminal Law",
    date: "2015",
    slug: "pld-2015-sc-145",
    pdf: "PLD-2015-Supreme-Court-145.pdf",
  },
  {
    citation: "2014 SCMR 1371",
    title:
      "Nadeem Akhtar Tabasum v. Muslim Commercial Bank Limited and others",
    court: "Supreme Court of Pakistan",
    area: "Civil / Banking Law",
    date: "2014",
    slug: "2014-scmr-1371",
    pdf: "2014-SCMR-1371.pdf",
  },
  {
    citation: "PLD 2014 SC 389",
    title: "National Police Foundation Housing Scheme Matter",
    court: "Supreme Court of Pakistan",
    area: "Constitutional / Housing",
    date: "2014",
    slug: "pld-2014-sc-389",
    pdf: "PLD-2014-Supreme-Court-389.pdf",
  },
  {
    citation: "2013 SCMR 1310",
    title: "Khalid Pervaiz Gill v. Saifullah Gill and others",
    court: "Supreme Court of Pakistan",
    area: "Election Law",
    date: "2013",
    slug: "2013-scmr-1310",
    pdf: "2013-SCMR-1310.pdf",
  },
  {
    citation: "2013 SCMR 13",
    title: "TMA Kahuta v. Gul Fraz Khan",
    court: "Supreme Court of Pakistan",
    area: "Local Government / Civil Law",
    date: "2013",
    slug: "2013-scmr-13",
    pdf: "2013-SCMR-13.pdf",
  },
  {
    citation: "2013 PLC (CS) 377",
    title: "TMA Kahuta v. Gul Fraz Khan",
    court: "Pakistan",
    area: "Service / Civil Law",
    date: "2013",
    slug: "2013-plc-cs-377",
    pdf: "2013-PLC-CS-377.pdf",
  },
  {
    citation: "2012 YLR 1529",
    title:
      "M/S Shandar Petroleum/CNG and others v. Federation of Pakistan and others",
    court: "Islamabad",
    area: "Constitutional / CNG Law",
    date: "2012",
    slug: "2012-ylr-1529",
    pdf: "2012-YLR-1529.pdf",
  },
  {
    citation: "2012 PLC (CS) 1166",
    title: "Raja Muhammad Javaid v. Government of Punjab and others",
    court: "Pakistan",
    area: "Service Law",
    date: "2012",
    slug: "2012-plc-cs-1166",
    pdf: "2012-PLC-CS-1166.pdf",
  },
  {
    citation: "2005 YLR 1037",
    title: "Muhammad Akram v. Additional Sessions Judge, Rawalpindi and others",
    court: "Lahore High Court",
    area: "Criminal Law",
    date: "2005",
    slug: "2005-ylr-1037",
    pdf: "2005-YLR-1037.pdf",
  },
  {
    citation: "2005 MLD 1093",
    title: "Ali Kamal v. The State",
    court: "Pakistan",
    area: "Criminal Law",
    date: "2005",
    slug: "2005-mld-1093",
    pdf: "2005-MLD-1093.pdf",
  },
  {
    citation: "2005 CLC 882",
    title: "Nuricon Union (Pvt.) Ltd. v. Muhammad Nasar Sajjad",
    court: "Pakistan",
    area: "Civil / Corporate Law",
    date: "2005",
    slug: "2005-clc-882",
    pdf: "2005-CLC-882.pdf",
  },
  {
    citation: "PLD 2005 Lah. 168",
    title: "Mubarak Ali v. The State",
    court: "Lahore High Court",
    area: "Criminal Law",
    date: "2005",
    slug: "pld-2005-lah-168",
    pdf: "PLD-2005-Lah-168.pdf",
  },
  {
    citation: "2004 YLR 1143",
    title: "Sheikh Ashfaq-ur-Rasool v. CDA",
    court: "Pakistan",
    area: "Civil / Administrative Law",
    date: "2004",
    slug: "2004-ylr-1143",
    pdf: "2004-YLR-1143.pdf",
  },
  {
    citation: "2004 CLC 623",
    title: "Umar Hayat v. Manzoor Elahi",
    court: "Pakistan",
    area: "Civil Law",
    date: "2004",
    slug: "2004-clc-623",
    pdf: "2004-CLC-623.pdf",
  },
  {
    citation: "2000 YLR 348",
    title: "Malik Azhar v. The State",
    court: "Pakistan",
    area: "Criminal Law",
    date: "2000",
    slug: "2000-ylr-348",
    pdf: "2000-YLR-348.pdf",
  },
  {
    citation: "1999 YLR 356",
    title: "Raja Nasir Hussain v. The State",
    court: "Pakistan",
    area: "Criminal Law",
    date: "1999",
    slug: "1999-ylr-356",
    pdf: "1999-YLR-356.pdf",
  },
  {
    citation: "1999 PCr.LJ 1882",
    title: "Muhammad Arif Patwari v. The State",
    court: "Lahore High Court",
    area: "Criminal / Bail",
    date: "1999",
    slug: "1999-pcrlj-1882",
    pdf: "1999-PCr.Lj-1882-Muhammed-Arif-Patwair-Vs-The-State.pdf",
  },
  {
    citation: "1998 MLD 1291",
    title: "Qazi Faiz-ur-Rehman v. Ghulam Ahmed",
    court: "Pakistan",
    area: "Civil / Recovery",
    date: "1998",
    slug: "1998-mld-1291",
    pdf: "1998-MLD-1291.pdf",
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
          {judgments.map((judgment, index) => (
            <article
              key={judgment.citation}
              className="grid gap-7 border-b border-black/10 py-9 md:grid-cols-[190px_1fr_auto] md:items-center"
            >
              {/* SERIAL NUMBER AND CITATION */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                  Serial No. {String(index + 1).padStart(2, "0")}
                </p>

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

                  <span className="text-black/20">•</span>

                  <p className="text-xs uppercase tracking-[0.12em] text-[#b18a4b]">
                    {judgment.area}
                  </p>
                </div>
              </div>

              {/* PDF BUTTON */}
              <div>
                <a
                  href={`/judgments/${judgment.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-b border-[#b18a4b] pb-2 text-sm font-semibold text-[#14202b] transition hover:text-[#8c6935]"
                >
                  View Judgment (PDF) →
                </a>
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