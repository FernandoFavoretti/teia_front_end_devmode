import styles from "./styles.module.scss";

export const ImputLogin = () => {
  return (
    <>
      <div className={styles.inputLoginDiv}>
        <label htmlFor="Email">Email</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="example@mail.com"
          id=""
        />
      </div>
      <div className={styles.inputLoginDiv}>
        <label htmlFor="password">Senha</label>
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="insira sua senha aqui"
          id=""
        />
      </div>
    </>
  );
};
