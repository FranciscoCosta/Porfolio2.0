import React from "react";
import { Button } from "../ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "../lang-toggle";

const NavItems = () => {
  const { t } = useTranslation(); // Get the translation function

  return (
    <ul className="flex space-x-4">
      {["home", "about", "projects", "contact"].map((item) => (
        <li key={item}>
          <a
            href={`#${item}`}
            className="card-foreground hover:text-primary/110 transition-colors"
          >
            {t(item)} {/* Use t() function for translations */}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-popover ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5 mx-auto sm:px-10 px-5">
          <a
            href="/"
            className="font-bold text-xl card-foreground transition-colors"
          >
            Francisco Costa
          </a>
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="block sm:hidden"
            variant="link"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <MenuIcon className="w-6 h-6" />
            ) : (
              <XIcon className="w-6 h-6" />
            )}
          </Button>

          <nav className="hidden sm:flex space-x-4">
            <NavItems />
            <ModeToggle />
            <LanguageToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
