import NavLink from "../NavLink/NavLink";
import styles from "./DesktopNav.module.scss";

const DesktopNav = () => {
  return (
    <ul className={styles.desktopNavLists}>
      <NavLink className={styles.desktopNavList} href="/work">
        Work
      </NavLink>
      <NavLink className={styles.desktopNavList} href="/solutions">
        Solutions
      </NavLink>
      <NavLink className={styles.desktopNavList} href="/services">
        Services
      </NavLink>
      <NavLink className={styles.desktopNavList} href="/about-us">
        About Us
      </NavLink>
      <NavLink className={styles.desktopNavList} href="/blog">
        Blog
      </NavLink>
      <li>
        <button className={styles.desktopNavBtn}>Request a quote</button>
      </li>
    </ul>
  );
};

export default DesktopNav;
