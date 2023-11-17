// Importing necessary packages, components, and styles for the Card component
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css"; // CSS module for styling the Card component




/**
 * Card Component
 * 
 * This component is responsible for rendering a card.
 * 
 * It includes:
 * - A title, which displays the title of the card.
 * - A description, which displays the description of the card.
 * - An image, which displays the image of the card.
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'card.module.css'.
 * 
 * @returns A JSX element representing a card.
 */


const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
