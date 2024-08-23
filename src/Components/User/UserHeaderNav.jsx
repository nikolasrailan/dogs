import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useMedia from "../../../Hooks/useMedia";
import MinhasFotos from "../../Assets/feed.svg?react";
import AdicionarFoto from "../../Assets/adicionar.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import Sair from "../../Assets/sair.svg?react";

import styles from "./UserHeaderNav.module.css";

const UserHeaderNAv = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia("(max-width: 40rem)");
  const navigate = useNavigate();

  console.log(mobile);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobile)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos /> {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNAv;
