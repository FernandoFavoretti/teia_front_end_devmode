import styles from "./styles.module.scss";
import logoImage from "../../assets/images/logo/logo.png";
import beginningImage from "../../assets/images/icons/orange/beginning.png";
import aboutUsImage from "../../assets/images/icons/orange/about-us.png";
import loginImage from "../../assets/images/icons/orange/login.png";
import settingsImage from "../../assets/images/icons/orange/settings.png";
import { useNavigate } from "react-router-dom";

export interface iUserProviderProps {
  children: React.ReactNode;
}

export const Header = ({}: iUserProviderProps) => {
  const navigate = useNavigate();
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            <div className={styles.logo}>
              <img src={logoImage} alt="" />
            </div>
            <ul>
              <li>
                <button className={styles.buttonsMenu}>
                  <img src={beginningImage} alt="" className={styles.menuImg} />{" "}
                  Início
                </button>
              </li>
              <li>
                <button className={styles.buttonsMenu}>
                  <img src={aboutUsImage} alt="" className={styles.menuImg} />
                  Sobre nós
                </button>
              </li>
              <li>
                <button
                  className={styles.buttonsMenu}
                  onClick={() => navigate("/login")}
                >
                  <img src={loginImage} alt="" className={styles.menuImg} />
                  Login
                </button>
              </li>
              <li>
                <button className={styles.buttonsMenu}>
                  <img src={settingsImage} alt="" className={styles.menuImg} />
                  Configurações
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
