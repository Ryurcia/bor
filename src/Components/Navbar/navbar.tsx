'use client'
import {clashDisplay} from "@/Fonts";
import styles from './navbar.module.css';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();

  return(
    <nav className={`${styles.nav_container} ${clashDisplay.className}`}>
      <Link href="/" className={`${clashDisplay.className} ${styles.logo}`}>Book of Ryu</Link>
      <div className={styles.nav_links}>
        <Link href="/personal" className={pathname === '/personal' ? `${styles.active_link}` : `${styles.link}` } >personal</Link>
        <Link href="/dev" className={pathname === '/dev' ? `${styles.active_link}` : `${styles.link}` } >dev</Link>
        <Link href="/random" className={pathname === '/random' ? `${styles.active_link}` : `${styles.link}` }>random</Link>
      </div>
    </nav>
  )
}


export default Navbar;