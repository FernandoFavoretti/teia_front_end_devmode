import { ButtonOrangeProfile } from "../../components/buttons";
import { SideMenu } from "../../components/sideMenu";
import styles from "./styles.module.scss";
import myTermsImage from "../../assets/images/icons/orange/terms-of-service.png";
import accountImage from "../../assets/images/icons/orange/account-info.png";
import womanImage from "../../assets/images/profile/woman.png";
export const ProfilePage = () => {
  return (
    <div className={styles.divBody}>
      <div className={styles.divMain}>
        <SideMenu />
        <div className={styles.profileDiv}>
          <div className={styles.blueDiv}>
            <ButtonOrangeProfile />
          </div>

          <div className={styles.profileMainDiv}>
            <div className={styles.profileImg}>
              <img src={womanImage} alt="" />
              <h1>Fulana da Silva</h1>
              <span>Pedagoga</span>
            </div>
            <div className={styles.infosDiv}>
              <h3>Perfil</h3>
              <hr />
              <ul>
                <li>
                  <button className={styles.buttonsMenu}>
                    <img src={accountImage} alt="" className={styles.menuImg} />{" "}
                    Sua conta
                  </button>
                </li>
                <hr />
                <li>
                  <button className={styles.buttonsMenu}>
                    <img src={myTermsImage} alt="" className={styles.menuImg} />
                    Termos de serviço
                  </button>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
