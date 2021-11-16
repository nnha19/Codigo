import NavLink from "../NavLink/NavLink";
import styles from "./DesktopNav.module.scss";
import { useRouter } from "next/router";

const DesktopNav = () => {
  const {
    query: { projectDetail },
  } = useRouter();

  return (
    <ul className={styles.desktopNavLists}>
      {!projectDetail && (
        <>
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
        </>
      )}
      <li>
        <button className={styles.desktopNavBtn}>Request a quote</button>
      </li>
    </ul>
  );
};

export default DesktopNav;
