import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import GridProductsHome from "../components/GridProductsHome";
import { useRouter } from "next/router";
import app from "../firebase";
import { getAnalytics } from "firebase/analytics";

import Router from "../Router.json";

export default function Home() {
  const [isMenu, setIsMenu] = useState(false);
  const path = useRouter().asPath;
  const [routePath] = useState(path);

  useEffect(() => {
    getAnalytics(app);
  }, []);

  return (
    <div className="transition-page">
      <Head>
        <title>Invertrámites Nacionales | Bienvenidos</title>
        <meta
          name="description"
          content="Somos especialistas en gestiones y trámites legales de todo tipo ante entidades públicas y privadas en temas relacionados con adquisición, revalidación, cesión y descargos de armas de fuego y traumáticas en atención al cumplimiento de los diferentes decretos y reglamentaciones de ley (decreto 2535 de 1993, decreto 1417 del 2021)."
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="distribution" content="Global" />
        <meta
          name="copyright"
          content="Copyright 2020, Desarrollado por Santiago Ardila"
        />
        <meta name="author" content="Santiago Ardila" />
        <meta name="language" content="Spanish" />
        <meta itemProp="name" content="Santiago Ardila | Frontend Developer" />
        <meta
          itemProp="description"
          content="Somos especialistas en gestiones y trámites legales de todo tipo ante entidades públicas y privadas en temas relacionados con adquisición, revalidación, cesión y descargos de armas de fuego y traumáticas en atención al cumplimiento de los diferentes decretos y reglamentaciones de ley (decreto 2535 de 1993, decreto 1417 del 2021)."
        />
        <meta itemProp="image" content="" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.invertramitesnacionales.com"
        />
        <meta property="og:title" content="Invertrámites Nacionales" />
        <meta
          property="og:description"
          content="Somos especialistas en gestiones y trámites legales de todo tipo ante entidades públicas y privadas en temas relacionados con adquisición, revalidación, cesión y descargos de armas de fuego y traumáticas en atención al cumplimiento de los diferentes decretos y reglamentaciones de ley (decreto 2535 de 1993, decreto 1417 del 2021)."
        />
        <meta property="og:image" content="/assets/images/og.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.invertramitesnacionales.com"
        />
        <meta property="twitter:title" content="Invertrámites Nacionales" />
        <meta
          property="twitter:description"
          content="Somos especialistas en gestiones y trámites legales de todo tipo ante entidades públicas y privadas en temas relacionados con adquisición, revalidación, cesión y descargos de armas de fuego y traumáticas en atención al cumplimiento de los diferentes decretos y reglamentaciones de ley (decreto 2535 de 1993, decreto 1417 del 2021)."
        />
        <meta property="twitter:image" content="/assets/images/og.jpg" />
        <link rel="canonical" href="https://www.invertramitesnacionales.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header" id="home">
        <div className="header__top">
          <div className="header__top__logo">
            <Link href="/">
              <a>
                <Image
                  src="/assets/icons/logo-invertramites-white.svg"
                  alt="Invertrámites Nacionales SAS"
                  className="header__top__logo__svg"
                  width={100}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className="header__top__navigation">
            <div
              className={`header__top__navigation__mobile ${
                isMenu ? "active" : ""
              }`}
            >
              <span
                className="header__top__navigation__mobile__bars"
                onClick={() => setIsMenu(!isMenu)}
              ></span>
            </div>
            {isMenu && (
              <nav className="header__top__navigation__mobile__nav">
                <div className="header__top__navigation__mobile__nav__overlay">
                  <ul className="header__top__navigation__mobile__nav__overlay__ul">
                    {Router &&
                      Router.map((route) => {
                        return (
                          <div key={route.path}>
                            <Link href={route.path}>
                              <a
                                className={
                                  route.path == routePath ? "link--active" : ""
                                }
                              >
                                {route.name}
                              </a>
                            </Link>
                          </div>
                        );
                      })}
                  </ul>
                </div>
              </nav>
            )}
          </div>
          <div className="header__top__desktop">
            {Router &&
              Router.map((route) => {
                return (
                  <div key={route.path}>
                    <Link href={route.path}>
                      <a
                        className={
                          route.path == routePath ? "link--active" : ""
                        }
                      >
                        {route.name}
                      </a>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container">
          <div className="header__main-text">
            <div>
              <h1 className="header__main-text__h1">
                Especialistas en gestiones y trámites legales
              </h1>
              <p className="header__main-text__p">
                en temas relacionados con adquisición, revalidación, cesión y
                descargos de armas de fuego y traumática.
              </p>
              <div className="header__main-text__buttons">
                <Link href="/catalogo">
                  <a className="button button--principal">VER CATÁLOGO</a>
                </Link>
                <Link href="/contacto">
                  <a className="button button--ghost--header">CONTACTAR</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="que-hacemos-home">
        <div className="">
          <div className="que-hacemos-home__grid">
            <div className="que-hacemos-home__grid--column">
              <div className="que-hacemos-home__grid--column--text">
                <div className="que-hacemos-home__container">
                  <h2 className="title">
                    ¿QUÉ <span className="title__span">HACEMOS?</span>
                  </h2>
                  <p className="paragraph">
                    Somos especialistas en gestiones y trámites legales de todo
                    tipo ante entidades públicas y privadas en temas
                    relacionados con adquisición, revalidación, cesión y
                    descargos de armas de fuego y traumáticas en atención al
                    cumplimiento de los diferentes decretos y reglamentaciones
                    de ley (decreto 2535 de 1993, decreto 1417 del 2021).
                  </p>
                  <Link href="/quienes-somos">
                    <a className="button button--ghost">VER MÁS</a>
                  </Link>
                </div>
              </div>
              <div className="que-hacemos-home__grid--column--image--1"></div>
            </div>
            <div className="que-hacemos-home__grid--column">
              <div className="que-hacemos-home__grid--column--text order">
                <div className="que-hacemos-home__container">
                  <h2 className="title">
                    OFRECEMOS <span className="title__span">SERVICIOS DE</span>
                  </h2>
                  <p className="paragraph">
                    - Selección de personal idóneo en seguridad. - Polígono en
                    diferentes regiones del país, y servicio de armería. <br />-
                    Entrenamiento y capacitación de personal en seguridad.{" "}
                    <br />
                    - Blindaje de vehículos e inmuebles, cuartos de pánico y
                    alarmas. <br />
                    - Exámenes de poligrafía. <br />
                  </p>
                  <Link href="/servicios">
                    <a className="button button--ghost">VER MÁS</a>
                  </Link>
                </div>
              </div>
              <div className="que-hacemos-home__grid--column--image--2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="nuestro-catalogo">
        <div className="container">
          <h2 className="title">
            NUESTRO <span className="title__span">CATÁLOGO</span>
          </h2>
          <GridProductsHome />
          <Link href="/catalogo">
            <a className="button button--principal">VER CATÁLOGO</a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
