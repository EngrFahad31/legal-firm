"use client";

import Image from "next/image";

const sectors = [
  {
    title: "Housing Societies",
    clients: [
      {
        name: "Jammu & Kashmir Cooperative Housing Society",
        logo: "/clients/jkchs.jpg",
      },
      {
        name: "Ministry of Interior Employees Cooperative Housing Society",
        logo: "/clients/miechs.jpg",
      },
      {
        name: "Supreme Court Employees Housing Society",
        logo: "/clients/scehs.jpg",
      },
    ],
  },
  {
    title: "Government & Public Sector",
    clients: [
      {
        name: "National Highway Authority",
        logo: "/clients/nha.jpg",
      },
      {
        name: "Federal Board of Intermediate and Secondary Education",
        logo: "/clients/fbise.jpg",
      },
      {
        name: "Oil and Gas Development Company Limited",
        logo: "/clients/ogdcl.jpg",
      },
      {
        name: "Punjab Local Government Contractor",
        logo: "/clients/punjab-local-government.jpg",
      },
    ],
  },
  {
    title: "Corporate & Commercial",
    clients: [
      {
        name: "M/S Midway Petroleum",
        logo: "/clients/midway-petroleum.jpg",
      },
      {
        name: "Fair Deal Exchange Company",
        logo: "/clients/fair-deal-exchange.jpg",
      },
      {
        name: "Associated Hotels of Pakistan",
        logo: "/clients/associated-hotels.jpg",
      },
      {
        name: "Flashman Hotel",
        logo: "/clients/flashman-hotel.jpg",
      },
    ],
  },
  {
    title: "Other Business Clients",
    clients: [
      {
        name: "M/S Shaheen CNG",
        logo: "/clients/shaheen-cng.jpg",
      },
      {
        name: "M/S Zahid Rehman CNG",
        logo: "/clients/zahid-rehman-cng.jpg",
      },
      {
        name: "M/S Imran Medicos",
        logo: "/clients/imran-medicos.jpg",
      },
      {
        name: "M/S Lala G CNG",
        logo: "/clients/lala-g-cng.jpg",
      },
      {
        name: "M/S Al Haq CNG",
        logo: "/clients/al-haq-cng.jpg",
      },
      {
        name: "M/S Hussain & Sons CNG",
        logo: "/clients/hussain-sons-cng.jpg",
      },
      {
        name: "M/S Fuel Power",
        logo: "/clients/fuel-power.jpg",
      },
    ],
  },
];

export default function OurClients() {
  return (
    <section
      id="clients"
      className="overflow-hidden bg-[#0e192b] py-16 text-white sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4b36b]">
            Our Trusted Relationships
          </p>

          <h2 className="text-3xl font-bold text-[#d4b36b] sm:text-4xl">
            Our Clients
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#d4b36b]" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Serving clients across housing societies, government institutions,
            corporate organizations, and commercial businesses.
          </p>
        </div>

        {/* Client Categories */}
        <div className="space-y-12">
          {sectors.map((sector) => (
            <div key={sector.title}>
              <h3 className="mb-5 border-l-4 border-[#d4b36b] pl-4 text-lg font-semibold sm:text-xl">
                {sector.title}
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-5">
                {sector.clients.map((client) => (
                  <div
                    key={client.name}
                    title={client.name}
                    className="group flex h-32 w-[190px] items-center justify-center rounded-xl border border-white/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d4b36b] hover:shadow-lg hover:shadow-black/20 sm:w-[210px]"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={180}
                      height={90}
                      unoptimized
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-14 text-center">
          <div className="mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-[#d4b36b]/60 to-transparent" />

          <p className="mt-6 text-sm text-gray-400">
            Sulaman Law Associates — Professional Legal Services
          </p>
        </div>
      </div>
    </section>
  );
}