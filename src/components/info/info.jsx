import styles from "./info.module.css";
import Button from "../button/button.jsx";
import PropTypes from "prop-types";

function Info({ showCompetenties, openCompetenties }) {
  return (
    <div className={styles.infoContainer}>
      <img
        src="/images/myPhoto.jpg"
        alt="Фотография"
        className={styles.image}
      />
      <div className={styles.description}>
        <div>
          <h1 className={styles.title}>Пророкова Иулия</h1>
          <p className={styles.subtitle}>frontend-developer</p>
          <p className={styles.subtitle}>Moscow</p>
        </div>
        <Button
          text={openCompetenties ? "Скрыть компетенции" : "Показать компетенции"}
          onClick={() => showCompetenties()}
        />
      </div>
    </div>
  );
}

Info.propTypes = {
  showCompetenties: PropTypes.func,
  openCompetenties: PropTypes.bool
};

export default Info;
