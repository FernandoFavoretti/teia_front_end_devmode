import styles from "../page2/styles.module.scss";
import image2 from "../../../assets/images/teachingPlan/image2.png";
import headerCardImg from "../../../assets/images/icons/white/idea.png";
import {
  ButtonDownComplexity,
  ButtonNextPage2,
  ButtonUpComplexity,
  ButtonUpload,
} from "../../../components/buttons";
import {
  CardsNewsTeachingForestPlan,
  CardsNewsTeachingRebecaPlan,
} from "../../../components/cards";

export const TeachingPlanModal2 = () => {
  return (
    <>
      <div className={styles.fade}></div>
      <div className={styles.bodyDiv}>
        <div className={styles.mainDiv}>
          <div className={styles.headerMain}>
            <h2 className={styles.h2}>Novo plano de aula</h2>
            <img src={image2} className={styles.image2} alt="" />
            <ButtonNextPage2 children={undefined} />
          </div>
          <div className={styles.contentMainDiv}>
            <div className={styles.titleDiv}>
              <img
                className={styles.headerCardImg}
                src={headerCardImg}
                alt=""
              />
              <h5>Selecionar fontes:</h5>
            </div>

            <div className={styles.checkBoxDiv}>
              <div className={styles.inputLabel}>
                <input type="checkbox" name="" id="" />
                <label className={styles.checkBoxLabel} htmlFor="">
                  Sites
                </label>
              </div>
              <div className={styles.inputLabel}>
                <input type="checkbox" name="" id="" />
                <label className={styles.checkBoxLabel} htmlFor="">
                  Notícias
                </label>
              </div>
              <div className={styles.inputLabel}>
                <input type="checkbox" name="" id="" />
                <label className={styles.checkBoxLabel} htmlFor="">
                  Vídeos
                </label>
              </div>
              <div className={styles.inputLabel}>
                <input type="checkbox" name="" id="" />
                <label className={styles.checkBoxLabel} htmlFor="">
                  Filmes
                </label>
              </div>
              <div className={styles.inputLabel}>
                <input type="checkbox" name="" id="" />
                <label className={styles.checkBoxLabel} htmlFor="">
                  Tirinhas
                </label>
              </div>
            </div>
            <hr />
            <div className={styles.uploadDiv}>
              <label htmlFor="">Carregar conteúdo próprio: </label>
              <ButtonUpload />
            </div>
            <hr />
            <div className={styles.divCards}>
              <div className={styles.cardsButton}>
                <CardsNewsTeachingForestPlan />
                <div className={styles.buttons}>
                  <ButtonUpComplexity />
                  <ButtonDownComplexity />
                </div>
              </div>
              <div className={styles.cardsButton}>
                <CardsNewsTeachingRebecaPlan />
                <div className={styles.buttons}>
                  <ButtonUpComplexity />
                  <ButtonDownComplexity />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
