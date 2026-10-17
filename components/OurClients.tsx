
"use client";

import Image from "next/image";

const clients = [
  {
    name: "Jammu & Kashmir Cooperative Housing Society, Islamabad",
    shortName: "JKCHS",
    monogram: "JK",
  },
  {
    name: "Ministry of Interior Employees Cooperative Housing Society, Islamabad",
    shortName: "MIECHS",
    monogram: "MI",
  },
  {
    name: "Supreme Court Employees Housing Society",
    shortName: "SCEHS",
    monogram: "SC",
  },
  {
    name: "M/S Midway Petroleum, Islamabad",
    shortName: "Midway Petroleum",
    monogram: "MP",
  },
  {
    name: "Fair Deal Exchange Company, Islamabad",
    shortName: "Fair Deal Exchange",
    monogram: "FD",
  },
  {
    name: "National Highway Authority (NHA), Islamabad",
    shortName: "NHA",
    monogram: "NHA",
    logo: "https://www.google.com/s2/favicons?domain=nha.gov.pk&sz=128",
  },
  {
    name: "Federal Board of Intermediate and Secondary Education, Islamabad",
    shortName: "FBISE",
    monogram: "FBISE",
    website: "https://www.fbise.edu.pk/",
    logo: "https://www.google.com/s2/favicons?domain=fbise.edu.pk&sz=128",
  },
  {
    name: "Associated Hotels of Pakistan",
    shortName: "Associated Hotels",
    monogram: "AHP",
  },
  {
    name: "Flashman Hotel",
    shortName: "Flashman Hotel",
    monogram: "FH",
  },
  {
    name: "Oil and Gas Development Company Limited (OGDCL)",
    shortName: "OGDCL",
    monogram: "OGDCL",
    logo: "https://www.google.com/s2/favicons?domain=ogdcl.com&sz=128",
  },
  {
    name: "M/S Shaheen CNG",
    shortName: "Shaheen CNG",
    monogram: "SC",
  },
  {
    name: "M/S Zahid Rehman CNG",
    shortName: "Zahid Rehman CNG",
    monogram: "ZR",
  },
  {
    name: "M/S Imran Medicos",
    shortName: "Imran Medicos",
    monogram: "IM",
  },
  {
    name: "M/S Lala G CNG",
    shortName: "Lala G CNG",
    monogram: "LG",
  },
  {
    name: "M/S Al Haq CNG",
    shortName: "Al Haq CNG",
    monogram: "AH",
  },
  {
    name: "M/S Hussain & Sons CNG",
    shortName: "Hussain & Sons",
    monogram: "HS",
  },
  {
    name: "M/S Fuel Power",
    shortName: "Fuel Power",
    monogram: "FP",
  },
  {
    name: "Punjab Local Government Contractor",
    shortName: "Punjab Local Government",
    monogram: "PLG",
  },
];

export default function OurClients() {
  const repeatedClients = [
    ...clients,
    ...clients,
    ...clients,
    ...clients,
  ];

  return (
    <section
      id="clients"
      className="overflow-hidden bg-[#f8f5ef] py-16 sm:py-20"
    >
      <div className="mx-auto mb-10 max-w-7xl px-5 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a78348]">
          Trusted Relationships
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#101a24] sm:text-4xl">
          Our Clients
        </h2>

        <div className="mx-auto mt-5 h-px w-16 bg-[#c9a66b]" />

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#5c6268]">
          Organizations, businesses and institutions associated
          with Sulaman Law Associates.
        </p>
      </div>

      <div className="clients-marquee group flex overflow-hidden">
        <div className="clients-track flex w-max items-stretch gap-5 px-3">
          {repeatedClients.map((client, index) => {
            const card = (
              <div className="flex h-40 w-64 shrink-0 flex-col items-center justify-center border border-[#e5dfd4] bg-white px-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c9a66b] hover:shadow-md sm:w-72">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a66b]/50 bg-[#f8f5ef] p-2">
                  {client.logo ? (
                    <Image
                      src={client.logo}
                      alt={`${client.shortName} website icon`}
                      width={48}
                      height={48}
                      unoptimized
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <span className="font-serif text-sm font-bold tracking-wide text-[#a78348]">
                      {client.monogram}
                    </span>
                  )}
                </div>

                <span className="text-sm font-semibold leading-5 text-[#101a24]">
                  {client.name}
                </span>
              </div>
            );

            return client.website ? (
              <a
                key={`${client.shortName}-${index}`}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${client.name} website`}
                className="block"
              >
                {card}
              </a>
            ) : (
              <div key={`${client.shortName}-${index}`}>
                {card}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .clients-track {
          animation: clients-scroll 100s linear infinite;
        }

        .clients-marquee:hover .clients-track {
          animation-play-state: paused;
        }

        @keyframes clients-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-25%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clients-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
