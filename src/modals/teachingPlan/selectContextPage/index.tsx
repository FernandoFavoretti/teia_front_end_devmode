import styles from "../selectContextPage/styles.module.scss";
import ideaImg from "../../../assets/images/icons/grey/idea.png";
import {
  ButtonCleanFilter,
  ButtonCyanCheck,
  ButtonOrangeCancel,
} from "../../../components/buttons";
import { CardsSelectClass } from "../../../components/cards";

export const SelectContextPage = () => {
  return (
    <>
      <div className={styles.fade}></div>
      <div className={styles.bodyDiv}>
        <div className={styles.mainDiv}>
          <div className={styles.headerMain}>
            <h2>Novo plano de aula</h2>
            <div className={styles.spanImg}>
              <img src={ideaImg} alt="" />
              <p className={styles.spanSelect}>
                Selecione as aulas existentes que você gostaria de usar como
                contexto:
              </p>
            </div>
          </div>
          <div className={styles.filterDiv}>
            <div className={styles.filter}>
              <label htmlFor="">Filtrar:</label>
              <select name="disciplina" className={styles.select} id="">
                <option value="" disabled selected>
                  Disciplina
                </option>
                <option value="valor1">Biologia</option>
                <option value="valor1">Física</option>
                <option value="valor1">Artes</option>
              </select>
              <select name="disciplina" className={styles.select} id="">
                <option value="" disabled selected>
                  Ano | Escolaridade
                </option>
                <option value="valor1">Biologia</option>
                <option value="valor1">Física</option>
                <option value="valor1">Artes</option>
              </select>
              <ButtonCleanFilter />
            </div>
          </div>
          <div className={styles.contentMainDiv}>
            <CardsSelectClass />
            <CardsSelectClass />
            <CardsSelectClass />
            <CardsSelectClass />
            <CardsSelectClass />
            <CardsSelectClass />
          </div>
          <div className={styles.buttonsDiv}>
            <ButtonOrangeCancel />
            <ButtonCyanCheck />
          </div>
        </div>
      </div>
    </>
  );
};
