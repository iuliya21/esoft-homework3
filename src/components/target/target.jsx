import styles from "./target.module.css";
import PropTypes from 'prop-types';

function Target({ title, children }) {
  return (
    <>
      <h2 className={styles.text}>{title}</h2>
      {children}
    </>
  );
}

Target.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Target;