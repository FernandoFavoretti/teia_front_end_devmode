import styles from "./styles.module.scss";
import printImage from "../../assets/images/icons/grey/print.png";
import editImage from "../../assets/images/icons/grey/edit.png";
import deleteImage from "../../assets/images/icons/grey/trash.png";
import headerCardImg from "../../assets/images/icons/white/idea.png";
import visibilityImg from "../../assets/images/icons/white/visibility.png";
import visibilityImgGrey from "../../assets/images/icons/grey/visibility.png";
import forestImg from "../../assets/images/cards/amazonia-photo.png";
import rebecaImg from "../../assets/images/cards/rebeca-andrade.png";

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
      <div className={styles.mainDivSelect}>
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
            <label className={styles.contextLabel} htmlFor="">
              Selecionar aula como contexto
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export const CardsNewsTeachingForestPlan = () => {
  return (
    <header>
      <div className={styles.mainTeachinPlanDiv}>
        <div className={styles.contentDiv}>
          <img className={styles.newsImg} src={forestImg} alt="" />
          <div className={styles.cardsTextNews}>
            <h1>
              Desmatamento em áreas protegidas na Amazônia, como terras
              indígenas, tem a menor taxa em 9 anos, aponta imazon
            </h1>
            <p>
              Em 2023 foram derrubados 386km² de florestas em terras indígenas e
              unidades de conservação, área que equivale ao tamanho de Belo
              Horizonte
            </p>
          </div>
          <div className={styles.visibilityIcon}>
            <img
              className={styles.visibilityImg}
              src={visibilityImgGrey}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export const CardsNewsTeachingRebecaPlan = () => {
  return (
    <header>
      <div className={styles.mainTeachinPlanDiv}>
        <div className={styles.contentDiv}>
          <img className={styles.newsImg} src={rebecaImg} alt="" />
          <div className={styles.cardsTextNews}>
            <h1>
              Em disputa forte com Biles, Rebeca Andrade ganha prata no
              individual geral em Paris
            </h1>
            <p>
              A brasileira conquistou a segunda medalha consecutiva na prova, a
              quarta nas olimpíadas
            </p>
          </div>
          <div className={styles.visibilityIcon}>
            <img
              className={styles.visibilityImg}
              src={visibilityImgGrey}
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};
