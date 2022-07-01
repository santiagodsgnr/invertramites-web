import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useRouter } from "next/router";
import app from "../firebase";
import { getAnalytics } from "firebase/analytics";

export default function QuienesSomos() {
  const path = useRouter().asPath;
  const [routePath] = useState(path);

  useEffect(() => {
    getAnalytics(app);
  }, []);

  return (
    <div className="transition-page">
      <Head>
        <title>Quienes Somos | Invertrámites Nacionales</title>
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
                ¿QUÍENES <br />
                <span className="title__span">SOMOS?</span>
              </h2>
              <p className="paragraph">
                <b>INVERTRÁMITES NACIONALES SAS</b> es una empresa especializada
                en brindar soluciones en temas de seguridad, con la finalidad de
                satisfacer a nuestros clientes (personas naturales y jurídicas)
                en sus diversas necesidades, inquietudes y soluciones en el
                fascinante mundo de la seguridad.
              </p>
            </div>
          </div>
        </div>
        <div className="quienes-somos__grid--column--image">
          <picture>
            <Image
              src="/assets/images/image-quienes-somos01.jpg"
              srcSet="/assets/images/image-quienes-somos01-mobile.jpg"
              width='100%'
              height='30%'
              alt="Quienes somos- Invertrámites Nacionales"
              layout="responsive"
              objectFit="cover"
              quality="100"
            />
          </picture>
        </div>
      </section>

      <section className="que-hacemos">
        <div className="container">
          <div className="quienes-somos__grid">
            <div className="quienes-somos__grid--column--text">
              <h2 className="title">
                ¿QUÉ <br />
                <span className="title__span">HACEMOS?</span>
              </h2>
              <div>
                <p className="paragraph">
                  Somos especialistas en gestiones y trámites legales de todo
                  tipo ante entidades públicas y privadas en temas relacionados
                  con adquisición, revalidación, cesión y descargos de armas de
                  fuego y traumáticas en atención al cumplimiento de los
                  diferentes decretos y eglamentaciones de ley (decreto 2535 de
                  1993, decreto 1417 del 2021).
                </p>
                <p className="paragraph">
                  Así mismo, nos encargamos del diligenciamiento y/o
                  autorizaciones para la consecución u obtención de documentos
                  ante entidades públicas y privadas previo el lleno de las
                  exigencias legales, de igual manera la adquisición,
                  implementación y puesta en marcha de: estudios de seguridad,
                  elementos tecnológicos, estudios de riesgo, capacitación a
                  personal en temas de seguridad, entre otros.
                </p>
                <p className="paragraph">
                  También nos dedicamos a la interventoría y asesoría en la
                  creación y/o compra y venta de empresas y departamentos de
                  seguridad.
                </p>
              </div>
            </div>
          </div>
          <div className="que-hacemos__grid">
            <Image
              src="/assets/images/image-quienes-somos02.jpg"
              width='100%'
              height='100%'
              layout="responsive"
              objectFit="cover"
              alt="Personal de seguridad"
              quality='100'
            />
            <Image
              src="/assets/images/image-quienes-somos03.jpg"
              width='100%'
              height='100%'
              layout="responsive"
              objectFit="cover"
              alt="Elementos tecnológicos"
              quality="100"
            />
          </div>
        </div>
      </section>

      <section className="presentaciones">
        <div className="container">
          <div className="presentaciones__grid">
            <div className="presentaciones__grid--column">
              <h2 className="title">REPRESENTACIONES</h2>
              <p className="paragraph">
                Representamos a personas naturales y/o jurídicas ante entidades
                públicas y privadas (Superintendencia de seguridad y vigilancia,
                así como ante del departamento control comercio de armas
                (DCCA)), previo el lleno de las exigencias legales.
              </p>
            </div>
            <div className="presentaciones__grid--column">
              <Image
                src="/assets/images/image-representaciones.png"
                alt="Representaciones"
                width='300%'
                height='300%'
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
