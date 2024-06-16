import "./Header.scss";

import React from "react";
import { useShallow } from "zustand/react/shallow";

import { useCombinedStore } from "../../../../store/combined.store";
import { LanguagesSelector } from "../../molecules/LanguageSelector/LanguagesSelector";

export const Header = (): React.ReactElement => {
  const [language] = useCombinedStore(useShallow((state) => [state.language]));

  return (
    <header className="header">
      <h1>Satisfactory calculator</h1>
      <p>{language}</p>
      <LanguagesSelector />
    </header>
  );
};
