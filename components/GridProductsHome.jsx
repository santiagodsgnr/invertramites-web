import React from "react";
import Link from "next/link";
import Image from "next/image";

import ProductsHome from "../ProductsHome.json";

export default function GridProductsHome() {
  return (
    <div className="nuestro-catalogo__grid">
      {ProductsHome &&
        ProductsHome.map((p) => {
          return (
            <Link href={`${p.categorie}/${p.slug}`} key={p.categorie}>
              <a href="" className="nuestro-catalogo__link">
                <div className="nuestro-catalogo__grid--column">
                  <Image src={p.image} alt={p.name} width={1000} height={1000} />
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
