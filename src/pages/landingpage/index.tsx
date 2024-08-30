import { Header } from "../../components/header";
import womanImg from "../../assets/images/landingpage/womanLines2.png";
import plansImg from "../../assets/images/landingpage/plans.png";
import manImg from "../../assets/images/landingpage/man.png";
import notebookImg from "../../assets/images/landingpage/notebook.png";
import styles from "./styles.module.scss";
import {
  ButtonOrangeLandingPage,
  ButtonWhiteLandingPage,
} from "../../components/buttons";
import { Footer } from "../../components/footer";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <div className={styles.divBody}>
        <div className={styles.divMain}>
          <div className={styles.womanSection}>
            <div className={styles.imgWoman}>
              <img src={womanImg} alt="" />
            </div>

            <div className={styles.textbutton}>
              <div className={styles.text}>
                <h2> Frase</h2>
                <h2 className={styles.h2De}> de </h2>
                <h1 className={styles.h1Efecttext}> efeito</h1>
              </div>
              <div className={styles.textP}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Ipsum is simply dummy text of the
                  printing and typesetting...
                </p>
                <ButtonOrangeLandingPage children={undefined} />
              </div>
            </div>
          </div>
          <div className={styles.manSection}>
            <div className={styles.textbutton}>
              <div className={styles.textMan}>
                <h2> Frase</h2>
                <h2 className={styles.h2De}> de </h2>
                <h1 className={styles.h1Efecttext}> efeito</h1>
              </div>
              <div className={styles.textP}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Ipsum is simply dummy text of the
                  printing and typesetting...
                </p>
                <ButtonWhiteLandingPage />
              </div>
            </div>
            <div className={styles.imgMan}>
              <img src={manImg} alt="" />
            </div>
          </div>
          <div className={styles.notebookSection}>
            <div className={styles.imgNotebookDiv}>
              <img src={notebookImg} alt="" />
              <div className={styles.textnotebook}>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Ipsum is simply dummy text of the
                  printing and typesetting...
                </p>
                <ButtonWhiteLandingPage />
              </div>
            </div>
          </div>
          <div className={styles.infosSection}>
            <img src={plansImg} alt="" />
          </div>
          <div className={styles.footerSection}></div>
        </div>
        <Footer />
      </div>
    </>
  );
};
