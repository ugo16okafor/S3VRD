function Header() {
  return (
    <header className=" absolute top-0 right-0 left-0 flex items-center mx-10 my-5 font-league-spartan">
      <nav className="flex justify-between w-screen items-center sticky">
        <div className="w-20 flex items-center">
          <img src="/lumon_globe.svg" alt="Lumon Logo" />
        </div>

        <ul className="text-white text-lg flex gap-7">
          <li>About</li>
          <li>Severance Procedure</li>
          <li>Staff</li>
          <li>Macrodata Refinement</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
