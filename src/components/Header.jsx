import React from "react";

import Logo from "./Logo";
import logoSportsee from "../assets/logo-sportsee.png";
import Nav from "./Nav";


function Header() {

    const links = ["Accueil", "Profil", "Réglages", "Communauté"];

    return (
        <header className="header">
            <Logo src={logoSportsee} />
            <Nav links={links} />
        </header>
    )
}

export default Header;