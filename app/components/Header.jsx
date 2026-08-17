"use client";

import React, { useState } from "react";
import SearchIcon from "@iconify-react/material-symbols/search";
import ShoppingBasketOutlineIcon from "@iconify-react/material-symbols/shopping-basket-outline";
import ArrowDropDownIcon from "@iconify-react/material-symbols/arrow-drop-down";
import CloseIcon from "@iconify-react/material-symbols/close";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="container mx-auto flex justify-between items-center py-8">
      <a className="font-logo tracking-widest uppercase text-3xl me-16 shrink-0" href="#">
        <strong>Top</strong>data
      </a>

      {/* Middle Container holding both elements overlayed */}
      <div className="relative flex-1 flex justify-end items-center h-10">
        
        {/* 1. Navigation Menu */}
        <ul
          className={`flex items-center space-x-10 transition-all duration-300 ease-in-out [&>li>div]:bg-primary/15 [&>li>div>a]:transition-all [&>li>div>a]:duration-200 [&>li>div>a]:ease-in-out ${
            isSearchOpen
              ? "opacity-0 pointer-events-none translate-x-4"
              : "opacity-100 pointer-events-auto translate-x-0"
          }`}
        >
          <li className="group relative float-left hover:block">
            <button className="flex items-center">
              <p>Computere</p>
              <ArrowDropDownIcon
                height="1.5em"
                className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
              />
            </button>

            <div className="absolute -left-1 space-y-2 py-4 text-sm shadow-md shadow-primary/50 rounded z-1 min-w-max opacity-0 invisible translate-y-2 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                TOP-PRIME
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                TOP-PERFORMANCE
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                HIGH-LINE
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                DESIGN-LINE
              </a>
            </div>
          </li>

          <li className="group relative float-left hover:block">
            <button className="flex items-center">
              <p>Tilbehør / Udstyr</p>
              <ArrowDropDownIcon
                height="1.5em"
                className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
              />
            </button>

            <div className="absolute -left-1 space-y-2 py-4 text-sm shadow-md shadow-primary/50 rounded z-1 min-w-max opacity-0 invisible translate-y-2 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                Netværk
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                Skærme
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                Grafikkort
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                Kabler
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                Gear
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                SSD / RAM
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                PSU Strømforsyning
              </a>
              <a className="px-2 float-none block text-left hover:bg-primary" href="#">
                Keyboard og mus
              </a>
            </div>
          </li>

          <li>
            <a className="relative group transition-all duration-300 ease-in-out" href="#">
              Kontakt
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* 2. Search Input Container */}
        <div
          className={`absolute inset-0 flex items-center transition-all duration-300 ease-in-out ${
            isSearchOpen
              ? "opacity-100 pointer-events-auto translate-x-0"
              : "opacity-0 pointer-events-none -translate-x-4"
          }`}
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Søg efter produkter..."
              className="w-full py-2 pl-4 pr-10 text-sm rounded-lg focus:outline-none bg-transparent"
            />
            <SearchIcon
              height="1.2em"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <span className="absolute -bottom-1 left-0 h-0.5 bg-secondary w-full"></span>
          </div>
        </div>

      </div>

      <div className="flex items-center space-x-3 shrink-0 ms-16">
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-label={isSearchOpen ? "Close search" : "Open search"}
          className="flex items-center justify-center p-1"
        >
          {isSearchOpen ? (
            <CloseIcon
              height="1.5em"
              className="hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer"
            />
          ) : (
            <SearchIcon
              height="1.5em"
              className="hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer"
            />
          )}
        </button>

        <button aria-label="Shopping basket" className="flex items-center justify-center p-1">
          <ShoppingBasketOutlineIcon
            height="1.5em"
            className="hover:scale-125 transition-all ease-in-out duration-300"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;