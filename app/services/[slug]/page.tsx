const serviceData: Record<
  string,
  {
    number: string;
    title: string;
    description: string;
    areas: string[];
  }
> = {
  "civil-law": {
    number: "01",
    title: "Civil Law",
    description:
      "Our civil law practice provides strategic legal representation and practical advice across a broad range of civil disputes and proceedings.",
    areas: [
      "Civil disputes and litigation",
      "Contractual disputes",
      "Recovery matters",
      "Property disputes",
      "Injunctions and declarations",
      "Legal representation before courts",
    ],
  },

  "corporate-law": {
    number: "02",
    title: "Corporate Law",
    description:
      "We provide practical legal support to businesses and organizations in corporate, commercial and transactional matters.",
    areas: [
      "Corporate documentation",
      "Commercial agreements",
      "Business advisory",
      "Corporate compliance",
      "Commercial transactions",
      "Dispute resolution",
    ],
  },

  "constitutional-law": {
    number: "03",
    title: "Constitutional Law",
    description:
      "Our constitutional law practice focuses on public law matters, constitutional petitions and representation before superior courts.",
    areas: [
      "Constitutional petitions",
      "Public law matters",
      "Fundamental rights",
      "Administrative decisions",
      "Judicial review",
      "Representation before superior courts",
    ],
  },

  "arbitration-and-adr": {
    number: "04",
    title: "Arbitration & ADR",
    description:
      "We assist clients in resolving disputes efficiently through arbitration, mediation and other alternative dispute resolution mechanisms.",
    areas: [
      "Domestic arbitration",
      "Commercial arbitration",
      "Mediation",
      "Negotiation",
      "Dispute settlement",
      "Arbitration advisory",
    ],
  },

  "property-and-land-law": {
    number: "05",
    title: "Property & Land Law",
    description:
      "Our property practice covers legal matters involving land, ownership, title, tenancy and property-related disputes.",
    areas: [
      "Property disputes",
      "Land ownership matters",
      "Title and documentation",
      "Tenancy matters",
      "Land transactions",
      "Property litigation",
    ],
  },

  "legal-advisory": {
    number: "06",
    title: "Legal Advisory",
    description:
      "We provide clear and practical legal advice designed to help individuals, businesses and institutions make informed decisions.",
    areas: [
      "Legal opinions",
      "Contract review",
      "Regulatory advice",
      "Risk assessment",
      "Business advisory",
      "General legal consultation",
    ],
  },
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = serviceData[slug];

  if (!service) {
    return (
      <main className="min-h-screen bg-[#f7f6f2] px-6 py-32 text-center text-[#14202b]">
        <h1 className="font-serif text-5xl">Service Not Found</h1>

        <a
          href="/#services"
          className="mt-8 inline-block border-b border-[#b18a4b] pb-2 text-sm font-semibold"
        >
          ← Back to Services
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#14202b]">
      {/* Header */}
      <header className="border-b border-black/10 bg-[#f7f6f2]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-[#b89555] font-serif text-xl text-[#b89555]">
              AL
            </div>

            <div>
              <div className="font-serif text-xl font-semibold tracking-wide">
                AURORA LEGAL
              </div>

              <div className="text-[9px] uppercase tracking-[0.3em] text-black/50">
                Advocates & Legal Consultants
              </div>
            </div>
          </a>

          <a
            href="/#services"
            className="text-sm font-semibold transition hover:text-[#a98243]"
          >
            ← Back to Services
          </a>
        </nav>
      </header>

      {/* Page Hero */}
      <section className="bg-[#14202b] px-6 py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#c9a66b]">
            <span className="h-px w-10 bg-[#c9a66b]" />
            Practice Area {service.number}
          </div>

          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            {service.title}
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b18a4b]">
              Our Expertise
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Comprehensive
              <br />
              Legal Support
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-black/60">
              Our team combines legal expertise, strategic thinking and
              practical experience to help clients navigate complex legal
              matters and pursue effective outcomes.
            </p>

            <div className="mt-12 grid border-l border-t border-black/10 sm:grid-cols-2">
              {service.areas.map((area, index) => (
                <div
                  key={area}
                  className="border-b border-r border-black/10 p-7"
                >
                  <div className="text-xs text-[#b18a4b]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-6 font-serif text-xl">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#c9a66b] px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#14202b]/60">
              Need Legal Assistance?
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#14202b] sm:text-5xl">
              Discuss your matter with our team.
            </h2>
          </div>

          <a
            href="/#contact"
            className="inline-flex shrink-0 bg-[#14202b] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#253747]"
          >
            Contact Our Firm
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101a24] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row">
          <div className="font-serif text-xl">AURORA LEGAL</div>

          <div className="text-sm text-white/40">
            © 2026 Aurora Legal. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}