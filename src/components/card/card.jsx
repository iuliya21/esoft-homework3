import styles from "./card.module.css";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";

function CardCompetention({
  image,
  title,
  description,
  level,
  mycompitentios,
  deleteCard,
  id
}) {
  return (
    <div className={styles.card}>
      {mycompitentios && (
          <DeleteIcon className={styles.deleteIcon} onClick={() => deleteCard(id)}/>
      )}
      <div className={styles.container}>
        {image && <img src={image} alt={title} className={styles.imageItem} />}
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{description}</p>
        {level && <p className={styles.text}>{`Уровень владения ${level}%`}</p>}
      </div>
    </div>
  );
}

CardCompetention.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  level: PropTypes.number,
  mycompitentios: PropTypes.bool,
  deleteCard: PropTypes.func,
  id: PropTypes.number,
};

export default CardCompetention;
