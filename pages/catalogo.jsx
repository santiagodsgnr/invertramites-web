import React, { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useRouter } from "next/router";

import GridProducts from "../components/GridProducts";
import Categories from "../Categories.json";

export default function Catalogo() {
  const path = useRouter().asPath;
  const [routePath] = useState(path);

  const [categorie, setCategorie] = useState("pistolas");
  return (
    <div className="transition-page">
      <Head>
        <title>Catálogo | Invertrámites Nacionales</title>
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

      <Menu routePath={routePath} />

      <section className="quienes-somos">
        <div className="container">
          <div className="quienes-somos__grid">
            <div className="quienes-somos__grid--column--text">
              <h2 className="title">
                <span className="title">
                  NUESTRO <span className="title__span">CATÁLOGO</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div>
            <div className="categories">
              <div className="categories__nav">
                {Categories &&
                  Categories.map((c, id) => {
                    return (
                      <div
                        key={id}
                        className={`categories__nav--tab ${
                          categorie === c.slug ? "categorie--active" : ""
                        }`}
                        onClick={() => {
                          setCategorie(c.slug);
                        }}
                      >
                        <p>{c.categorie}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <GridProducts categorie={categorie}  />
        </div>
      </section>

      <Footer />
    </div>
  );
}
