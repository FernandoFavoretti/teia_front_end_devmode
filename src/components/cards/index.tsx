import styles from "./styles.module.scss";
import printImage from "../../assets/images/icons/grey/print.png";
import editImage from "../../assets/images/icons/grey/edit.png";
import deleteImage from "../../assets/images/icons/grey/trash.png";
import headerCardImg from "../../assets/images/icons/white/idea.png";
import visibilityImg from "../../assets/images/icons/white/visibility.png";

export const CardsClass = () => {
  return (
    <header>
      <div className={styles.mainDiv}>
        <div className={styles.headerCard}>
          <div className={styles.titleDiv}>
            <img className={styles.headerCardImg} src={headerCardImg} alt="" />
            <h5>Objetivo de aprendizagem</h5>
          </div>
          <h2>Disciplina</h2>
          <div className={styles.visibilityTagDiv}>
            <span>Ano | Escolaridade</span>
            <img className={styles.menuImg} src={visibilityImg} alt="" />
          </div>
        </div>
        <section className={styles.contentCard}>
          <div className={styles.divText}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book...Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </section>
        <hr />
        <div className={styles.footCard}>
          <div className={styles.printEditDiv}>
            <img className={styles.menuImg} src={printImage} alt="" />
            <img className={styles.menuImg} src={editImage} alt="" />
          </div>
          <div className={styles.trashDiv}>
            <img className={styles.menuImg} src={deleteImage} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export const CardsSelectClass = () => {
  return (
    <header>
      <div className={styles.mainDiv}>
        <div className={styles.headerCardSelect}>
          <div className={styles.titleDiv}>
            <img className={styles.headerCardImg} src={headerCardImg} alt="" />
            <h5>Objetivo de aprendizagem</h5>
          </div>
        </div>
        <section className={styles.contentCardSelect}>
          <div className={styles.divText}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book...Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </section>
        <hr />
        <div className={styles.footCardSelect}>
          <div className={styles.printEditDiv}>
            <input type="checkbox" name="Select Class" id="" />
            <label htmlFor="">Selecionar aula como contexto</label>
          </div>
        </div>
      </div>
    </header>
  );
};
