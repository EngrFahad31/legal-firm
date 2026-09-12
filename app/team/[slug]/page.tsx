import Link from "next/link";

const teamData: Record<
  string,
  {
    name: string;
    role: string;
    initials: string;
    bio: string;
    expertise: string[];
    education: string;
  }
> = {
  "muhammad-ahmed": {
    name: "Muhammad Ahmed",
    role: "Senior Partner",
    initials: "MA",
    bio: "Muhammad Ahmed is a senior legal practitioner with extensive experience advising clients on complex legal matters. He focuses on practical, strategic and commercially sound legal solutions.",
    expertise: [
      "Civil Litigation",
      "Corporate Law",
      "Legal Advisory",
      "Commercial Disputes",
    ],
    education: "LL.B. — University of Law",
  },

  "sara-khan": {
    name: "Sara Khan",
    role: "Partner",
    initials: "SK",
    bio: "Sara Khan advises individuals and organizations on a broad range of legal matters, with a strong focus on dispute resolution and strategic legal representation.",
    expertise: [
      "Constitutional Law",
      "Arbitration & ADR",
      "Civil Law",
      "Legal Documentation",
    ],
    education: "LL.B. — University of Law",
  },

  "ali-raza": {
    name: "Ali Raza",
    role: "Senior Associate",
    initials: "AR",
    bio: "Ali Raza works across litigation and advisory matters, helping clients navigate complex legal issues with careful analysis and a solutions-focused approach.",
    expertise: [
      "Property & Land Law",
      "Civil Litigation",
      "Legal Research",
      "Legal Advisory",
    ],
    education: "LL.B. — University of Law",
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
      {/* Header */}
      <header className="border-b border-black/10 bg-[#14202b] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.15em]"
          >
            AURORA LEGAL
          </Link>

          <Link
            href="/#team"
            className="text-sm text-white/70 transition hover:text-[#c9a66b]"
          >
            ← Our Team
          </Link>
        </div>
      </header>

      {/* Profile Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Profile Image */}
          <div className="flex aspect-[4/5] items-end bg-gradient-to-br from-[#d7d5ce] to-[#a9aaa6] p-10">
            <div className="flex h-28 w-28 items-center justify-center bg-[#14202b] font-serif text-3xl text-[#c9a66b]">
              {member.initials}
            </div>
          </div>

          {/* Profile Information */}
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

      {/* Expertise */}
      <section className="bg-[#14202b] px-6 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
                Expertise
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

      {/* Education & CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 md:grid-cols-2">
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

          <div className="bg-[#14202b] p-10 text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-[#c9a66b]">
              Need Legal Advice?
            </p>

            <h2 className="mt-5 font-serif text-3xl">
              Speak with our legal team.
            </h2>

            <Link
              href="/#contact"
              className="mt-8 inline-block border border-[#c9a66b] px-7 py-4 text-sm font-semibold text-[#c9a66b] transition hover:bg-[#c9a66b] hover:text-[#14202b]"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101a23] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/50 md:flex-row">
          <p>© 2026 AURORA LEGAL. All rights reserved.</p>

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