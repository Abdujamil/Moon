import React from "react";
import classes from "./index.module.scss";
import MoonRocket from "../../images/moon-rocket 1.png";
import Header from "../Header";
import Catalog from "../Catalogs";
import Main from "../Main";
import Contacts from "../Contacts";
import Flight from "../Flight-schedule";
import Footer from '../Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Catalog />
      <Main />
      <Contacts />
      <Flight />
      <Footer />
    </>
  );
}
