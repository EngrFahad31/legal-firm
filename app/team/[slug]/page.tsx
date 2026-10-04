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
    role: "Advocate Supreme Court of Pakistan",
    bio: "Sheikh Muhammad Sulaman is a senior legal practitioner with extensive experience in litigation and legal representation. He has served as Former President of the High Court Bar Rawalpindi Bench during 2015–16.",
    expertise: [
      "Supreme Court Litigation",
      "Civil & Constitutional Law",
      "Criminal Law",
      "Service Matters",
    ],
    education: "Advocate Supreme Court of Pakistan",
    achievements: [
      "Advocate Supreme Court of Pakistan",
      "Former President High Court Bar Rawalpindi Bench (2015–16)",
    ],
    image: "/sheikh-muhammad-sulaman.jpeg",
  },

  "hifsa-sulaman-sheikh": {
    name: "Hifsa Sulaman Sheikh",
    role: "Advocate High Court",
    bio: "Hifsa Sulaman Sheikh is an Advocate High Court with an LLM in International Law, focusing on civil, family and international legal matters.",
    expertise: [
      "Family & Matrimonial Law",
      "Civil Litigation",
      "Property Disputes",
      "Women & Children Rights",
      "International Law",
    ],
    education: "LLM International Law",
    achievements: [
      "Advocate High Court",
      "LLM in International Law",
      "Represented Pakistani clients in international legal matters",
    ],
    image: "/hifsa-sulaman-sheikh.jpeg",
  },

  "sehrish-javed": {
    name: "Sehrish Javed",
    role: "Advocate High Court",
    bio: "Sehrish Javed is an Advocate High Court with an LLM in International Law, focusing on civil, family and international legal matters.",
    expertise: [
      "Family & Matrimonial Law",
      "Civil Litigation",
      "Property Disputes",
      "Women & Children Rights",
      "International Law",
    ],
    education: "LLM International Law",
    achievements: [
      "Advocate High Court",
      "LLM in International Law",
      "Legal representation and advisory",
    ],
    image: "/Sehrish Javed.jpeg",
  },

  "burooj-huma-hashmat": {
    name: "Burooj Huma Hashmat",
    role: "Advocate High Court",
    bio: "Burooj Huma Hashmat is an Advocate High Court with an LLM in International Law, focusing on civil, family and international legal matters.",
    expertise: [
      "Family & Matrimonial Law",
      "Civil Litigation",
      "Property Disputes",
      "Women & Children Rights",
      "International Law",
    ],
    education: "LLM International Law",
    achievements: [
      "Advocate High Court",
      "LLM in International Law",
      "Legal representation and advisory",
    ],
    image: "/Burooj Huma Hashmat.jpeg",
  },

  "sheikh-muhammad-waleed-sulaman": {
    name: "Sheikh Muhammad Waleed Sulaman",
    role: "Advocate High Court",
    bio: "Sheikh Muhammad Waleed Sulaman is an Advocate High Court with an LLM in International Law, focusing on civil, family and international legal matters.",
    expertise: [
      "Family & Matrimonial Law",
      "Civil Litigation",
      "Property Disputes",
      "Women & Children Rights",
      "International Law",
    ],
    education: "LLM International Law",
    achievements: [
      "Advocate High Court",
      "LLM in International Law",
      "Legal representation and advisory",
    ],
    image: "/Sheikh Muhammad Waleed Sulaman.jpeg",
  },

  "sheikh-muhammad-haseeb-sulaman": {
    name: "Sheikh Muhammad Haseeb Sulaman",
    role: "Advocate High Court",
    bio: "Sheikh Muhammad Haseeb Sulaman is an Advocate High Court with an LLM in International Law, focusing on civil, family and international legal matters.",
    expertise: [
      "Family & Matrimonial Law",
      "Civil Litigation",
      "Property Disputes",
      "Women & Children Rights",
      "International Law",
    ],
    education: "LLM International Law",
    achievements: [
      "Advocate High Court",
      "LLM in International Law",
      "Legal representation and advisory",
    ],
    image: "/Sheikh Muhammad Haseeb Sulaman.jpeg",
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
      <main className="flex min-h-screen items-center justify-center bg-[#f7f6f2] px-6">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-[#14202b]">
            Profile Not Found
          </h1>

          <Link
            href="/#team"
            className="mt-6 inline-block text-sm font-semibold text-[#8c6935]"
          >
            ← Back to Team
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#14202b]">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="border-b border-white/10 bg-[#14202b] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <Link
            href="/"
            className="font-serif text-xl tracking-[0.15em]"
          >
            SULAMAN LAW ASSOCIATES
          </Link>

          <Link
            href="/#team"
            className="text-sm text-white/70 transition hover:text-[#c9a66b]"
          >
            ← Our Team
          </Link>

        </div>
      </header>


      {/* =========================================================
          PROFILE HERO
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* PROFILE IMAGE */}
          <div className="overflow-hidden bg-[#14202b]">

            <img
              src={member.image}
              alt={member.name}
              className="h-[520px] w-full object-contain"
            />

          </div>


          {/* PROFILE INFORMATION */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b18a4b]">
              Legal Professional
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
              {member.name}
            </h1>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
              {member.role}
            </p>

            <div className="mt-10 h-px w-20 bg-[#c9a66b]" />

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/60">
              {member.bio}
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          EXPERTISE
      ========================================================= */}
      <section className="bg-[#14202b] px-6 py-20 text-white lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Areas of Expertise
              </p>

              <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
                Areas of Practice
              </h2>

            </div>


            <div>

              <div className="grid gap-0 border-l border-t border-white/10 sm:grid-cols-2">

                {member.expertise.map((item, index) => (
                  <div
                    key={item}
                    className="border-b border-r border-white/10 p-7"
                  >

                    <p className="text-xs text-[#c9a66b]">
                      0{index + 1}
                    </p>

                    <p className="mt-6 font-serif text-xl">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          EDUCATION & ACHIEVEMENTS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        <div className="grid gap-12 md:grid-cols-2">

          {/* EDUCATION */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b18a4b]">
              Education
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Academic Background
            </h2>

            <p className="mt-6 text-sm leading-7 text-black/55">
              {member.education}
            </p>

          </div>


          {/* ACHIEVEMENTS */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b18a4b]">
              Key Achievements
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Professional Highlights
            </h2>

            <div className="mt-6 space-y-4">

              {member.achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="border-l-2 border-[#c9a66b] pl-5 text-sm leading-7 text-black/60"
                >
                  {achievement}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTACT CTA
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:pb-28">

        <div className="bg-[#14202b] p-10 text-white md:p-14">

          <p className="text-xs uppercase tracking-[0.25em] text-[#c9a66b]">
            Need Legal Advice?
          </p>

          <h2 className="mt-5 font-serif text-3xl sm:text-4xl">
            Speak with our legal team.
          </h2>

          <Link
            href="/#contact"
            className="mt-8 inline-block border border-[#c9a66b] px-7 py-4 text-sm font-semibold text-[#c9a66b] transition hover:bg-[#c9a66b] hover:text-[#14202b]"
          >
            Contact Us →
          </Link>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#101a23] px-6 py-10 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/50 md:flex-row">

          <p>
            © 2026 SULAMAN LAW ASSOCIATES. All rights reserved.
          </p>

          <Link
            href="/"
            className="transition hover:text-[#c9a66b]"
          >
            Back to Home
          </Link>

        </div>

      </footer>

    </main>
  );
}