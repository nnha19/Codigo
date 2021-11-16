import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavLink.module.scss";

const NavLink = ({ href, children, className }) => {
  const { asPath } = useRouter();
  if (asPath === href) {
    className = `${className} ${styles.navActive}`;
  }
  return (
    <Link href={href}>
      <li className={className}>{children}</li>
    </Link>
  );
};

export default NavLink;
