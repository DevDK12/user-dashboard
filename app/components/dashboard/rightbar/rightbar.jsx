// Importing necessary packages, components, and styles for the Rightbar component
import Image from "next/image"; // Image component from Next.js for displaying images
import styles from "./rightbar.module.css"; // CSS module for styling the Rightbar component
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md"; // Importing specific icons from react-icons




/**
 * Rightbar Component
 * 
 * This component is responsible for rendering the right sidebar of the dashboard.
 * 
 * It includes:
 * - An Image component, which displays an image in the background.
 * - A notification span, which displays a notification message.
 * - A title, which displays the title of the content.
 * - A subtitle, which displays the subtitle of the content.
 * - A description, which displays the description of the content.
 * - A button, which displays an icon and a text.
 * 
 * The layout of these components is controlled by CSS modules, with styles imported from 'rightbar.module.css'.
 * 
 * @returns A JSX element representing the right sidebar of the dashboard.
 */


const Rightbar = () => {


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the user dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Build with NextJS</span>
          <h3 className={styles.title}>
            This Dashboard is built with NextJS by Server actions  
          </h3>
          <span className={styles.subtitle}>Boost your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default Rightbar;
