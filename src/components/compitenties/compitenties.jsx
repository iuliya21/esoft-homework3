import styles from "./compitenties.module.css";
import PropTypes from 'prop-types';

function Compitenties({ title, children }) {
  return (
    <>
      <h2 className={styles.text}>{title}</h2>
      {children}
    </>
  );
}

Compitenties.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Compitenties;
