import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";

import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Footer() {

  const [dataSubscribe, setDataSubscribe] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataSubscribe({ ...dataSubscribe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "datosSubscripciones"), {
      ...dataSubscribe,
    });
    e.target.reset();
  };


  return (
    <div>
      <footer className="footer">
        <div className="footer__grid">
          <div className="footer__grid--column">
            <h3 className="footer__title">Dirección</h3>
            <div className="footer__text">
              <p className="footer__paragraph">
                Calle 44C Nro. 52-73 apartamento 201
              </p>
              <p className="footer__paragraph">Barrio la Esmeralda</p>
              <p className="footer__paragraph">Bogotá D.C.</p>
            </div>
            <Link href="/">
              <a>
                <Image
                  src="/assets/icons/logo-invertramites-white.svg"
                  alt="Invertrámites Nacionales SAS"
                  className="footer__logo--desktop"
                  width={100}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className="footer__grid--column">
            <div className="footer__info-user">
              <h3 className="footer__title">Dubis Esther Barrios</h3>
              <div className="footer__info-wrapper">
                <Image
                  src="/assets/icons/icon-telephone.svg"
                  alt="Celular"
                  className="footer__info-user__icon"
                  width={15}
                  height={15}
                />
                <a href="tel:3175917957">
                  <p className="footer__paragraph">3175917957</p>
                </a>
              </div>
              <div className="footer__info-wrapper">
                <Image
                  src="/assets/icons/icon-mail.svg"
                  alt="Email"
                  className="footer__info-user__icon"
                  width={15}
                  height={15}
                />
                <a href="mailto:dubis@invertramitesnacionales.com">
                  <p className="footer__paragraph">
                    dubis@invertramitesnacionales.com
                  </p>
                </a>
              </div>
            </div>
            <div className="footer__info-user">
              <h3 className="footer__title">Nestor Alexander Duque</h3>
              <div className="footer__info-wrapper">
                <Image
                  src="/assets/icons/icon-telephone.svg"
                  alt="Celular"
                  className="footer__info-user__icon"
                  width={15}
                  height={15}
                />
                <a href="tel:3136853152">
                  <p className="footer__paragraph">3136853152</p>
                </a>
              </div>
              <div className="footer__info-wrapper">
                <Image
                  src="/assets/icons/icon-mail.svg"
                  alt="Email"
                  className="footer__info-user__icon"
                  width={15}
                  height={15}
                />
                <a href="mailto:nestor@invertramitesnacionales.com">
                  <p className="footer__paragraph">
                    nestor@invertramitesnacionales.com
                  </p>
                </a>
              </div>
            </div>
            <div className="footer__info-user">
              <h3 className="footer__title">Juan David Ramírez</h3>
              <div className="footer__info-wrapper">
                <Image
                  src="/assets/icons/icon-telephone.svg"
                  alt="Celular"
                  className="footer__info-user__icon"
                  width={15}
                  height={15}
                />
                <a href="tel:3118162605">
                  <p className="footer__paragraph">3118162605</p>
                </a>
              </div>
              <div className="footer__info-wrapper">
              <Image
                  src="/assets/icons/icon-mail.svg"
                  alt="Email"
                  className="footer__info-user__icon"
                  width={15}
                  height={15}
                />
                <a href="mailto:juandavid@invertramitesnacionales.com">
                  <p className="footer__paragraph">
                    jdavid@invertramitesnacionales.com
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="footer__grid--column">
            <div className="footer__links">
              <Link href="/">
                <a className="footer__link">Inicio</a>
              </Link>
              <Link href="/quienes-somos">
                <a className="footer__link">Quienes Somos</a>
              </Link>
              <Link href="/servicios">
                <a className="footer__link">Servicios</a>
              </Link>
              <Link href="/catalogo">
                <a className="footer__link">Catálogo</a>
              </Link>
              <Link href="/contacto">
                <a className="footer__link">Contacto</a>
              </Link>
            </div>
            <div className="footer__social-network">
              <h3 className="footer__title">Síguenos</h3>
              <div className="footer__social-network__icons">
                <a href="">
                  <Image
                    src="/assets/icons/icon-facebook.svg"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="">
                  <Image
                    src="/assets/icons/icon-instagram.svg"
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="">
                  <Image
                    src="/assets/icons/icon-twitter.svg"
                    alt="Twitter"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer__grid--column">
            <h3 className="footer__title">Suscríbete a nuestro boletín</h3>
            <form className="footer__form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Escribe tu E-mail"
                className="footer__form__input--email"
                onChange={handleInputChange}
              />
              <div className="footer__form__checkbox">
                <input
                  type="checkbox"
                  name=""
                  defaultChecked="true"
                  id=""
                  className="footer__form__input--checkbox"
                />
                <span className="footer__form__span">
                  Autorizo el tratamiento de datos personales
                </span>
              </div>
              <button
                type="submit"
                className="footer__form__input--submit button button--principal"
              >
                Suscribirme
              </button>
            </form>
            <div className="footer__logo--mobile">
              <Image
                src="/assets/icons/logo-invertramites-white.svg"
                alt="Invertrámites Nacionales SAS"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright">
        <span>
          Copyright © 2022 © Invertrámites Nacionales S.A.S <br /> Desarrollado por:{" "}
          <a
            href="https:/www.santiagoardila.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor__santiago-ardila"
          >
            Santiago Ardila
          </a>{" "}
        </span>
      </div>
    </div>
  );
}
