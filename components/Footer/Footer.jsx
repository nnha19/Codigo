import styles from "./Footer.module.scss";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiOutlineLinkedin,
  AiFillLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={`${styles.contactSection} wrapper`}>
      <div className={styles.contact}>
        <h1 className={styles.contactHeader}>Let&apos;s have a chat</h1>
        <div className={styles.contactReasons}>
          <div className={styles.contactReason}>
            <h2>
              <span>Build</span> <AiOutlineArrowRight />
            </h2>
            <p>Help you build something</p>
          </div>
          <div className={styles.contactReason}>
            <h2>
              <span>Co-incubate</span> <AiOutlineArrowRight />
            </h2>
            <p>Co-incubate an idea together</p>
          </div>
          <div className={styles.contactReason}>
            <h2>
              <span>Customise</span> <AiOutlineArrowRight />
            </h2>
            <p>Customise a solution for your business</p>
          </div>
          <div className={styles.contactReason}>
            <h2>
              <span>Organise</span> <AiOutlineArrowRight />
            </h2>
            <p>Organise learning sessions with us</p>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.socials}>
          <a href="#">
            <AiFillFacebook />
          </a>
          <a href="#">
            <AiFillTwitterSquare />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <AiFillLinkedin />
          </a>
        </div>
        <p>Copyright © Codigo - Mobile App Developer Singapore</p>
        <p>
          +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
        </p>
      </div>
    </footer>
  );
};

export default Footer;
