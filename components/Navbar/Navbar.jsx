import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img
        className={styles.navLogo}
        src="https://www.codigo.co/img/ui/logo-codigo-red.svg"
      />
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
