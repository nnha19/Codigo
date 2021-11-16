import { useRouter } from "next/router";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const {
    query: { projectDetail },
    push,
  } = useRouter();

  return (
    <nav className={styles.nav}>
      {!projectDetail ? (
        <img
          className={styles.navLogo}
          src="https://www.codigo.co/img/ui/logo-codigo-red.svg"
        />
      ) : (
        <p onClick={() => push("/work")} className={styles.navBackBtn}>
          <span>←</span> Back To Work
        </p>
      )}
      <DesktopNav />
      <MobileNav />
    </nav>
  );
};

export default Navbar;
