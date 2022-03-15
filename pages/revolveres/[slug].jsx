import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Menu from "../../components/Menu";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import Products from "../../Products.json";
import Footer from "../../components/Footer";

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="transition-page">
      <Head>
        {Products &&
          Products.filter((p) => p.slug === "/" + slug).map((p) => {
            return (
              <title key={p.name}>
                {p.categorie} / {p.name}
              </title>
            );
          })}
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

      <Menu />

      <section className="catalogo-slug">
        <div className="container">
          {Products &&
            Products.filter((p) => p.slug === "/" + slug).map((p, idx) => {
              return (
                <div key={idx}>
                  <div className="catalogo-slug__breadcrumb">
                    <span>
                      <Link href="/">
                        <a className="catalogo-slug__breadcrumb__link">
                          INICIO
                        </a>
                      </Link>{" "}
                      /{" "}
                      <Link href="/catalogo">
                        <a className="catalogo-slug__breadcrumb__link">
                          {p.categorie}
                        </a>
                      </Link>{" "}
                      / <b>{p.name}</b>
                    </span>
                  </div>
                  <div className="catalogo-slug__grid-product">
                    <div className="catalogo-slug__grid-product__column--image">
                      <Zoom overlayBgColorEnd={"rgb(255, 255, 255, 100)"}>
                        <Image
                          src={p.image}
                          alt={p.name}
                          width={1000}
                          height={1000}
                        />
                      </Zoom>
                    </div>
                    <div className="catalogo-slug__grid-product__column--description">
                      <div>
                        <h2 className="subtitle">{p.name}</h2>
                        <p className="paragraph-slug">{p.subname}</p>
                      </div>
                      <div>
                        <p className="paragraph">{p.description}</p>
                        <a href={p.link} className="button button--principal">
                          QUIERO COTIZAR
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <section className="features__mobile">
        <div className="container">
          {Products &&
            Products.filter((p) => p.slug === "/" + slug).map((p, id) => {
              return (
                <div key={id}>
                  {p.features.map((feature, id) => {
                    return (
                      <Accordion allowZeroExpanded key={id}>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              {feature.name}
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            {feature.content.map((f) => {
                              return (
                                <div key={f.name}>
                                  <div className="features__mobile--grid">
                                    <div>
                                      <p>
                                        <b>{f.name}</b>
                                      </p>
                                    </div>
                                    <div>
                                      <p>{f.description}</p>
                                    </div>
                                  </div>
                                  {f.caracteristica && (
                                    <div className="features__mobile--grid--1">
                                      <div>
                                        <p>{f.caracteristica}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
