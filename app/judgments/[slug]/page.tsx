import Link from "next/link";
import { notFound } from "next/navigation";

const judgments = {
  "2023-scmr-1394": {
    citation: "2023 SCMR 1394",
    title: "Syed Amir Raza v. Mst. Rohi Mumtaz and others",
    court: "Supreme Court of Pakistan",
    date: "5 May 2023",
    category: "Family Law",
    caseNumber: "Civil Petition No. 2865 of 2022",
    judge: "Amin-ud-Din Khan and Syed Hasan Azhar Rizvi, JJ",
    summary:
      "The case concerned dissolution of marriage through khula and the entitlement of the wife regarding deferred dower. The Supreme Court considered the effect of section 10(5) of the Family Courts Act, 1964.",
    issue:
      "Whether the respondent/wife was entitled to the entire house mentioned as deferred dower or only the portion remaining after surrender of the prescribed share under khula.",
    decision:
      "The petition for leave to appeal was converted into an appeal and allowed. The impugned order was modified regarding deferred dower, and the respondent/wife was held entitled to fifty percent share in the house in question or its market value.",
    law: [
      "Family Courts Act, 1964 — Section 10(5)",
      "Constitution of Pakistan, 1973 — Article 185(3)",
      "Dissolution of marriage through khula",
      "Deferred dower",
    ],
    counsel:
      "Sh. Muhammad Suleman, Advocate Supreme Court for the respondents.",
  },

  "2019-ylr-2569": {
    citation: "2019 YLR 2569",
    title: "Farrukh Nisar v. Israr Ahmed",
    court: "Islamabad",
    date: "12 September 2017",
    category: "Civil Law",
    caseNumber: "R.F.A. No. 142 of 2016",
    judge: "Miangul Hassan Aurangzeb, J",
    summary:
      "The matter concerned a summary suit for recovery of money under Order XXXVII of the Code of Civil Procedure, limitation, service of summons and the effect of a stay order on proceedings.",
    issue:
      "Whether the application for leave to appear and defend the summary suit was time barred and what effect a stay order had upon proceedings conducted during the period of stay.",
    decision:
      "The Court held that proper service requirements had to be satisfied in a summary suit and that proceedings conducted during the subsistence of a stay order could not stand. The impugned judgment and decree were set aside and the matter was remanded for decision afresh.",
    law: [
      "Code of Civil Procedure, 1908 — Order XXXVII",
      "Limitation Act, 1908 — Article 159",
      "Summary suit",
      "Leave to appear and defend",
      "Effect of stay order",
    ],
    counsel:
      "Sheikh Muhammad Sulaman, for the Appellant.",
  },

  "2016-pcrlj-98": {
    citation: "2016 PCr.LJ 98",
    title: "Ejaz Baig v. The State",
    court: "Islamabad",
    date: "3 August 2015",
    category: "Criminal / Bail",
    caseNumber: "Criminal Miscellaneous No. 446/B of 2015",
    judge: "Aamer Farooq, J",
    summary:
      "The petitioner sought post-arrest bail in a case involving foreign currency allegedly being taken out of Pakistan through Benazir Bhutto International Airport, Islamabad.",
    issue:
      "Whether the circumstances of the case called for further inquiry regarding the prescribed foreign currency limit and the stage at which the petitioner had crossed the Customs counter.",
    decision:
      "The Court found that the circumstances called for further probe. The itinerary information supported the petitioner's claim concerning travelling family members, and the FIR did not clearly establish whether the Customs declaration stage had been crossed. Bail was therefore allowed.",
    law: [
      "Code of Criminal Procedure, 1898 — Section 497(2)",
      "Customs Act, 1969 — Sections 2(s), 139, 156(1)(8), 157(70)",
      "Foreign Exchange Regulation Act, 1947 — Section 8",
      "Further inquiry",
      "Post-arrest bail",
    ],
    counsel:
      "Sheikh Muhammad Suleman for the Petitioner.",
  },

  "pld-2015-sc-145": {
    citation: "PLD 2015 Supreme Court 145",
    title: "Criminal Appeal concerning juvenility and death sentence",
    court: "Supreme Court of Pakistan",
    date: "2015",
    category: "Criminal Law",
    caseNumber: "Appeal by leave of the Supreme Court",
    judge: "Supreme Court of Pakistan",
    summary:
      "The case concerned convictions carrying sentences of death, a plea of juvenility, a claim based on long incarceration and arguments concerning the evidence and circumstances surrounding the offence.",
    issue:
      "The Court considered whether the appellant's claim of juvenility, long period of incarceration and other circumstances justified interference with the convictions or reduction of the death sentences.",
    decision:
      "The uploaded judgment records that the delayed claim of juvenility was not accepted merely on the basis of the age mentioned in the statement under section 342, Cr.P.C. The Court also considered the legal principles governing reduction of a death sentence on the basis of prolonged incarceration.",
    law: [
      "Pakistan Penal Code, 1860 — Section 302(b)",
      "Code of Criminal Procedure, 1898 — Section 342",
      "Juvenility",
      "Death sentence",
      "Long incarceration",
    ],
    counsel:
      "As recorded in the uploaded judgment.",
  },

  "2013-scmr-1310": {
    citation: "2013 SCMR 1310",
    title: "Election Qualification Matter — PP-61 Faisalabad",
    court: "Supreme Court of Pakistan",
    date: "2013",
    category: "Constitutional / Election Law",
    caseNumber: "Civil Petition for Leave to Appeal",
    judge: "Supreme Court of Pakistan",
    summary:
      "The matter concerned the qualification of a candidate to contest an election and earlier findings regarding the date of birth recorded in a matriculation certificate.",
    issue:
      "Whether the earlier findings concerning the respondent's matriculation certificate and date of birth constituted sufficient material for examining his qualification under Article 62(1)(f) of the Constitution.",
    decision:
      "The Supreme Court granted leave and directed that the respondent be restrained from contesting the election from constituency PP-61 Faisalabad, following the reasoning discussed in the judgment.",
    law: [
      "Constitution of Pakistan, 1973 — Article 62(1)(f)",
      "Election law",
      "Qualification of candidate",
      "Matriculation certificate",
      "Date of birth",
    ],
    counsel:
      "As recorded in the uploaded judgment.",
  },

  "2012-ylr-1529": {
    citation: "2012 YLR 1529",
    title:
      "Messrs Shandar Petroleum/CNG and 46 others v. Federation of Pakistan through Ministry of Petroleum and 2 others",
    court: "Islamabad",
    date: "23 December 2011",
    category: "Constitutional / CNG",
    caseNumber: "Writ Petitions",
    judge: "Riaz Ahmad Khan, J",
    summary:
      "The matter concerned CNG stations, natural gas supply and the Natural Gas Allocation and Management Policy 2005.",
    issue:
      "The petitions raised questions concerning the allocation and curtailment of natural gas supply to CNG stations and the applicable policy framework.",
    decision:
      "The Court considered the statutory and policy framework governing natural gas allocation and the respective positions of the petitioners and respondents.",
    law: [
      "Constitution of Pakistan — Article 158",
      "Constitution of Pakistan — Article 172",
      "Natural Gas Allocation and Management Policy 2005",
      "CNG regulation",
      "Natural gas supply",
    ],
    counsel:
      "Sheikh Muhammad Suleman for petitioners in the relevant petition.",
  },

  "2005-ylr-1037": {
    citation: "2005 YLR 1037",
    title:
      "Muhammad Akram v. Additional Sessions Judge, Rawalpindi and 6 others",
    court: "Lahore High Court",
    date: "1 July 2004",
    category: "Criminal Law",
    caseNumber: "Writ Petition No. 1129 of 2000",
    judge: "Sardar Muhammad Aslam, J",
    summary:
      "The petitioner challenged orders concerning an application under section 249-A, Cr.P.C. through which the accused had been acquitted/discharged in proceedings relating to section 427, P.P.C.",
    issue:
      "Whether a revision petition was competent against an acquittal under section 249-A, Cr.P.C., where an appeal under section 417(2-A), Cr.P.C. was available.",
    decision:
      "The Constitutional petition was dismissed. The Court held that the remedy against the acquittal was an appeal under section 417(2-A), Cr.P.C., and the revision petition was not competent in the presence of that statutory remedy.",
    law: [
      "Code of Criminal Procedure, 1898 — Section 249-A",
      "Code of Criminal Procedure, 1898 — Section 417(2-A)",
      "Code of Criminal Procedure, 1898 — Section 439(5)",
      "Pakistan Penal Code — Section 427",
      "Constitution of Pakistan — Article 199",
    ],
    counsel:
      "Sheikh Muhammad Suleman for the Petitioner.",
  },

  "1999-pcrlj-1882": {
    citation: "1999 PCr.LJ 1882",
    title: "Muhammad Arif Patwari v. The State",
    court: "Lahore",
    date: "11 November 1998",
    category: "Criminal / Bail",
    caseNumber: "Criminal Miscellaneous No. 903/B of 1998",
    judge: "Muhammad Nawaz Abbasi, J",
    summary:
      "The case concerned a bail petition involving allegations under the Prevention of Corruption Act and the Pakistan Penal Code.",
    issue:
      "Whether the circumstances of the case called for further inquiry for purposes of bail under section 497(2), Cr.P.C.",
    decision:
      "The matter was considered in the context of further inquiry and the statutory requirements governing bail.",
    law: [
      "Code of Criminal Procedure, 1898 — Section 497(2)",
      "Prevention of Corruption Act — Section 5(2)",
      "Pakistan Penal Code — Sections 161, 467, 468, 471 and 420",
      "Further inquiry",
      "Bail",
    ],
    counsel:
      "Sh. Muhammad Suleman for the Petitioner.",
  },

  "1998-mld-1291": {
    citation: "1998 MLD 1291",
    title: "Qazi Faiz-ur-Rehman v. Ghulam Ahmed",
    court: "Lahore",
    date: "25 November 1997",
    category: "Civil / Recovery",
    caseNumber: "Civil Revision No. 195 of 1997",
    judge: "Raja Muhammad Khurshid, J",
    summary:
      "The matter concerned a summary suit for recovery of a specified amount based on two dishonoured cheques and the condition imposed upon the defendant to furnish a bank guarantee.",
    issue:
      "Whether the trial court had properly exercised its discretion in requiring the defendant to furnish a bank guarantee while granting leave to appear and defend the summary suit.",
    decision:
      "The Court held that the trial court had exercised its discretion according to the circumstances of the case and that the impugned order did not suffer from legal infirmity requiring interference.",
    law: [
      "Code of Civil Procedure, 1908 — Order XXXVII Rule 3",
      "Summary suit",
      "Leave to appear and defend",
      "Bank guarantee",
      "Recovery of specified amount",
    ],
    counsel:
      "Sh. Muhammad Suleman for the Petitioner.",
  },

  "pld-2014-sc-389": {
    citation: "PLD 2014 Supreme Court 389",
    title: "National Police Foundation Housing Scheme Matter",
    court: "Supreme Court of Pakistan",
    date: "2014",
    category: "Constitutional / Housing",
    caseNumber: "As recorded in the reported judgment",
    judge: "Supreme Court of Pakistan",
    summary:
      "The uploaded reported judgment concerns proceedings relating to the National Police Foundation Housing Scheme and includes applications and proceedings before the Supreme Court.",
    issue:
      "The matter involves legal questions arising from the housing scheme and proceedings recorded in the Supreme Court judgment.",
    decision:
      "The page presents the reported matter as contained in the uploaded record without adding facts or conclusions that are not established by the uploaded document.",
    law: [
      "Constitutional jurisdiction",
      "Housing scheme matters",
      "National Police Foundation",
    ],
    counsel:
      "The uploaded judgment records Sh. M. Suleman, Advocate Supreme Court, among the counsel.",
  },
} as const;

type JudgmentSlug = keyof typeof judgments;

export function generateStaticParams() {
  return Object.keys(judgments).map((slug) => ({
    slug,
  }));
}

export default async function JudgmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in judgments)) {
    notFound();
  }

  const judgment = judgments[slug as JudgmentSlug];

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
            href="/judgments"
            className="text-sm font-semibold transition hover:text-[#a98243]"
          >
            ← All Judgments
          </Link>

        </nav>
      </header>


      {/* HERO */}
      <section className="bg-[#14202b] px-6 py-20 text-white lg:py-28">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
            {judgment.citation}
          </p>

          <h1 className="mt-7 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {judgment.title}
          </h1>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">

            <span>{judgment.court}</span>

            <span>•</span>

            <span>{judgment.date}</span>

            <span>•</span>

            <span>{judgment.category}</span>

          </div>

        </div>

      </section>


      {/* CASE INFORMATION */}
      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-24">

        <div className="grid gap-10 md:grid-cols-[220px_1fr]">

          <aside>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b18a4b]">
              Case Information
            </p>

          </aside>

          <div className="grid gap-8 sm:grid-cols-2">

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                Citation
              </p>

              <p className="mt-2 font-serif text-xl">
                {judgment.citation}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                Court
              </p>

              <p className="mt-2 font-serif text-xl">
                {judgment.court}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                Case Number
              </p>

              <p className="mt-2 text-sm leading-7 text-black/65">
                {judgment.caseNumber}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                Judge
              </p>

              <p className="mt-2 text-sm leading-7 text-black/65">
                {judgment.judge}
              </p>
            </div>

          </div>

        </div>


        {/* SUMMARY */}
        <div className="mt-20 border-t border-black/10 pt-16">

          <div className="grid gap-10 md:grid-cols-[220px_1fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b18a4b]">
                Case Summary
              </p>
            </div>

            <div>

              <p className="text-base leading-8 text-black/65">
                {judgment.summary}
              </p>

            </div>

          </div>

        </div>


        {/* ISSUE */}
        <div className="mt-16 border-t border-black/10 pt-16">

          <div className="grid gap-10 md:grid-cols-[220px_1fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b18a4b]">
                Legal Issue
              </p>
            </div>

            <div>

              <p className="text-xl leading-9 text-[#14202b]">
                {judgment.issue}
              </p>

            </div>

          </div>

        </div>


        {/* DECISION */}
        <div className="mt-16 border-t border-black/10 pt-16">

          <div className="grid gap-10 md:grid-cols-[220px_1fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b18a4b]">
                Decision
              </p>
            </div>

            <div>

              <p className="text-base leading-8 text-black/65">
                {judgment.decision}
              </p>

            </div>

          </div>

        </div>


        {/* LAW */}
        <div className="mt-16 border-t border-black/10 pt-16">

          <div className="grid gap-10 md:grid-cols-[220px_1fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b18a4b]">
                Relevant Law
              </p>
            </div>

            <div>

              <ul className="space-y-4">

                {judgment.law.map((item) => (
                  <li
                    key={item}
                    className="border-b border-black/10 pb-4 text-sm leading-7 text-black/65"
                  >
                    {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>


        {/* COUNSEL */}
        <div className="mt-16 border-t border-black/10 pt-16">

          <div className="grid gap-10 md:grid-cols-[220px_1fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b18a4b]">
                Counsel
              </p>
            </div>

            <div>

              <p className="text-sm leading-7 text-black/65">
                {judgment.counsel}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-[#c9a66b] px-6 py-20">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#14202b]/60">
              Sulaman Law Associates
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