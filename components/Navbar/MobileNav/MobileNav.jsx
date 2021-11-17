import { useRef } from "react";
import NavLink from "../NavLink/NavLink";
import styles from "./MobileNav.module.scss";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MobileNav = () => {
  const {
    query: { projectDetail },
  } = useRouter();
  const hamburgerRef = useRef();
  const closeRef = useRef();

  const [showNavLinks, setShowNavLinks] = useState(false);

  useEffect(() => {
    if (showNavLinks) {
      hamburgerRef.current.classList.add(styles.hideHamburger);
      setTimeout(() => {
        hamburgerRef.current.classList.add(styles.hidden);
        closeRef.current.classList.remove(styles.hidden);
      }, 500);
    } else {
      hamburgerRef.current.classList.remove(styles.hidden);
      hamburgerRef.current.classList.remove(styles.hideHamburger);
      closeRef.current.classList.add(styles.hidden);
    }
  }, [showNavLinks]);

  const toggleNavLinks = (boolean) => {
    setShowNavLinks(boolean);
  };

  return (
    <div className={styles.mobileNav}>
      <div className={`${styles.hamburgerContainer}`}>
        <span
          onClick={() => toggleNavLinks(false)}
          ref={closeRef}
          className={`${styles.close}`}
        ></span>
        <div
          className={`${styles.circle} ${showNavLinks && styles.expandCircle}`}
        ></div>
        <span
          onClick={() => toggleNavLinks(true)}
          ref={hamburgerRef}
          className={styles.hamburger}
        ></span>
      </div>
      <div
        className={`${styles.mobileNavLists} ${!showNavLinks && styles.hidden}`}
      >
        <ul>
          {!projectDetail && (
            <>
              <NavLink className={styles.mobileNavList} href="/work">
                Work
              </NavLink>
              <NavLink className={styles.mobileNavList} href="/solutions">
                Solutions
              </NavLink>
              <NavLink className={styles.mobileNavList} href="/services">
                Services
              </NavLink>
              <NavLink className={styles.mobileNavList} href="/about-us">
                About Us
              </NavLink>
              <NavLink className={styles.mobileNavList} href="/blog">
                Blog
              </NavLink>
            </>
          )}
          <NavLink className={styles.mobileNavList} href="/blog">
            Request A Quote
          </NavLink>
          <NavLink className={styles.mobileNavList} href="/blog">
            Let&apos;s Chat
          </NavLink>
        </ul>
        <div className={styles.socials}>
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
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
