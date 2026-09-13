import Image from "next/image";

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

const team = [
  {
    name: "Muhammad Ahmed",
    role: "Senior Partner",
    initials: "MA",
  },
  {
    name: "Sara Khan",
    role: "Partner",
    initials: "SK",
  },
  {
    name: "Ali Raza",
    role: "Senior Associate",
    initials: "AR",
  },
];

const judgments = [
  ["2025", "ABC v. Federation of Pakistan", "Supreme Court"],
  ["2024", "XYZ Enterprises v. Government", "Islamabad High Court"],
  ["2024", "Ali & Co. v. State", "Lahore High Court"],
  ["2023", "Property Rights Matter", "High Court"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#14202b]">
      {/* Top Bar */}
      <div className="bg-[#101a24] px-6 py-2 text-xs text-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>Trusted Legal Counsel & Representation</span>
          <span>Islamabad • Pakistan</span>
        </div>
      </div>

      {/* Navigation */}
      <header className="border-b border-black/10 bg-[#f7f6f2]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center border border-[#b89555] font-serif text-xl text-[#b89555]">
              AL
            </div>

            <div>
              <div className="font-serif text-xl font-semibold tracking-wide">
                SLA — Sulaman Law Associates
LAW ASSOCIATES
              </div>

              <div className="text-[9px] uppercase tracking-[0.3em] text-black/50">
                Advocates & Legal Consultants
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm lg:flex">
            <a href="#" className="transition hover:text-[#a98243]">
              Home
            </a>

            <a href="#about" className="transition hover:text-[#a98243]">
              About
            </a>

            <a href="#services" className="transition hover:text-[#a98243]">
              Services
            </a>

            <a href="#team" className="transition hover:text-[#a98243]">
              Our Team
            </a>

            <a href="#judgments" className="transition hover:text-[#a98243]">
              Judgments
            </a>

            <a href="#contact" className="transition hover:text-[#a98243]">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden border border-[#14202b] px-5 py-3 text-xs font-semibold uppercase tracking-wider transition hover:bg-[#14202b] hover:text-white sm:block"
          >
            Consult Us
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#14202b]">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#c9a66b_0,_transparent_55%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          {/* Hero Text */}
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#c9a66b]">
              <span className="h-px w-10 bg-[#c9a66b]" />
              Established 1998
            </div>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Counsel.
              <br />
              <span className="text-[#c9a66b]">Advocate.</span>
              <br />
              Deliver.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/65">
              A full-service law firm providing trusted legal representation,
              strategic advice and effective solutions for individuals,
              businesses and institutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#c9a66b] px-7 py-4 text-sm font-semibold text-[#14202b] transition hover:bg-[#dec58f]"
              >
                Schedule a Consultation
              </a>

              <a
                href="#services"
                className="border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:border-white"
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
                  alt="SLA — Sulaman Law Associates"
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

      {/* Stats */}
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
              className="border-r border-black/10 px-6 py-10 last:border-r-0"
            >
              <div className="font-serif text-4xl text-[#b18a4b]">
                {number}
              </div>

              <div className="mt-2 text-xs uppercase tracking-widest text-black/50">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24 lg:py-32"
      >
        <div className="grid gap-16 lg:grid-cols-2">
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
              SLA — Sulaman Law Associates is a full-service law firm committed to delivering
              thoughtful, commercially practical and results-oriented legal
              solutions.
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

     {/* Services */}
<section
  id="services"
  className="bg-[#14202b] px-6 py-24 text-white lg:py-32"
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

          <div className="mt-8 text-sm text-[#c9a66b] opacity-0 transition group-hover:opacity-100">
            Learn more →
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

    {/* Team */}
<section
  id="team"
  className="mx-auto max-w-7xl px-6 py-24 lg:py-32"
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

  <div className="mt-14 grid gap-8 md:grid-cols-2">

    {/* Sheikh Muhammad Sulaman */}
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


    {/* Hifsa Sulaman Sheikh */}
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

  </div>
</section>
      {/* Judgments */}
      <section
        id="judgments"
        className="border-y border-black/10 bg-white px-6 py-24 lg:py-28"
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
              {judgments.map(([year, title, court]) => (
                <div
                  key={title}
                  className="grid grid-cols-[60px_1fr] gap-5 border-t border-black/10 py-6"
                >
                  <span className="text-xs text-[#b18a4b]">{year}</span>

                  <div>
                    <h3 className="font-serif text-xl">{title}</h3>

                    <p className="mt-1 text-xs uppercase tracking-wider text-black/40">
                      {court}
                    </p>
                  </div>
                </div>
              ))}

              <button className="mt-5 border-b border-[#b18a4b] pb-2 text-sm font-semibold">
                View All Judgments →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="bg-[#c9a66b] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-14 lg:grid-cols-2">
      
      {/* Left Side */}
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

        {/* Contact Details */}
        <div className="mt-10 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#14202b]/50">
              Phone
            </p>

            <a
              href="tel:+92511234567"
              className="mt-2 block text-lg text-[#14202b] hover:underline"
            >
              +92 51 1234567
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#14202b]/50">
              Email
            </p>

            <a
              href="mailto:info@auroralegal.com"
              className="mt-2 block text-lg text-[#14202b] hover:underline"
            >
              info@auroralegal.com
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#14202b]/50">
              Office
            </p>

            <p className="mt-2 max-w-sm text-lg leading-7 text-[#14202b]">
              Islamabad, Pakistan
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

      {/* Footer */}
      <footer className="bg-[#101a24] px-6 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-2xl">SLA — Sulaman Law Associates</div>

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
              Blue Area, Islamabad
              <br />
              Pakistan
              <br />
              +92 51 0000000
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#c9a66b]">
              Email
            </div>

            <p className="mt-4 text-sm text-white/55">
              info@auroralegal.com
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/30">
          © 2026 SLA — Sulaman Law Associates
LAW ASSOCIATES. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}