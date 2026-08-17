import React from 'react'

const Header = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center p-4">
      <div className="font-logo tracking-widest uppercase text-3xl"><strong>Top</strong>data</div>
      <ul className="flex space-x-10">
        <li>Computere</li>
        <li>Tilbehør / Udstyr</li>
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