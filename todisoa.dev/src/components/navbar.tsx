"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        <h1 className="font-bold text-yellow-400">
          Todisoa.dev
        </h1>

        <ul className="flex gap-8">
          <li>
            <a href="#about">À propos</a>
          </li>

          <li>
            <a href="#skills">Compétences</a>
          </li>

          <li>
            <a href="#experience">Expériences</a>
          </li>

          <li>
            <a href="#projects">Projets</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}