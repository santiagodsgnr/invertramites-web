import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import ModalForm from "../components/ModalForm";
import Menu from "../components/Menu";
import { useRouter } from "next/router";
import app from "../firebase";
import { getFirestore, addDoc, collection  } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export default function Contacto() {
  const path = useRouter().asPath;
  const [routePath] = useState(path);
  const [formData, setFormData] = useState();
  const [modalForm, setModalForm] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(getFirestore(app), "mensajesFormulario"), {
      ...formData,
    });
    e.target.reset();
    setModalForm(true)
  };

  useEffect(() => {
    getAnalytics(app);
  }, []);

  return (
    <div className="transition-page">
      <Head>
        <title>Contacto | Invertrámites Nacionales</title>
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

      {modalForm && <ModalForm setModalForm={setModalForm}/>}

      <Menu routePath={routePath} />

      <section className="quienes-somos">
        <div className="container">
          <h2 className="title">
            <span className="title__span">CONTACTO</span>
          </h2>
          <div className="quienes-somos__grid">
            <div className="quienes-somos__grid--column--text">
              <form className="contacto__form" onSubmit={handleSubmit}>
                <div className="contacto__form__box">
                  <label htmlFor="nombre">
                    <span>Nombre y apellido*</span>
                    <input
                      type="text"
                      name="nombreCompleto"
                      id="nombre"
                      required
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="contacto__form__box">
                  <label htmlFor="telefono">
                    <span>Teléfono*</span>
                    <input
                      type="tel"
                      name="telefono"
                      id="telefono"
                      required
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="contacto__form__box">
                  <label htmlFor="email">
                    <span>Correo electrónico*</span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="contacto__form__box">
                  <label htmlFor="ciudad">
                    <span>Ciudad*</span>
                    <input
                      type="text"
                      name="ciudad"
                      id="ciudad"
                      required
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
                <div className="contacto__form__box">
                  <label htmlFor="mensaje">
                    <span>Mensaje*</span>
                    <textarea
                      name="mensaje"
                      id="mensaje"
                      required
                      onChange={handleInputChange}
                    ></textarea>
                  </label>
                </div>
                <input
                  type="submit"
                  value="Enviar"
                  className="button button--principal"
                />
              </form>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.54442163897073!2d-74.09049815465951!3d4.645593445802798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bc7beed9b3d%3A0x5e016cdf68cc67d2!2sCl.%2044c%20%2352-73%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1647374103766!5m2!1ses!2sco"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
