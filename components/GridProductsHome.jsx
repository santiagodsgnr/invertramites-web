import React from "react";
import Link from "next/link";

import Products from "../Products.json";

export default function GridProductsHome() {
  return (
    <div className="nuestro-catalogo__grid">
      {Products &&
        Products.map((p, id) => {
          return (
            <Link href={`${p.categorie}/${p.slug}`}>
              <a href="" className="nuestro-catalogo__link" key={id}>
                <div className="nuestro-catalogo__grid--column">
                  <img src={p.image} alt={p.name} width="100%" />
                  <h3>{p.name}</h3>
                  <p>{p.subname}</p>
                </div>
              </a>
            </Link>
          );
        })}
    </div>
  );
}
