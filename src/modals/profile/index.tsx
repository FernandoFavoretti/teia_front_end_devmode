import styles from "./styles.module.scss";
import addProfileImage from "../../assets/images/profile/add-profile.png";
import {
  ButtonCancelProfile,
  ButtonCyanCheckProfile,
} from "../../components/buttons";

export const EditProfileModal = () => {
  return (
    <>
      <div className={styles.fade}></div>
      <div className={styles.bodyDiv}>
        <div className={styles.mainDiv}>
          <div className={styles.blueDiv}></div>
          <div className={styles.contentDiv}>
            <img src={addProfileImage} alt="" />
            <div className={styles.inputLoginDiv}>
              <label htmlFor="nome">Nome</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Fulana de Souza"
                id=""
              />
            </div>
            <div className={styles.inputLoginDiv}>
              <label htmlFor="cargo">Cargo</label>
              <input
                className={styles.input}
                type="text"
                name="cargo"
                placeholder="Pedagoga"
                id=""
              />
            </div>
            <div className={styles.buttonsDiv}>
              <ButtonCyanCheckProfile children={undefined} />
              <ButtonCancelProfile children={undefined} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
