import {
  ButtonBackRender,
  ButtonEdit,
  ButtonPrint,
} from "../../components/buttons";
import { SideMenu } from "../../components/sideMenu";
import completeClass from "../../assets/images/completePlan.png";
import styles from "./styles.module.scss";

export const RenderClassPage = () => {
  return (
    <div className={styles.divBody}>
      <div className={styles.divMain}>
        <SideMenu children={undefined} />
        <div className={styles.classesDiv}>
          <div className={styles.renderClassButtons}>
            <ButtonPrint />
            <ButtonEdit />
            <ButtonBackRender children={undefined} />
          </div>
          <div className={styles.renderClassDiv}>
            <img src={completeClass} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
