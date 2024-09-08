import React from "react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

import ReactCountryFlag from "react-country-flag";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon">
          {i18n.language === "pt-BR" ? (
            <ReactCountryFlag countryCode="BR" />
          ) : (
            <ReactCountryFlag countryCode="US" />
          )}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("pt-BR")}>
          <ReactCountryFlag countryCode="BR" />
          <span className="ml-2">
            {i18n.language === "pt-BR" ? "Português (BR)" : "Portuguese (BR)"}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          <ReactCountryFlag countryCode="US" />
          <span className="ml-2">
            {i18n.language === "en" ? "English (EN)" : "Inglês (EN)"}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
