import styles from "./styles.module.scss";
import editImage from "../../assets/images/icons/white/edit.png";
import calcelImage from "../../assets/images/icons/white/close-x.png";
import checkImage from "../../assets/images/icons/white/check.png";
import plusImage from "../../assets/images/icons/white/plus-add.png";
import backImage from "../../assets/images/icons/white/back.png";
import editGreyImage from "../../assets/images/icons/grey/edit.png";
import printImage from "../../assets/images/icons/grey/print.png";
import nextImage from "../../assets/images/icons/white/next.png";
import uploadImage from "../../assets/images/icons/white/upload.png";
import upImage from "../../assets/images/icons/orange/upsign.png";
import downImage from "../../assets/images/icons/cyan/downsign.png";
import refreshImage from "../../assets/images/icons/white/refresh.png";

/* Landingpage */

export const ButtonOrangeLandingPage = () => {
  return <button className={styles.buttonOrangeLp}>Junte-se a nós</button>;
};

export const ButtonWhiteLandingPage = () => {
  return <button className={styles.buttonWhiteLp}>Comece agora!</button>;
};

/* Login */

export const ButtonBlueLogin = () => {
  return <button className={styles.buttonBlueLogin}>Entrar</button>;
};

export const ButtonOrangeLogin = () => {
  return (
    <button className={styles.buttonOrangeLoginRegister}>Cadastre-se</button>
  );
};

/* Register */

export const ButtonOrangeRegister = () => {
  return (
    <button className={styles.buttonOrangeLoginRegister}>Cadastrar</button>
  );
};

/* Profile */

export const ButtonOrangeProfile = () => {
  return (
    <button className={styles.buttonOrange}>
      <img src={editImage} alt="" className={styles.imgButton} /> Editar perfil
    </button>
  );
};

/* My classes */

export const ButtonCyanNewPlan = () => {
  return (
    <button className={styles.buttonCyan}>
      <img src={plusImage} alt="" className={styles.addButton} /> Novo plano de
      aula
    </button>
  );
};

/* General */

export const ButtonOrangeCancel = () => {
  return (
    <button className={styles.buttonOrange}>
      <img src={calcelImage} alt="" className={styles.imgButton} /> Cancelar
    </button>
  );
};

export const ButtonCyanCheck = () => {
  return (
    <button className={styles.buttonCyan}>
      <img src={checkImage} alt="" className={styles.imgButton} /> Finalizar
    </button>
  );
};

export const ButtonCleanFilter = () => {
  return (
    <button className={styles.buttonCleanFilter}>
      <img src={calcelImage} alt="" className={styles.cleanFilterImg} /> Limpar
      filtro
    </button>
  );
};

export const ButtonBack = () => {
  return (
    <button className={styles.buttonBack}>
      <img src={backImage} alt="" className={styles.backImage} /> Voltar
    </button>
  );
};

export const ButtonEdit = () => {
  return (
    <button className={styles.buttonEdit}>
      <img src={editGreyImage} alt="" className={styles.editImg} /> Editar
    </button>
  );
};

export const ButtonPrint = () => {
  return (
    <button className={styles.buttonEdit}>
      <img src={printImage} alt="" className={styles.editImg} /> Editar
    </button>
  );
};

/* New plan */

export const ButtonNext = () => {
  return (
    <button className={styles.buttonOrange}>
      <img src={nextImage} alt="" className={styles.imgButton} /> Próximo
    </button>
  );
};

export const ButtonAddContext = () => {
  return (
    <button className={styles.buttonAddUpload}>
      <img src={plusImage} alt="" className={styles.addButton} /> Contexto
    </button>
  );
};

export const ButtonUpload = () => {
  return (
    <button className={styles.buttonAddUpload}>
      <img src={uploadImage} alt="" className={styles.upadateButton} /> Upload
    </button>
  );
};

export const ButtonGenerate = () => {
  return (
    <button className={styles.buttonGenerate}>
      <img src={checkImage} alt="" className={styles.imgButton} /> Gerar
    </button>
  );
};

export const ButtonCancel = () => {
  return (
    <button className={styles.buttonCancel}>
      <img src={calcelImage} alt="" className={styles.imgButton} /> Cancelar
    </button>
  );
};

export const ButtonUpComplexity = () => {
  return (
    <button className={styles.buttonUpComplexity}>
      <img src={upImage} alt="" className={styles.upDownImg} /> Aumentar
      complexidade
    </button>
  );
};

export const ButtonDownComplexity = () => {
  return (
    <button className={styles.buttonDownComplexity}>
      <img src={downImage} alt="" className={styles.upDownImg} /> Simplificar
    </button>
  );
};

/* Your plan */

export const ButtonRemake = () => {
  return (
    <button className={styles.buttonOrange}>
      <img src={calcelImage} alt="" className={styles.imgButton} /> Refazer
    </button>
  );
};

export const ButtoRefresh = () => {
  return (
    <button className={styles.buttonCyan}>
      <img src={refreshImage} alt="" className={styles.imgButton} /> Atualizar
    </button>
  );
};
