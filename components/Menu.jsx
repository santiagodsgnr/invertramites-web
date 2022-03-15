import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import Router from "../Router.json";

export default function Menu({ routePath }) {
  const router = useRouter();
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="header__top--lp">
          <div className="header__top--lp__logo">
            <Link href="/">
              <a>
                <Image
                  src="/assets/icons/logo-invertramites-black.svg"
                  alt="Invertrámites Nacionales SAS"
                  className="header__top--lp__logo__svg"
                  width={100}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className="header__top--lp__navigation">
            <div
              className={`header__top--lp__navigation__mobile ${
                isMenu ? "active" : ""
              }`}
            >
              <span
                className="header__top--lp__navigation__mobile__bars"
                onClick={() => setIsMenu(!isMenu)}
              ></span>
            </div>
            {isMenu && (
              <nav className="header__top--lp__navigation__mobile__nav">
                <div className="header__top--lp__navigation__mobile__nav__overlay">
                  <ul className="header__top--lp__navigation__mobile__nav__overlay__ul">
                    {Router &&
                      Router.map((route) => {
                        return (
                          <div key={route.path}>
                            <Link href={route.path} >
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
          <div className="header__top--lp__desktop">
            {Router &&
              Router.map((route) => {
                return (
                  <div key={route.path}>
                    <Link href={route.path} >
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
      </div>
    </div>
  );
}
