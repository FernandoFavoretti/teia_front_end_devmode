import styles from "./styles.module.scss";
import logoImage2 from "../../assets/images/logo/logo2.png";
import beginningImage from "../../assets/images/icons/orange/beginning.png";
import myClassesImage from "../../assets/images/icons/orange/my-classes.png";
import profileImage from "../../assets/images/icons/orange/profile.png";
import settingsImage from "../../assets/images/icons/orange/settings.png";

export const SideMenu = () => {
  return (
    <header>
      <div className={styles.mainDiv}>
        <img className={styles.logoImg} src={logoImage2} alt="" />
        <div className={styles.divMenu}>
          <ul>
            <li>
              <button className={styles.buttonsMenu}>
                <img src={profileImage} alt="" className={styles.menuImg} />{" "}
                Perfil
              </button>
            </li>
            <hr />
            <li>
              <button className={styles.buttonsMenu}>
                <img src={myClassesImage} alt="" className={styles.menuImg} />
                Minhas aulas
              </button>
            </li>
            <hr />
            <li>
              <button className={styles.buttonsMenu}>
                <img src={settingsImage} alt="" className={styles.menuImg} />
                Configurações
              </button>
            </li>
            <hr />
            <li>
              <button className={styles.buttonsMenu}>
                <img src={beginningImage} alt="" className={styles.menuImg} />{" "}
                Início
              </button>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </header>
  );
};
