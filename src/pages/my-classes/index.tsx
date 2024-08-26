import { ButtonCleanFilter, ButtonCyanNewPlan } from "../../components/buttons";
import { CardsClass } from "../../components/cards";
import { SideMenu } from "../../components/sideMenu";
import styles from "./styles.module.scss";
export const MyClassesPage = () => {
  return (
    <div className={styles.divBody}>
      <div className={styles.divMain}>
        <SideMenu />
        <div className={styles.classesDiv}>
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
            <div className={styles.filterButton}>
              <ButtonCyanNewPlan />
            </div>
          </div>
          <hr />
          <div className={styles.cardsDiv}>
            <CardsClass />
            <CardsClass />
            <CardsClass />
            <CardsClass />
            <CardsClass />
          </div>
        </div>
      </div>
    </div>
  );
};
