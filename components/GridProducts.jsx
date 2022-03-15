import React from "react";
import Link from "next/link";
import Image from "next/image";

import Products from "../Products.json";

export default function GridProducts({ categorie }) {
  return (
    <div className="nuestro-catalogo__grid">
      {Products &&
        Products.map((p) => {
          return (
            <Link href={`${p.categorie}/${p.slug}`} key={p.categorie}>
              <a href="" className="nuestro-catalogo__link">
                <div className="nuestro-catalogo__grid--column">
                  <Image src={p.image} alt={p.name} width={300} height={300} />
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
