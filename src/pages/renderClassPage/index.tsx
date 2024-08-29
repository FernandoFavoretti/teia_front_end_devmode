import { ButtonBack, ButtonEdit, ButtonPrint } from "../../components/buttons";
import { SideMenu } from "../../components/sideMenu";
import completeClass from "../../assets/images/completePlan.png";
import styles from "./styles.module.scss";

export const RenderClassPage = () => {
  return (
    <div className={styles.divBody}>
      <div className={styles.divMain}>
        <SideMenu />
        <div className={styles.classesDiv}>
          <div className={styles.renderClassButtons}>
            <ButtonPrint />
            <ButtonEdit />
            <ButtonBack />
          </div>
          <div className={styles.renderClassDiv}>
            <img src={completeClass} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
