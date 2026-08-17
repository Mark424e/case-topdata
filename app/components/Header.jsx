import React from 'react'

const Header = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center p-4">
      <div className="font-logo tracking-widest uppercase text-3xl"><strong>Top</strong>data</div>
      <ul className="flex space-x-10">

        <li className="group relative float-left hover:block">
          <button>Computere</button>

          <div className="absolute -left-1 space-y-2 bg-primary/15 py-4 text-sm shadow-md shadow-primary/50 rounded z-1 min-w-max opacity-0 invisible translate-y-2 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">TOP-PRIME</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">TOP-PERFORMANCE</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">HIGH-LINE</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">DESIGN-LINE</a>
          </div>
        </li>

        <li className="group relative float-left hover:block">
          <button>Tilbehør / Udstyr</button>
        
          <div className="absolute -left-1 space-y-2 bg-primary/15 py-4 text-sm shadow-md shadow-primary/50 rounded z-1 min-w-max opacity-0 invisible translate-y-2 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">Netværk</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">Skærme</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">Grafikkort</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">Kabler</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">Gear</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">SSD / RAM</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">PSU Strømforsyning</a>
            <a className=" px-2 float-none block text-left hover:bg-background" href="#">Keyboard og mus</a>
          </div>
        </li>
        <li>Kontakt</li>
        <ul className="flex space-x-2 ps-8">
          <li>Søg</li>
          <li>Kurv</li>
        </ul>
      </ul>
    </nav>
  )
}

export default Header