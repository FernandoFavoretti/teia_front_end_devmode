import { useState } from 'react';
import styles from "../page1/styles.module.scss";
import image1 from "../../../assets/images/teachingPlan/image1.png";
import editImg from "../../../assets/images/icons/grey/edit.png";
import deleteImg from "../../../assets/images/icons/grey/trash.png";
import { postTeachingPlan } from "../../../services/ai_rest_functions";

import {
  ButtonAddContext,
  ButtonCancel,
  ButtonGenerate,
  ButtonNext,
  ButtonUpload,
} from "../../../components/buttons";

export const TeachingPlanModal1 = () => {
  const [context, setContext] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  // const [apiResponse, setApiResponse] = useState(null);

  const handleGenerateClick = async () => {
    try {
      const data = await postTeachingPlan(context, disciplina, escolaridade);
      setApiResponse(data);
      console.log(data); // Faça algo com a resposta da API
    } catch (error) {
      console.error("Erro ao fazer a chamada à API:", error);
    }
  };


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
                  onChange={(e) => setContext(e.target.value)}
                ></textarea>
                <div className={styles.filterDiv}>
                  <div className={styles.filter}>
                    <label htmlFor="" className={styles.label}>
                      Filtrar:
                    </label>
                    <select
                     name="disciplina"
                     className={styles.select}
                     id=""
                     onChange={(e) => setDisciplina(e.target.value)}
                     >
                      <option value="" disabled selected>
                        Disciplina
                      </option>
                      <option value="biologia">Biologia</option>
                      <option value="fisica">Física</option>
                      <option value="historia">História</option>
                      <option value="geografia">Geografia</option>
                    </select>
                    <select 
                      name="anoescolaridade"
                      className={styles.select}
                      id=""
                      onChange={(e) => setEscolaridade(e.target.value)}>
                      <option value="" disabled selected>
                        Ano | Escolaridade
                      </option>
                      <option value="Biologia">Biologia</option>
                      <option value="Fisica">Física</option>
                      <option value="valor1">Artes</option>
                    </select>
                    <ButtonAddContext />
                    <ButtonUpload />
                  </div>
                </div>
              </div>
              <div className={styles.buttonsGenerate}>
                <ButtonGenerate onClick={handleGenerateClick}/>
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
function setApiResponse(data: any) {
  throw new Error('Function not implemented.');
}

