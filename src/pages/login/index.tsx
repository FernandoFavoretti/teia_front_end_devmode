import styles from "./styles.module.scss";
import loginImage from "../../assets/images/register-login/desktop.png";
import { ImputLogin } from "../../components/inputs";
import { ButtonBlueLogin, ButtonOrangeLogin } from "../../components/buttons";

export const LoginPage = () => {
  return (
    <div className={styles.divBody}>
      <div className={styles.mainDiv}>
        <div className={styles.titleDiv}>
          <div className={styles.title}>
            <h2>Frase</h2>
            <h2>de</h2>
            <h1>efeito</h1>
          </div>
          <div className={styles.divImg}>
            {" "}
            <img className={styles.mainImg} src={loginImage} alt="" />
          </div>
        </div>
        <div className={styles.formDiv}>
          <div className={styles.form}>
            <h3>Login</h3>
            <ImputLogin />
            <div className={styles.buttonsDiv}>
              <ButtonBlueLogin />
              <span>Ainda não possui uma conta?</span>
              <ButtonOrangeLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
