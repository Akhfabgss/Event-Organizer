"use client";

import Image from "next/image";
import 'remixicon/fonts/remixicon.css';
import Script from "next/script";
import { useEffect, useState } from "react";

const IMAGE_EXTS = ["jpeg", "jpg", "JPG", "png", "avif", "webp"];
import Partner from "../components/partner";

export default function Home() {
  function ImageWithFallback({ baseName, alt, className, width, height }: { baseName: string; alt?: string; className?: string; width: number; height: number }) {
    const [foundSrc, setFoundSrc] = useState<string | null>(null);
    const placeholder = "/assets/img/popular1.avif";

    useEffect(() => {
      let cancelled = false;

      const tryLoad = (i: number) => {
        if (cancelled) return;
        if (i >= IMAGE_EXTS.length) {
          setFoundSrc(placeholder);
          return;
        }

        const url = `/assets/img/${baseName}.${IMAGE_EXTS[i]}`;
        const probe = new window.Image();
        probe.onload = () => {
          if (!cancelled) setFoundSrc(url);
        };
        probe.onerror = () => {
          tryLoad(i + 1);
        };
        probe.src = url;
      };

      tryLoad(0);

      return () => {
        cancelled = true;
      };
    }, [baseName]);

    const imgStyle = { width: "100%", height: "140px", objectFit: "cover" } as React.CSSProperties;

    if (!foundSrc) {
      // while probing, render a small placeholder image (must exist)
      return (
        <Image
          src={placeholder}
          alt={alt || baseName}
          className={className}
          width={width}
          height={height}
          style={imgStyle}
        />
      );
    }

    return (
      <Image
        src={foundSrc}
        alt={alt || baseName}
        className={className}
        width={width}
        height={height}
        style={imgStyle}
      />
    );
  }

  return (
    <div>

      {/* ==================== JAVASCRIPT FILES ==================== */}
      <Script src="/js/scrollreveal.min.js" strategy="afterInteractive" />
      <Script src="/js/myscript.js" strategy="afterInteractive" />

      {/* ==================== HEADER ==================== */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <Image src="/assets/img/ojk.png" alt="logo" width={60} height={60} />
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About
                </a>
              </li>

              <li className="nav__item">
                <a href="#gallery" className="nav__link">
                  Gallery
                </a>
              </li>

              <li className="nav__item">
                <a href="#explore" className="nav__link">
                  Explore
                </a>
              </li>

              <li className="nav__item">
                <a href="#partner" className="nav__link">
                  Partner
                </a>
              </li>
            </ul>

            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          {/* Toggle button */}
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-fill"></i>
          </div>
        </nav>
      </header>

      {/* ==================== MAIN ==================== */}
      <main className="main">

        {/* ==================== HOME ==================== */}
        <section className="home section" id="home">
          <Image
            src="/assets/img/Background-Nav.jpeg"
            alt="home img"
            className="home__bg"
            width={1600}
            height={900}
          />

          <div className="home__shadow"></div>

          <div className="home__container container grid">
            <div className="home__data">
              <h3 className="home__subtitle">Selamat Datang di PT Omega Jala Kusara</h3>

              <h1 className="home__title">
                Rencanakan Event
                <br />
                Bersama Kami
              </h1>

              <p className="home__description">
                Kreativitas akan muncul ketika hal-hal besar dilakukan oleh serangkaian hal kecil yang disatukan.
              </p>

              <div className="home__cards grid">
                {/* Card item */}
                {["Event Organizer", "Event Production", "Maintenance Unit", "Publication and Placement", "Agency"].map(
                  (item, index) => (
                    <article className="home__card" key={index}>
                      <ImageWithFallback
                        baseName={item}
                        alt="home card"
                        className="home__card-img"
                        width={400}
                        height={10}
                      />
                      <h3 className="home__card-title">{item}</h3>
                      <div className="home__card-shadow"></div>
                    </article>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section className="about section" id="about">
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title">
                Learn More
                <br />
                About Omega Jala Kusara
              </h2>

              <p className="about__description">

                <span>

                  PT Omega Jala Kusara adalah perusahaan kreatif dan layanan terpadu yang bergerak di bidang advertising, event organizer, manajemen talent, serta mekanikal & elektrikal. Berdiri dengan semangat inovasi, kami hadir untuk memberikan solusi profesional yang menghubungkan kreativitas, teknologi, dan eksekusi tepat waktu.
                </span>

                <span >
                  Didukung oleh tim berpengalaman di industri periklanan dan manajemen acara, Omega Jala Kusara berkomitmen untuk menghadirkan layanan yang efisien, berkualitas tinggi, dan berorientasi pada kebutuhan klien. Kami percaya bahwa setiap proyek memiliki cerita dan tujuan, sehingga setiap layanan kami rancang secara personal dan strategis.
                </span>
                <span>

                  Dengan basis operasional di Bogor dan cakupan layanan nasional, Omega Jala Kusara terus berkembang menjadi mitra terpercaya bagi berbagai perusahaan, brand, dan organisasi. Fokus kami adalah memberikan hasil terbaik, pengalaman kerja yang profesional, serta membangun hubungan jangka panjang yang saling menguntungkan.
                </span>
              </p>

              {/* <a href="#" className="button btn-about">
                Explore Our Event <i className="ri-arrow-right-line"></i>
              </a> */}
            </div>

            <div className="about__image">
              <Image
                src="/assets/img/ojk.png"
                alt="about image"
                className="about__img"
                width={600}
                height={400}
              />
              <div className="about__shadow"></div>
            </div>
          </div>
        </section>

        {/* ==================== GALLERY ==================== */}
        <section className="gallery section" id="gallery">
          <h2 className="section__title">
            Our Gallery
          </h2>

          <div className="gallery__container container grid">
            {[
              { img: "Reuni Metalurgi.JPG", name: "Metalurgi Festival 2025", loc: "Universitas Indonesia" },
              { img: "Boot.jpeg", name: "Pemasangan Boot", loc: "Bogor" },
              { img: "MettalAttackPanggung.jpg", name: "Metal Attack Festival 2025", loc: "Jakarta" },
              { img: "Metland.jpg", name: "Acara Metland Cibitung", loc: "Cibitung" },
              { img: "Rapsody.jpg", name: "Konser Rapsody", loc: "Jakarta" },
              { img: "popular6.jpg", name: "Bogor Festival", loc: "Bogor" },
            ].map((item, index) => (
              <article className="gallery__card" key={index}>
                <div className="gallery__image">
                  <Image
                    src={`/assets/img/${item.img}`}
                    alt="gallery image"
                    className="gallery__img"
                    width={400}
                    height={260}
                  />
                  <div className="gallery__shadow"></div>
                </div>

                <h2 className="gallery__title">{item.name}</h2>

                <div className="gallery__location">
                  <i className="ri-map-pin-line"></i>
                  <span>{item.loc}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==================== EXPLORE ==================== */}
        <section className="explore section" id="explore">
          <div className="explore__container">
            <div className="explore__image">
              <Image
                src="/assets/img/Metalattack.jpg"
                alt="explore image"
                className="explore__img"
                width={1400}
                height={800}
              />
              <div className="explore__shadow"></div>
            </div>
          </div>

          <div className="explore__content container grid">
            <div className="explore__data">
              <h2 className="section__title">
                Plan Your Event
                <br />
                With Us
              </h2>

              <p className="explore__description">
                Menghidupkan imajinasi menjadi perayaan yang ikonik dan penuh makna. Mari rencanakan momen spesial Anda bersama kami.
              </p>
            </div>

          </div>
        </section>

        {/* ==================== Partner ==================== */}
        <section id="partner">
          <Partner />
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer__container container grid">
          {/* Company Info Section */}
          <div className="footer__content grid">
            <div className="footer__about">
              <h3 className="footer__company-name">PT Omega Jala Kusara</h3>

              <p className="footer__description">
                Kami adalah perusahaan kreatif dan layanan terpadu di bidang advertising, event organizer, manajemen talent, serta mekanikal & elektrikal. Berkomitmen memberikan solusi profesional dan berkualitas tinggi untuk setiap kebutuhan klien Anda.
              </p>
            </div>

            {/* Contact Section */}
            <div className="footer__contact">
              <h4 className="footer__contact-title">Hubungi Kami</h4>

              <div className="footer__contact-list">
                <a href="mailto:info@ojk.com" className="footer__contact-item">
                  <i className="ri-mail-line"></i>
                  <span>info@ojk.com</span>
                </a>

                <a href="https://wa.me/62" target="_blank" className="footer__contact-item">
                  <i className="ri-whatsapp-line"></i>
                  <span>+62 (WhatsApp)</span>
                </a>

                <a href="https://instagram.com" target="_blank" className="footer__contact-item">
                  <i className="ri-instagram-line"></i>
                  <span>@omega.jala.kusara</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="footer__group">
            <span className="footer__copy">
              © Copyright PT Omega Jala Kusara. All rights reserved
            </span>
          </div>
        </div>
      </footer >

      {/* ==================== SCROLL UP ==================== */}
      <a href="#" className="scrollup" id="scroll-up" >
        <i className="ri-arrow-up-line"></i>
      </a>
    </div >
  );
}
