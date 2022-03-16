import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useRouter } from "next/router";

export default function Servicios() {
  const path = useRouter().asPath;
  const [routePath] = useState(path);

  return (
    <div className="transition-page">
      <Head>
        <title>Servicios | Invertrámites Nacionales</title>
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
                <span className="title__span">SERVICIOS</span>
              </h2>
              <p className="paragraph">
                - Selección de personal idóneo en seguridad. <br />
                - Polígono en diferentes regiones del país, y servicio de
                armería. <br />
                - Entrenamiento y capacitación de personal en seguridad. <br />
                - Blindaje de vehículos e inmuebles, cuartos de pánico y
                alarmas. <br />
                - Exámenes de poligrafía. <br />
              </p>
            </div>
          </div>
        </div>
        <div className="quienes-somos__grid--column--image">
          <picture>
            <Image
              src="/assets/images/image-servicios.jpg"
              srcSet="/assets/images/image-servicios-mobile.jpg"
              width='100%'
              height='30%'
              layout="responsive"
              alt="Servicios - Invertrámites Nacionales"
            />
          </picture>
        </div>
      </section>

      <Footer />
    </div>
  );
}
