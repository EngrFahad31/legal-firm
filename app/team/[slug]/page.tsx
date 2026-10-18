import Link from "next/link";

const teamData: Record<
  string,
  {
    name: string;
    role: string;
    bio: string;
    expertise: string[];
    education: string;
    achievements: string[];
    image: string;
  }
> = {
  "sheikh-muhammad-sulaman": {
  name: "Sheikh Muhammad Sulaman",
  role: "Advocate High Court",
  bio: "Sheikh Muhammad Sulaman provides legal services in civil, criminal, property and family court matters.",
  expertise: [
    "Civil Law",
    "Criminal Law",
    "Property Law",
    "Family Court Matters",
    "Constitutional Law",
    "Revenue Laws",
  ],
  education: "LLB (Hons)",
  achievements: ["Legal Practice and Client Representation"],
  image: "/Sheikh Muhammad Sulaman.jpg",
},

  "hifsa-sulaman-sheikh": {
  name: "Hifsa Sulaman Sheikh",
  role: "Advocate High Court",
  bio: "Hifsa Sulaman Sheikh provides legal representation and advisory services in her areas of practice.",
  expertise: [
    "Family & Matrimonial Law",
    "Civil Litigation",
    "Property Disputes",
    "Women & Children Rights",
    "International Law",
    "Criminal Law",
  ],
  education: "LLM International Law, Masters in International Relations",
  achievements: [
    "Advocate High Court",
    "Legal Representation and Advisory",
  ],
  image: "/hifsa-sulaman-sheikh.jpg",
},

  "sehrish-javed": {
  name: "Sehrish Javed",
  role: "Advocate High Court",
  bio: "Sehrish Javed provides legal representation in criminal, civil and family law matters.",
  expertise: [
    "Criminal Law",
    "Civil Law",
    "Family Law",
  ],
  education: "LLB",
  achievements: [
    "Advocate High Court",
    "Legal Representation and Advisory",
  ],
  image: "/sehrish-javed.jpg",
},

  "burooj-huma-hashmat": {
  name: "Burooj Huma Hashmat",
  role: "Advocate High Court",
  bio: "Burooj Huma Hashmat provides legal representation in civil and family law matters.",
  expertise: [
    "Civil Law",
    "Family Law",
  ],
  education: "LLB",
  achievements: [
    "Advocate High Court",
    "Civil and Family Law Practice",
  ],
  image: "/burooj-huma-hashmat.jpg",
},

  "sheikh-muhammad-waleed-sulaman": {
    name: "Sheikh Muhammad Waleed Sulaman",
    role: "Advocate High Court",
    bio: "Sheikh Muhammad Waleed Sulaman provides legal services in civil, criminal, property and taxation matters.",
    expertise: [
      "Civil Law",
      "Criminal Law",
      "Property Law",
      "Tax Law",
    ],
    education: "LLB",
    achievements: ["Legal Practice and Client Representation"],
    image: "/sheikh-muhammad-waleed-sulaman.jpg",
  },

  "sheikh-muhammad-haseeb-sulaman": {
    name: "Sheikh Muhammad Haseeb Sulaman",
    role: "Advocate High Court",
    bio: "Sheikh Muhammad Haseeb Sulaman provides legal services in civil, criminal, property and family court matters.",
    expertise: [
      "Civil Law",
      "Criminal Law",
      "Property Law",
      "Family Court Matters",
    ],
    education: "LLB",
    achievements: [
      "Advocate High Court",
      "Legal Practice and Representation",
    ],
    image: "/sheikh-muhammad-haseeb-sulaman.jpg",
  },

  "ali-artaza": {
    name: "Ali Irtiza",
    role: "Taxation Expert",
    bio: "Ali Irtiza focuses on taxation, corporate legal matters, intellectual property and dispute resolution.",
    expertise: [
      "Tax Filing & Audit",
      "Tax Litigation and Compliance",
      "Corporate Restructuring",
      "Company Laws Litigation",
      "Competition Commission of Pakistan Litigation",
      "Intellectual Property Laws: Licensing and Litigation",
      "Arbitration and Mediation",
    ],
    education: "LLB",
    achievements: [
      "Tax and Corporate Legal Services",
      "Litigation and Dispute Resolution",
    ],
    image: "/Ali%20Artaza.jpg",
  },
};

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = teamData[slug];

  if (!member) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-[#14202b]">
            Profile Not Found
          </h1>
          <Link
            href="/#team"
            className="mt-6 inline-block text-sm font-semibold text-[#b18a4b]"
          >
            ← Back to Team
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#14202b]">
      <header className="sticky top-0 z-50 border-b border-[#14202b]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center text-3xl text-[#e5a31a]">
              ⚖
            </div>
            <div>
              <div className="font-sans text-base font-bold tracking-tight text-[#14202b] sm:text-xl">
                SULAMAN LAW ASSOCIATES
              </div>
              <div className="hidden text-[9px] uppercase tracking-[0.28em] text-[#14202b]/50 sm:block">
                Advocates & Legal Consultants
              </div>
            </div>
          </Link>

          <Link
            href="/#team"
            className="text-sm font-semibold text-[#14202b]/65 transition hover:text-[#b18a4b]"
          >
            ← Our Team
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex min-h-[430px] items-center justify-center overflow-hidden bg-[#f5f0e5] sm:min-h-[520px]">
            <img
              src={member.image}
              alt={member.name}
              className="block h-auto max-h-[650px] w-full object-contain"
            />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e5a31a]">
              Legal Professional
            </p>

            <h1 className="mt-4 font-sans text-4xl font-bold leading-tight text-[#14202b] sm:text-5xl lg:text-6xl">
              {member.name}
            </h1>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#14202b]/55">
              {member.role}
            </p>

            <div className="mt-7 h-[3px] w-16 bg-[#e5a31a]" />

            <div className="mt-8 border-l-4 border-[#e5a31a] bg-[#f5f0e5] px-6 py-6 sm:px-8 sm:py-8">
              <p className="text-base italic leading-8 text-[#334155] sm:text-lg">
                {member.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center text-3xl text-[#e5a31a]">
            ♙
          </div>
          <h2 className="font-sans text-3xl font-bold text-[#14202b] sm:text-4xl">
            Areas of Expertise
          </h2>
        </div>

        <div className="mt-7 space-y-5 sm:ml-2">
          {member.expertise.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 text-base text-[#334155] sm:text-lg"
            >
              <span className="mt-0.5 shrink-0 text-2xl leading-none text-[#e5a31a]">
                →
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center text-3xl text-[#e5a31a]">
            ♧
          </div>
          <h2 className="font-sans text-3xl font-bold text-[#14202b] sm:text-4xl">
            Key Achievements
          </h2>
        </div>

        <div className="mt-7 space-y-5 sm:ml-2">
          {member.achievements.map((achievement) => (
            <div
              key={achievement}
              className="flex items-start gap-4 text-base text-[#334155] sm:text-lg"
            >
              <span className="mt-0.5 shrink-0 text-2xl leading-none text-[#e5a31a]">
                →
              </span>
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="border-t border-[#14202b]/10 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e5a31a]">
            Professional Background
          </p>
          <h2 className="mt-3 font-sans text-3xl font-bold text-[#14202b]">
            Education & Qualification
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#334155]">
            {member.education}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-6 sm:pb-20">
        <div className="bg-[#14202b] px-7 py-10 text-white sm:px-10 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e5a31a]">
            Need Legal Advice?
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Speak with our legal team.
          </h2>
          <Link
            href="/#contact"
            className="mt-7 inline-block border border-[#e5a31a] px-7 py-4 text-sm font-semibold text-[#e5a31a] transition hover:bg-[#e5a31a] hover:text-[#14202b]"
          >
            Contact Us →
          </Link>
        </div>
      </section>

      <a
        href="https://wa.me/923215175624"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sulaman Law Associates on WhatsApp"
        className="fixed bottom-6 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-xl transition hover:scale-105 sm:bottom-8 sm:right-8"
      >
        ☎
      </a>

      <footer className="bg-[#101a23] px-5 py-8 text-white sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-white/50 sm:flex-row">
          <p>© 2026 SULAMAN LAW ASSOCIATES. All rights reserved.</p>
          <Link href="/" className="transition hover:text-[#e5a31a]">
            Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}