import styles from "../page3/styles.module.scss";
import image3 from "../../../assets/images/teachingPlan/image3.png";
import timeImg from "../../../assets/images/icons/grey/timer.png";
import methodologyImg from "../../../assets/images/icons/grey/text.png";
import heartImg from "../../../assets/images/icons/grey/socioemotional.png";
import trashImg from "../../../assets/images/icons/grey/trash.png";
import synthesisImg from "../../../assets/images/synthesis.png";
import headerCardImg from "../../../assets/images/icons/white/idea.png";
import {
  ButtonBack,
  ButtonCyanCheck,
  ButtonNext,
  ButtonRemake,
  ButtoRefresh,
} from "../../../components/buttons";

export const TeachingPlanModal3 = () => {
  return (
    <>
      <div className={styles.fade}></div>
      <div className={styles.bodyDiv}>
        <div className={styles.mainDiv}>
          <div className={styles.headerMain}>
            <h2 className={styles.h2}>Novo plano de aula</h2>
            <img src={image3} className={styles.image3} alt="" />
            <div className={styles.buttonsHeaderDiv}>
              <ButtonBack />
              <ButtonCyanCheck />
            </div>
          </div>
          <div className={styles.contentMainDiv}>
            <div className={styles.myClassDiv}>
              <section className={styles.contentClassSection}>
                <div className={styles.classCardModel}>
                  <div className={styles.blueDiv}>
                    <div className={styles.titleDiv}>
                      <img
                        className={styles.headerCardImg}
                        src={headerCardImg}
                        alt=""
                      />
                      <h5>1 - Introdução à geometria</h5>
                    </div>
                  </div>
                  <div className={styles.input}>
                    <div className={styles.themeFilterDiv}>
                      <div className={styles.filterDiv}>
                        <div className={styles.filter}>
                          <label htmlFor="" className={styles.labelFilter}>
                            Filtrar:
                          </label>

                          <div className={styles.labelSelect}>
                            <div className={styles.labelImg}>
                              <img src={methodologyImg} alt="" />
                              <label htmlFor="" className={styles.label}>
                                Metodologia:
                              </label>
                            </div>

                            <select
                              name="disciplina"
                              className={styles.select}
                              id=""
                            >
                              <option value="" disabled selected>
                                Selecione uma metodologia:
                              </option>
                              <option value="valor1">
                                Montessori: Autonomia
                              </option>
                              <option value="valor1">ABP: Projetos</option>
                              <option value="valor1">Invertida: Digital</option>
                            </select>
                          </div>

                          <div className={styles.labelSelect}>
                            <div className={styles.labelImg}>
                              <img src={heartImg} alt="" />
                              <label htmlFor="" className={styles.label}>
                                Socioemocional:
                              </label>
                            </div>

                            <select
                              name="disciplina"
                              className={styles.select}
                              id=""
                            >
                              <option value="" disabled selected>
                                Selecione uma opção:
                              </option>
                              <option value="valor1">Autoconhecimento</option>
                              <option value="valor1">Empatia</option>
                              <option value="valor1">Resiliência</option>
                            </select>
                          </div>
                          <div className={styles.labelSelect}>
                            <div className={styles.labelImg}>
                              <img src={timeImg} alt="" />
                              <label htmlFor="" className={styles.label}>
                                Tempo de aula:
                              </label>
                            </div>

                            <select
                              name="disciplina"
                              className={styles.select}
                              id=""
                            >
                              <option value="" disabled selected>
                                1h
                              </option>
                              <option value="valor1">2h</option>
                              <option value="valor1">3h</option>
                              <option value="valor1">4h</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.classTextDiv}>
                    <h3>Objetivos:</h3>

                    <p>
                      Apresentar aos alunos os conceitos básicos da geometria
                      plana, como ponto, reta, plano e ângulo. Desenvolver a
                      capacidade de identificar e classificar diferentes formas
                      geométricas, como triângulos, quadriláteros e círculos.{" "}
                    </p>
                    <p>
                      Apresentar aos alunos os conceitos básicos da geometria
                      plana, como ponto, reta, plano e ângulo. Desenvolver a
                      capacidade de identificar e classificar diferentes formas
                      geométricas, como triângulos, quadriláteros e círculos.
                      Estimular a visualização espacial e o raciocínio lógico
                      através da manipulação de materiais concretos e da
                      resolução de problemas simples.{" "}
                    </p>

                    <p>
                      Apresentar aos alunos os conceitos básicos da geometria
                      plana, como ponto, reta, plano e ângulo. Desenvolver a
                      capacidade de identificar e classificar diferentes formas
                      geométricas, como triângulos, quadriláteros e círculos.
                      Estimular a visualização espacial e o raciocínio lógico
                      através da manipulação de materiais concretos e da
                      resolução de problemas simples.{" "}
                    </p>
                  </div>
                  <hr />
                  <div className={styles.trashButtonsDiv}>
                    <div className={styles.trashDiv}>
                      <img src={trashImg} alt="" />
                    </div>
                    <div className={styles.buttonsDiv}>
                      <ButtonRemake />
                      <ButtoRefresh />
                    </div>
                  </div>
                </div>
              </section>

              {/*  */}
              <section className={styles.contentClassSection}>
                <div className={styles.classCardModel}>
                  <div className={styles.blueDiv}>
                    <div className={styles.titleDiv}>
                      <img
                        className={styles.headerCardImg}
                        src={headerCardImg}
                        alt=""
                      />
                      <h5>1 - Introdução à geometria</h5>
                    </div>
                  </div>
                  <div className={styles.input}>
                    <div className={styles.themeFilterDiv}>
                      <div className={styles.filterDiv}>
                        <div className={styles.filter}>
                          <label htmlFor="" className={styles.labelFilter}>
                            Filtrar:
                          </label>

                          <div className={styles.labelSelect}>
                            <div className={styles.labelImg}>
                              <img src={methodologyImg} alt="" />
                              <label htmlFor="" className={styles.label}>
                                Metodologia:
                              </label>
                            </div>

                            <select
                              name="disciplina"
                              className={styles.select}
                              id=""
                            >
                              <option value="" disabled selected>
                                Selecione uma metodologia:
                              </option>
                              <option value="valor1">
                                Montessori: Autonomia
                              </option>
                              <option value="valor1">ABP: Projetos</option>
                              <option value="valor1">Invertida: Digital</option>
                            </select>
                          </div>

                          <div className={styles.labelSelect}>
                            <div className={styles.labelImg}>
                              <img src={heartImg} alt="" />
                              <label htmlFor="" className={styles.label}>
                                Socioemocional:
                              </label>
                            </div>

                            <select
                              name="disciplina"
                              className={styles.select}
                              id=""
                            >
                              <option value="" disabled selected>
                                Selecione uma opção:
                              </option>
                              <option value="valor1">Autoconhecimento</option>
                              <option value="valor1">Empatia</option>
                              <option value="valor1">Resiliência</option>
                            </select>
                          </div>
                          <div className={styles.labelSelect}>
                            <div className={styles.labelImg}>
                              <img src={timeImg} alt="" />
                              <label htmlFor="" className={styles.label}>
                                Tempo de aula:
                              </label>
                            </div>

                            <select
                              name="disciplina"
                              className={styles.select}
                              id=""
                            >
                              <option value="" disabled selected>
                                1h
                              </option>
                              <option value="valor1">2h</option>
                              <option value="valor1">3h</option>
                              <option value="valor1">4h</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.classTextDiv}>
                    <h3>Desenvolvimento:</h3>
                    <hr />
                    <p>
                      Boas-vindas e apresentação do tema: Receber os alunos e
                      iniciar uma conversa sobre o que eles entendem por
                      geometria. Explicar que a geometria estuda as formas,
                      tamanhos e posições das coisas no espaço. * Atividade de
                      aquecimento: Mostrar diferentes objetos do cotidiano
                      (caixa, bola, mesa, etc.) e pedir que os alunos
                      identifiquem as formas geométricas presentes neles.
                    </p>
                  </div>
                  <hr />
                  <div className={styles.trashButtonsDiv}>
                    <div className={styles.trashDiv}>
                      <img src={trashImg} alt="" />
                    </div>
                    <div className={styles.buttonsDiv}>
                      <ButtonRemake />
                      <ButtoRefresh />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className={styles.synthesisDataDiv}>
              <div className={styles.synthesisDiv}>
                <label htmlFor="" className={styles.label}>
                  Síntese da aula:
                </label>
                <div className={styles.synthesis}>
                  <img
                    className={styles.imgSynthesis}
                    src={synthesisImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
