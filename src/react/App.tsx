import "./App.scss";

import React from "react";

import { TranslationsFiles } from "../enums/TranslationsFiles.enum";
import { Header } from "./components/organisms/Header/Header";
import { useTranslations } from "./hooks/useTranslations";

export const App = (): React.ReactElement => {
  const t = useTranslations();

  // TODO
  // console.log(recipes.filter((it) => it.itemsOut.length > 1));

  return (
    <>
      <Header />
      <p style={{ color: "white" }}>{t(TranslationsFiles.COMMON, "exemple")}</p>
    </>
  );
};
