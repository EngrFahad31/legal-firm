
const serviceData: Record<
  string,
  {
    number: string;
    title: string;
    description: string;
    areas: string[];
  }
> = {
  "criminal-law": {
    number: "01",
    title: "Criminal Law",
    description:
      "Legal representation and assistance in criminal cases, court proceedings and related criminal matters.",
    areas: [
      "Criminal litigation and defence",
      "Bail applications",
      "Criminal complaints and proceedings",
      "Representation before criminal courts",
      "Legal advice on criminal matters",
      "Case preparation and court representation",
    ],
  },

  "labour-law": {
    number: "02",
    title: "Labour Law",
    description:
      "Legal advice and representation concerning employment, workplace rights and labour disputes.",
    areas: [
      "Employment disputes",
      "Workplace rights and obligations",
      "Employment contracts",
      "Labour law compliance",
      "Employer and employee disputes",
      "Representation in labour proceedings",
    ],
  },

  "legal-advice": {
    number: "03",
    title: "Legal Advice",
    description:
      "Practical legal guidance to help individuals and organizations understand their rights, obligations and available options.",
    areas: [
      "General legal consultation",
      "Legal opinions",
      "Contract review",
      "Legal rights and obligations",
      "Risk assessment",
      "Guidance on legal procedures",
    ],
  },

  taxation: {
    number: "04",
    title: "Taxation",
    description:
      "Legal assistance and advice concerning taxation matters, tax compliance and related disputes.",
    areas: [
      "Tax filing and compliance",
      "Tax notices and replies",
      "Tax disputes and litigation",
      "Tax-related legal advice",
      "Representation in tax matters",
      "Tax documentation and review",
    ],
  },

  "housing-and-cooperative-societies": {
    number: "05",
    title: "Housing & Cooperative Societies",
    description:
      "Legal assistance concerning housing schemes, cooperative societies, property documentation and related disputes.",
    areas: [
      "Housing scheme disputes",
      "Cooperative society matters",
      "Property and allotment disputes",
      "Transfer and ownership documentation",
      "Membership-related disputes",
      "Legal advice on housing matters",
    ],
  },

  "rental-laws": {
    number: "06",
    title: "Rental Laws",
    description:
      "Legal guidance and representation concerning tenancy, rent and landlord-tenant disputes.",
    areas: [
      "Landlord-tenant disputes",
      "Rent matters",
      "Tenancy agreements",
      "Eviction proceedings",
      "Tenant and landlord rights",
      "Representation in rental disputes",
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
      <main className="flex min-h-screen items-center justify-center bg-[#f7f6f2] px-6 text-[#14202b]">
        <div className="text-center">
          <h1 className="font-serif text-4xl sm:text-5xl">
            Service Not Found
          </h1>
          <a
            href="/#services"
            className="mt-8 inline-block border-b border-[#b18a4b] pb-2 text-sm font-semibold"
          >
            ← Back to Services
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#14202b]">
      <header className="border-b border-black/10 bg-[#f7f6f2]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#b89555] font-serif text-xl text-[#b89555]">
              SLA
            </div>
            <div>
              <div className="font-serif text-sm font-semibold tracking-wide sm:text-xl">
                SULAMAN LAW ASSOCIATES
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-black/50">
                Advocates & Legal Consultants
              </div>
            </div>
          </a>
          <a
            href="/#services"
            className="shrink-0 text-sm font-semibold transition hover:text-[#a98243]"
          >
            ← Back to Services
          </a>
        </nav>
      </header>

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

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
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
              Our team provides legal guidance and representation tailored to
              the relevant matter. Please contact the firm to discuss your
              specific circumstances.
            </p>
            <div className="mt-10 grid border-l border-t border-black/10 sm:grid-cols-2">
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

      <section className="bg-[#c9a66b] px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#14202b]/60">
              Need Legal Assistance?
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[#14202b] sm:text-5xl">
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

      <footer className="bg-[#101a24] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row">
          <div className="font-serif text-xl">SULAMAN LAW ASSOCIATES</div>
          <div className="text-sm text-white/40">
            © 2026 Sulaman Law Associates. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
