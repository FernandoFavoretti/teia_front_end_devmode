import styles from "../page1/styles.module.scss";
import image1 from "../../../assets/images/teachingPlan/image1.png";
import editImg from "../../../assets/images/icons/grey/edit.png";
import deleteImg from "../../../assets/images/icons/grey/trash.png";

import {
  ButtonAddContext,
  ButtonCancel,
  ButtonGenerate,
  ButtonNext,
  ButtonUpload,
} from "../../../components/buttons";

export const TeachingPlanModal1 = () => {
  return (
    <>
      <div className={styles.fade}></div>
      <div className={styles.bodyDiv}>
        <div className={styles.mainDiv}>
          <div className={styles.headerMain}>
            <h2>Novo plano de aula</h2>
            <img src={image1} className={styles.image1} alt="" />
            <ButtonNext children={undefined} />
          </div>
          <div className={styles.contentMainDiv2}>
            <div className={styles.themeFilteredButtons}>
              <div className={styles.themeFilterDiv}>
                <label htmlFor="" className={styles.label}>
                  Tema e contexto
                </label>
                <textarea
                  name="context"
                  className={styles.themeContextArea}
                  id=""
                  placeholder="Escreva um tema ou contexto aqui"
                ></textarea>
                <div className={styles.filterDiv}>
                  <div className={styles.filter}>
                    <label htmlFor="" className={styles.label}>
                      Filtrar:
                    </label>
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
                    <ButtonAddContext />
                    <ButtonUpload />
                  </div>
                </div>
              </div>
              <div className={styles.buttonsGenerate}>
                <ButtonGenerate />
                <ButtonCancel children={undefined} />
              </div>
            </div>
            <hr />
            <div className={styles.inputsDiv}>
              <div className={styles.options}>
                <div className={styles.inputOptionsDiv}>
                  <label htmlFor="" className={styles.label}>
                    Opção 1
                  </label>
                  <textarea
                    name="context"
                    className={styles.themeContextArea}
                    id=""
                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th"
                  ></textarea>
                </div>

                <div className={styles.icons}>
                  <img src={editImg} alt="" />
                  <img src={deleteImg} alt="" />
                </div>
              </div>

              <div className={styles.options}>
                <div className={styles.inputOptionsDiv}>
                  <label htmlFor="" className={styles.label}>
                    Opção 2
                  </label>
                  <textarea
                    name="context"
                    className={styles.themeContextArea}
                    id=""
                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th"
                  ></textarea>
                </div>

                <div className={styles.icons}>
                  <img src={editImg} alt="" />
                  <img src={deleteImg} alt="" />
                </div>
              </div>
              <div className={styles.options}>
                <div className={styles.inputOptionsDiv}>
                  <label htmlFor="" className={styles.label}>
                    Opção 3
                  </label>
                  <textarea
                    name="context"
                    className={styles.themeContextArea}
                    id=""
                    placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th"
                  ></textarea>
                </div>

                <div className={styles.icons}>
                  <img src={editImg} alt="" />
                  <img src={deleteImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
