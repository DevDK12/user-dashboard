// Importing necessary packages, components, and styles for the Footer component
import styles from "./footer.module.css"; // CSS module for styling the Footer component





/**
 * Footer Component
 * 
 * This component is responsible for rendering the footer of the webpage.
 * 
 * It includes:
 * - A logo, which displays the name "Dev Kumar".
 * - A text, which displays the copyright notice "© All rights reserved."
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'footer.module.css'.
 * 
 * @returns A JSX element representing the footer of the webpage.
 */

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Dev Kumar</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
};

export default Footer;
