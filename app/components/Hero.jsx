"use client";

import React from "react";
import Image from "next/image";

import CheckBadgeIcon from '@iconify-react/glyphs-poly/check-badge';

const Hero = () => {
  return (
    <div className="container mx-auto flex justify-between mt-30">
      <div className="flex-4/12">
        <div className="mb-32">
          <div>
            <h1 className="text-5xl font-bold mb-8">
              Bygget til ultimativ præstation.
            </h1>
          </div>
          <div>
            <p className="opacity-50 mb-6">
              Skræddersyede high-end PC'er skabt til maksimal hastighed,
              overlegen grafik og kompromisløs gaming.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mb-6">
          <button className="bg-primary text-white py-2 px-8 rounded hover:bg-secondary transition-all duration-200 ease-in-out">
            <a href="#">Se udvalg</a>
          </button>
          <button className="border border-primary py-2 px-8 rounded hover:bg-primary transition-all duration-200 ease-in-out">
            <a href="#">TOP-PRIME</a>
          </button>
        </div>
        <div>
          <ul className="[&>li]:flex [&>li]:items-center [&>li]:space-x-2 [&>li]:mb-2">
            <li>
              <CheckBadgeIcon width="1.5em"/>
              <p>Leveringstid 2-3 hverdage!</p>
            </li>
            <li>
              <CheckBadgeIcon width="1.5em"/>
              <p>24 måneders garanti på alle computere</p>
            </li>
            <li>
              <CheckBadgeIcon width="1.5em"/>
              <p>14 dages fortrydelsesret & nem retur</p>
            </li>
            <li>
              <CheckBadgeIcon width="1.5em"/>
              <p>Gratis returlabel ved berettiget reklamation</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-4/12">
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={400}
          height={400}
        />
      </div>
      <div className="flex-4/12 flex flex-col gap-14">
        <div>
          <h2 className="text-3xl mb-4">Over 27 års erfaring</h2>
          <p className="opacity-50">
            Siden 1. januar 1995 har TOPDATA bygget og leveret præstationsstærke
            gaming-computere til passionerede gamere. Vores allerhøjeste
            prioritet er altid, at kvaliteten i hver enkelt maskine er helt i
            top, så du får en driftsikker og kraftfuld PC.
          </p>
        </div>
        <div>
          <h2 className="text-3xl mb-4">Direkte kontakt og hurtig hjælp</h2>
          <p className="opacity-50">
            Vi sætter en ære i at være tæt på vores kunder. Du er altid meget
            velkommen til at kontakte os med dine spørgsmål, kommentarer eller
            specielle ønsker til dit setup. Vi hjælper dig sikkert igennem hele
            forløbet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
