"use client";

import Image from "next/image";
import 'remixicon/fonts/remixicon.css';
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {

  return (
    <div>
      <Script src="js/scrollreveal.min.js" />
      <Script src="/js/myscript.js" strategy="afterInteractive" />
      {/* ==================== HEADER ==================== */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Event Organizer
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
                <a href="#popular" className="nav__link">
                  Popular
                </a>
              </li>

              <li className="nav__item">
                <a href="#explore" className="nav__link">
                  Explore
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
            src="/assets/img/home.jpg"
            alt="home img"
            className="home__bg"
            width={1600}
            height={900}
          />

          <div className="home__shadow"></div>

          <div className="home__container container grid">
            <div className="home__data">
              <h3 className="home__subtitle">Welcome To Event Organizer</h3>

              <h1 className="home__title">
                Explore
                <br />
                The World
              </h1>

              <p className="home__description">
                Live the trips exploring the world, discover paradises, islands,
                mountains and much more, get your trip now.
              </p>

              <a href="#" className="button">
                Start Your Journey <i className="ri-arrow-right-line"></i>
              </a>

              <div className="home__cards grid">
                {/* Card item */}
                {["Internal Event", "Marketing Event", "Support Event", "Virtual Event"].map(
                  (item, index) => (
                    <article className="home__card" key={index}>
                      <Image
                        src={`/assets/img/${item}.avif`}
                        alt="home card"
                        className="home__card-img"
                        width={400}
                        height={250}
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
                About Event Organizer
              </h2>

              <p className="about__description">
                All the trips around the world are a great pleasure and happiness
                for anyone, enjoy the sights when you travel the world.
              </p>

              <a href="#" className="button btn-about">
                Explore Our Event <i className="ri-arrow-right-line"></i>
              </a>
            </div>

            <div className="about__image">
              <Image
                src="/assets/img/about.avif"
                alt="about image"
                className="about__img"
                width={600}
                height={400}
              />
              <div className="about__shadow"></div>
            </div>
          </div>
        </section>

        {/* ==================== POPULAR ==================== */}
        <section className="popular section" id="popular">
          <h2 className="section__title">
            Enjoy The Beauty
            <br />
            Of The World
          </h2>

          <div className="popular__container container grid">
            {[
              { img: "popular1.avif", name: "Marketing Event Safari", loc: "Jakarta" },
              { img: "popular2.avif", name: "Program Launching 1000 Startup", loc: "Bogor" },
              { img: "popular3.avif", name: "Awarding Dynatech", loc: "Jakarta" },
            ].map((item, index) => (
              <article className="popular__card" key={index}>
                <div className="popular__image">
                  <Image
                    src={`/assets/img/${item.img}`}
                    alt="popular image"
                    className="popular__img"
                    width={400}
                    height={260}
                  />
                  <div className="popular__shadow"></div>
                </div>

                <h2 className="popular__title">{item.name}</h2>

                <div className="popular__location">
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
                src="/assets/img/explore.jpg"
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
                Explore The
                <br />
                Best Paradises
              </h2>

              <p className="explore__description">
                Exploring paradises such as islands and valleys when traveling
                the world is one of the greatest experiences.
              </p>
            </div>

            <div className="explore__user">
              <Image
                src="/assets/img/profil.png"
                alt="profile"
                className="explore__perfil"
                width={80}
                height={80}
              />
              <span className="explore__name">Hilal Bintang</span>
            </div>
          </div>
        </section>

        {/* ==================== JOIN ==================== */}
        <section className="join section">
          <div className="join__container container grid">
            <div className="join__image">
              <Image
                src="/assets/img/join.jpg"
                alt="join image"
                className="join__img"
                width={700}
                height={500}
              />
              <div className="join__shadow"></div>
            </div>

            <div className="join__data">
              <h2 className="section__title">
                Your Journey
                <br />
                Starts Here
              </h2>

              <p className="join__description">
                Get up to date with the latest travel and information from us.
              </p>

              <form className="join__form">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="join__input"
                />
                <button className="join__button button">
                  Subscribe Our Newsletter <i className="ri-arrow-right-line"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer__container container grid">
          <div className="footer__content grid">
            <div>
              <a href="#" className="footer__logo">
                Event Organizer
              </a>

              <p className="footer__description">
                Event with us and explore
                <br />
                the world without limits.
              </p>
            </div>

            <div className="footer__data grid">
              {/* Kolom footer */}
              {[
                {
                  title: "About",
                  links: ["About Us", "Features", "News & Blog"],
                },
                {
                  title: "Company",
                  links: ["FAQs", "History", "Testimonials"],
                },
                {
                  title: "Contact",
                  links: ["Call Center", "Support Center", "Contact Us"],
                },
                {
                  title: "Support",
                  links: ["Privacy Policy", "Terms & Services", "Payments"],
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="footer__title">{item.title}</h3>
                  <ul className="footer__links">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="footer__link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="footer__group">
            <div className="footer__social">
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-whatsapp-line"></i>
              </a>
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-facebook-circle-line"></i>
              </a>
            </div>

            <span className="footer__copy">
              © Copyright Akhfa Bagas. All rights reserved
            </span>
          </div>
        </div>
      </footer>

      {/* ==================== SCROLL UP ==================== */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>

      {/* ==================== JAVASCRIPT FILES ==================== */}
      <Script src="/assets/js/scrollreveal.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </div>
  );
}
