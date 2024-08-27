import styles from "../page2/styles.module.scss";
import image2 from "../../../assets/images/teachingPlan/image2.png";
import headerCardImg from "../../../assets/images/icons/white/idea.png";
import { ButtonNext } from "../../../components/buttons";

export const TeachingPlanModal2 = () => {
  return (
    <>
      <div className={styles.fade}></div>
      <div className={styles.bodyDiv}>
        <div className={styles.mainDiv}>
          <div className={styles.headerMain}>
            <h2>Novo plano de aula</h2>
            <img src={image2} className={styles.image2} alt="" />
            <ButtonNext />
          </div>
          <div className={styles.contentMainDiv}>
            <div className={styles.titleDiv}>
              <img
                className={styles.headerCardImg}
                src={headerCardImg}
                alt=""
              />
              <h5>Objetivo de aprendizagem</h5>
            </div>
            <hr />
            <div className={styles.inputsDiv}></div>
          </div>
        </div>
      </div>
    </>
  );
};
