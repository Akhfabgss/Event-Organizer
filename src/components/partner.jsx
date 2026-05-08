"use client";

import Image from "next/image";

export default function partner() {
  const logos = [
    { src: "/assets/img/mitra/Djarum_Putih.png", alt: "Djarum" },
    { src: "/assets/img/mitra/Gudang_Garam.png", alt: "Gudang Garam" },
    { src: "/assets/img/mitra/Lotte_Mart.png", alt: "Lotte Mart" },
    { src: "/assets/img/mitra/Rcraft.webp", alt: "RCraft" },
    { src: "/assets/img/mitra/Metland.png", alt: "Metland" },
    { src: "/assets/img/mitra/Surya_Madistrindo.png", alt: "Surya Madistrindo" },
    { src: "/assets/img/mitra/Poda.png", alt: "Poda" },
    { src: "/assets/img/Sekneg.png", alt: "Google" },
    { src: "/assets/img/google.jpg", alt: "SV" },
    { src: "/assets/img/ipb.png", alt: "Telkom University" },
    { src: "/assets/img/kementan.png", alt: "Telkom University" },
    { src: "/assets/img/Sekneg.png", alt: "Google" },
  ];

  return (
    <section id="partner" className="partner-wrapper main-reset sr-partner w-full bg-black py-20 px-6 my-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 sr-partner-logos">

        {/* TEXT */}
        <div>
          <h2 className="text-white text-2xl font-bold leading-snug text-start md:text-center">
            Terpercaya oleh{" "}
            <span className="text-orange-400">customer <br /></span> dan{" "}
            <span className="text-orange-400">Partner</span> Kami
          </h2>
        </div>


        {/* LOGO GRID */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-x-15 gap-y-12 place-items-center">
          {logos.map((item, i) => (
            <div key={i} className="w-[130px] opacity-80 hover:opacity-100 transition">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={200}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
