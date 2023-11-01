import { nikeDunk } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-20 w-full fixed bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex flex-row font-bold text-coral-red font-palanquin text-2xl">
            <img src={nikeDunk} alt="Logo" width={48} className="mr-3" />
            <span>Dunky</span>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
