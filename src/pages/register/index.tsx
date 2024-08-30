import styles from "./styles.module.scss";
import loginImage from "../../assets/images/register-login/desktop.png";
import googleImg from "../../assets/images/icons/social/google.png";
import appleImg from "../../assets/images/icons/social/apple.png";
import { ImputLogin } from "../../components/inputs";
import { ButtonOrangeRegister } from "../../components/buttons";

export const RegisterPage = () => {
  return (
    <div className={styles.divBody}>
      <div className={styles.mainDiv}>
        <div className={styles.formDiv}>
          <div className={styles.form}>
            <h3>Vamos</h3>
            <h3 className={styles.beginMargin}>começar!</h3>
            <span className={styles.registerSpan}>
              Ainda não possui uma conta?
            </span>
            <ImputLogin />
            <div className={styles.buttonsDiv}>
              <ButtonOrangeRegister />
              <span className={styles.registerSpan}>ou continuar com</span>
              <div className={styles.accountDiv}>
                <img src={googleImg} alt="" />
                <span className={styles.registerSpan}>ou</span>
                <img src={appleImg} alt="" />
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};
