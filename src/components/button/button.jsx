import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({ text, onClick }) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
