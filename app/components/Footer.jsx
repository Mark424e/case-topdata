import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary/5">
        <div className="container mx-auto">
          <div className="py-30 flex justify-between">
            <div className="flex-6/12">
              <a
                className="font-logo tracking-widest uppercase text-5xl"
                href="#"
              >
                <strong>Top</strong>data
              </a>
              <div className="mt-12 opacity-50">
                <ul className="space-y-2">
                  <li>SØBORG HOVEDGADE 64</li>
                  <li>2860 SØBORG, KØBENHAVN</li>
                  <li>Telefonnr.: 65976090 (hverdage kl. 15-18 TLF)</li>
                  <li>E-mail: info@topdata.dk</li>
                  <li>CVR-nummer: 18301709</li>
                </ul>
              </div>
            </div>
            <div className="flex-1/12">
              <div className="mb-4">
                <p>Kundeservice</p>
              </div>
              <ul className="space-y-2 [&>li>a]:opacity-50 [&>li>a]:hover:opacity-100 [&>li>a]:transition-all [&>li>a]:duration-200 [&>li>a]:ease-in-out">
                <li>
                  <a href="#">Kontakt</a>
                </li>
                <li>
                  <a href="#">Levering</a>
                </li>
                <li>
                  <a href="#">Returnering</a>
                </li>
                <li>
                  <a href="#">Reklamation</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="flex-1/12">
              <div className="mb-4">
                <p>Information</p>
              </div>
              <ul className="space-y-2 [&>li>a]:opacity-50 [&>li>a]:hover:opacity-100 [&>li>a]:transition-all [&>li>a]:duration-200 [&>li>a]:ease-in-out">
                <li>
                  <a href="#">Om os</a>
                </li>
                <li>
                  <a href="#">Handelsbetingelser</a>
                </li>
                <li>
                  <a href="#">Privatlivspolitik</a>
                </li>
                <li>
                  <a href="#">Cookiepolitik</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background">
        <div className="container mx-auto flex justify-center items-center py-5">
          <Image
            src="/payment.png"
            alt="Payment Methods"
            width={250}
            height={50}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
